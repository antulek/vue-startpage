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
        },
        getGridTemplateAreas() {
            const dataStore = useDataStore();

            // collect modules grouped by Y
            let rows = [];
            dataStore.data.layout.forEach((module) => {
                const name = module.type + module.index;
                rows[module.grid.y] = `"${name}"`; // each row is one module
            });

            // join rows with newlines
            const template = rows.join("\n");

            console.log("grid-template-areas:\n" + template);

            return { gridTemplateAreas: template };
        }
    },
    actions: {
        printData(){
            console.log(this.data);
        }
    }
});