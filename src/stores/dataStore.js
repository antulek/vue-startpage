import { defineStore } from "pinia";
import exampleData from "../assets/data.json";

export const useDataStore = defineStore('dataStore',{
   state: () => ({
      data: exampleData
   }),
   getters: {

   },
   actions: {
      setTheme(name){
         this.data.settings.themes.currentTheme = name;
         console.log("Setting theme to:"+name);
      }
   }
});