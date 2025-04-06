import { defineStore } from "pinia";
import { useDataStore } from "../dataStore.js"

export const useThemeStore = defineStore('themeStore', {
    getters: {
        getThemeStoreData(){
            const dataStore = useDataStore();
            return dataStore.data?.settings?.themes;
        },
        getCurrentTheme(){
            const dataStore = useDataStore();
            let theme = 'debug';
            if(dataStore?.data?.settings?.themes?.currentTheme && dataStore.data.settings.themes.currentTheme.length){
                theme = dataStore.data.settings.themes.currentTheme
            }

            return './assets/styles/themes/'+theme+'.css';
        }
    },
    actions: {
        printData(){
            console.log(this.data);
        }
    }
});