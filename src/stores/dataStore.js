import { defineStore } from "pinia";
import emptyData from "../assets/emptyData.json";
import exampleData from "../assets/exampleData.json"
import {useOverlayStore} from "./overlayStore.js";

export const useDataStore = defineStore('dataStore',{
   state: () => {
      const key = 'applicationData';
      const local = localStorage.getItem(key);

      let parsedData;
      try {
         parsedData = local ? JSON.parse(local) : null;
      } catch (e) {
         parsedData = null;
         console.warn('Invalid JSON in localStorage:', e);
      }

      return {
         currentLocalStorageKey: key,
         data: parsedData || exampleData
      };
   },
   actions: {
      /* Local Storage START */
      loadFromLocalStorage(localStorageKey = null){
         if(localStorageKey === null){
            localStorageKey = this.currentLocalStorageKey;
         }
         this.data = {...JSON.parse( localStorage.getItem( localStorageKey ))}
      },
      saveToLocalStorage(data = null){
         if(data === null){
            data = this.data
         }

         localStorage.setItem(this.currentLocalStorageKey, JSON.stringify(data));
      },
      /* Local Storage END */
      /* JSON Storage START */
      loadFromJSON(json){
         try{
            let parsedData = JSON.parse(json);
         }catch (error){
            console.error(error);
            return null;
         }
         this.data = {...JSON.parse(json)};
      },
      downloadJson(data, filename="data") {
         const dataStr = JSON.stringify(data, null, 2)
         const blob = new Blob([dataStr], { type: 'application/json' })
         const url = URL.createObjectURL(blob)

         const link = document.createElement('a')
         link.href = url
         link.download = filename+'.json'
         link.click()

         URL.revokeObjectURL(url)
      },
      /* JSON Storage END */
      dataTransfer(action, storage){
         let allowedActions = ['import', 'export'];
         let allowedStorage = ['file', 'json', 'fixed-default', 'fixed-empty'];
         if(!allowedActions.includes(action)){
            console.error("Specified action: "+action+" was not specified in allowed actions "+JSON.stringify(allowedActions))
            return null;
         }

         if(!allowedStorage.includes(storage)){
            console.error("Specified storage: "+allowedStorage+" was not specified in allowed storages "+JSON.stringify(allowedStorage))
            return null;
         }

         switch ((action+'-'+storage)){
            case 'import-fixed-default':
               this.data = {...exampleData};
               break;
            case 'import-fixed-empty':
               this.data = {...emptyData};
               break;
            default:
               console.error("Unknown! action:"+action+" storage:"+storage);
               return null;
         }

         console.log("action:"+action+" "+(action == "import" ? 'from' : 'to')+" "+storage);
      },
      setTheme(name){
         this.data.settings.themes.currentTheme = name;
         console.log("Setting theme to:"+name);
      },
   }
});