import { defineStore } from "pinia";
import { useDataStore } from "../dataStore.js"

export const useThemeStore = defineStore('themeStore', {
    state: () => {
        const dataStore = useDataStore();
        return {
            data: dataStore.data?.settings?.themes || null
        }
    },
    getters: {
        getCurrentTheme(){
            let theme = 'debug';
            if(this.data && this.data.currentTheme && this.data.currentTheme.length)
                theme = this.data.currentTheme
            return './src/assets/styles/themes/'+theme+'.css';
        }
    },
    actions: {
        printData(){
            console.log(this.data);
        }
    }
});