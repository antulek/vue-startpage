import { defineStore } from "pinia";
import emptyData from "../assets/emptyData.json";
import exampleData from "../assets/exampleData.json"
import {useOverlayStore} from "./overlayStore.js";

export const useDataStore = defineStore('dataStore',{
   state: () => ({
      currentLocalStorageKey: 'applicationData',
      data: {...JSON.parse( localStorage.getItem('applicationData' ))},
   }),
   getters: {

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
      saveJsonStorage(){

      },
      discardJsonStorage(){

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