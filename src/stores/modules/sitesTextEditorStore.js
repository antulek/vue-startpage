import { defineStore } from 'pinia'
import { ref } from 'vue'

const SEPARATOR = ' | ';
const SITE_SUFFIX = "-";
const SUBSITE_SUFFIX = "+";

const FIELD_NAMES = {
    category: ['name', 'color', 'icon'],
    site: ['address', 'name', 'search_address', 'color', 'icon'],
    subsite: ['address', 'name', 'search_address', 'color', 'icon'],
};

const FIELDS_REGEX = {
    address: null, //
    name: null, //
    search_address: null, //
    color: "#[0-9a-zA-Z]{3,8}", // #faa, #ffaaaacc
    icon: "(\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])" //emoji
};

export const useSitesTextEditorStore = defineStore('sitesTextEditor', {
    actions: {
        parseInput(event) {
            let isWordCharacterRegex = new RegExp("\\w");
            let openedCategoryIndex = null;
            let openedSiteIndex = null;

            let parsedData = [];
            let currentObject = null;

            event.target.value.split(/\r?\n|\r|\n/g).forEach((line) => {
                if( line.trim().length === 0 || line.trim().charAt(0) === '#')
                    return;

                line = line.trimStart();
                switch(line.charAt(0)){
                    case SITE_SUFFIX:
                        console.log("Adding site: "+line);
                        this.parseFields(line, "site");
                        break;
                    case SUBSITE_SUFFIX:
                        console.log("Adding subsite: "+line);
                        this.parseFields(line, "subsite");
                        break;
                    default:
                        if(isWordCharacterRegex.test(line.charAt(0))){
                            console.log("Adding category: "+line);
                            this.parseFields(line,"category");
                            //this.parseCategory(line);
                        }else{
                            console.error("Wrong amount of spaces!");
                        }
                        break;
                }

                console.log(parsedData);
            });
        },
        parseFields(string, type){
            let fields = string.split('|');
            let minLength = Math.min(fields.length, FIELD_NAMES[type].length);
            let parsedObject = {};
            for(let i=0; i<minLength; i++){
                let test=true;
                if(FIELDS_REGEX[FIELD_NAMES[type][i]]){
                    let regex = new RegExp(FIELDS_REGEX[FIELD_NAMES[type][i]]);
                    test = regex.test(fields[i].trim());
                }
                if(test){
                    parsedObject[FIELD_NAMES[type][i]] = fields[i].trim();
                }
            }
            if( Object.values(parsedObject).length )
                return parsedObject;
            else
                return null;
        },
        parseCategory(line){
            let fields = line.trim().split(SEPARATOR);
        }
    }
});