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
            return { gridTemplateAreas: template };
        },
        /**
         * There we assume that all grid properties (x,y,width,height) are present yup.cast was run
         * but we don't assume that data is valid, we need to check it first
         */
        getGridTemplateAreas2D(){
            const dataStore = useDataStore();
            if (!Array.isArray(dataStore.data?.layout) || dataStore.data.layout.length === 0) {
                return { gridTemplateAreas: "" };
            }
            console.log(dataStore.data);

            let maxWidth = 1;
            let maxHeight = 1;
            //define maxheight/width
            for (const module of dataStore.data.layout) {
                if(module.grid.x+module.grid.width > maxWidth)
                    maxWidth = module.grid.x+module.grid.width;
                if(module.grid.y+module.grid.height > maxHeight)
                    maxHeight = module.grid.y+module.grid.height;
            }
            //console.log(maxWidth+" x "+maxWidth);
            let grid = [];
            for (let j = 0; j < maxHeight; j++) {
                grid.push(Array(maxWidth).fill('.'));
            }

            for (const module of dataStore.data.layout) {
                //console.log("Comparing: " + module.type + module.index+" "+JSON.stringify(module.grid));

                for (const moduleCompared of dataStore.data.layout) {
                    if (module === moduleCompared) continue;
                    if( this.checkOverlap(module.grid, moduleCompared.grid) ){
                        console.log("Module "+(module.type + module.index)+" with module "+(moduleCompared.type + moduleCompared.index));
                        //throw new Error("Module "+(module.type + module.index)+" with module "+(moduleCompared.type + moduleCompared.index));
                    }
                }

                for(let j=module.grid.y; j<module.grid.y+module.grid.height; j++){
                    for(let i=module.grid.x; i<module.grid.x+module.grid.width; i++){
                        grid[j][i] = module.type+module.index;
                        console.log(j+" "+i+" | "+module.type+module.index);
                    }
                }
            }

            let template =  grid.map(row => `"${row.join(' ')}"`).join('\n');
            console.log(template);
            return { gridTemplateAreas: template };
        },
    },
    actions: {
        printData(){
            console.log(this.data);
        },
        checkOverlap(a,b){
            return ( (b.x+b.width-1)>=a.x && b.x<=(a.x+a.width-1) &&
                (b.y+b.height-1)>=a.y && b.y<=(a.y+a.height-1));
        },
    }
});