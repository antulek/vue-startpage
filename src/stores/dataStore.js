import { defineStore } from "pinia";
import emptyData from "../assets/emptyData.json";
import exampleData from "../assets/exampleData.json"

export const useDataStore = defineStore('dataStore',{
   state: () => ({
      data: emptyData
   }),
   getters: {

   },
   actions: {
      importFixed(){
         this.data = exampleData;
      },
      dataTransfer(action, storage){
         let allowedActions = ['import', 'export'];
         let allowedStorage = ['local storage', 'file', 'json', 'fixed'];
         if(!allowedActions.includes(action)){
            console.error("Specified action: "+action+" was not specified in allowed actions "+JSON.stringify(allowedActions))
            return null;
         }

         if(!allowedStorage.includes(storage)){
            console.error("Specified storage: "+allowedStorage+" was not specified in allowed storages "+JSON.stringify(allowedStorage))
            return null;
         }

         switch ((action+'-'+storage)){
            case 'import-fixed':
               this.importFixed();
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