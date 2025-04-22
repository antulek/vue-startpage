import { defineStore } from 'pinia'

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
        /* internal helper functions start */
        getBaseSite(address){
            let domainRegex = new RegExp("(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]");
            let domain= domainRegex.exec(address);
            if(!domain){
                console.log("DOMAIN NOT FOUND for:"+address);
                return null;
            }
            domain = domain.toString();
            if(domain.length === 0)return null;
            if(domain.startsWith("www."))
                domain = domain.slice(4);
            return domain;
        },
        /* internal helper functions end */
        stringifyCurrentSites(categories){
            let separator = " | ";
            let string = "";
            categories.forEach((category) => {
                string += '\n';
                let separatorCount = (Object.values(category).length)-2;
                FIELD_NAMES.category.forEach((categoryFieldName) => {
                    string += category[categoryFieldName] ?? '';
                    if(separatorCount > 0){
                        string += separator;
                        separatorCount--;
                    }
                });
                string += '\n';

                let prevDomain = null;
                let prevDomainFresh = true;
                category.sites.forEach((site) => {
                    prevDomainFresh = false;
                    if(prevDomain == null || prevDomain != this.getBaseSite(site.address)) {
                        prevDomain = this.getBaseSite(site.address);
                        prevDomainFresh = true;
                    }

                    let siteSeparatorCount = (Object.values(site).length)-1;
                    if(prevDomainFresh)string += '-';
                    else string+='+';
                    FIELD_NAMES.site.forEach((siteFieldName) => {
                        if(site[siteFieldName] && site[siteFieldName].length && ( (siteFieldName == 'address' && !prevDomainFresh) || (siteFieldName == 'search_address' && prevDomainFresh)) ){
                            //console.log("not fresh! "+this.getBaseSite(site[siteFieldName]));
                            //console.log("cutting: "+site[siteFieldName].slice(prevDomain.length));
                            string += site[siteFieldName].slice(prevDomain.length);
                        }else{
                            string += site[siteFieldName] ?? '';
                        }

                        if(siteSeparatorCount > 0){
                            string += separator;
                            siteSeparatorCount--;
                        }
                    });
                    string += '\n';
                })
            });

            return string;
        },
        parseInput(input) {
            let isWordCharacterRegex = new RegExp("\\w");
            let openedCategoryIndex = null;
            let lastSiteObject = null;

            let parsedData = [];
            let currentObject = null;

            input.split(/\r?\n|\r|\n/g).forEach((line) => {
                if( line.trim().length === 0 || line.trim().charAt(0) === '#')
                    return;

                line = line.trimStart();
                switch(line.charAt(0)){
                    case SITE_SUFFIX:
                        line = line.substring(1);
                        currentObject = this.parseFields(line, "site");
                        if(currentObject && openedCategoryIndex != null){
                            parsedData[openedCategoryIndex].sites.push(currentObject);
                            lastSiteObject = currentObject;
                            //console.log(currentObject.address+" domain:"+this.getBaseSite(currentObject.address));
                        }
                        break;
                    case SUBSITE_SUFFIX:
                        line = line.substring(1);
                        currentObject = this.parseFields(line, "subsite", lastSiteObject);
                        if(currentObject && openedCategoryIndex != null){
                            parsedData[openedCategoryIndex].sites.push(currentObject);
                            //console.log(currentObject.address+" domain:"+this.getBaseSite(currentObject.address));
                        }
                        break;
                    default:
                        if(isWordCharacterRegex.test(line.charAt(0))){
                            currentObject = this.parseFields(line,"category");
                            if(currentObject){
                                parsedData.push(currentObject);
                                openedCategoryIndex = parsedData.length-1;
                            }

                            lastSiteObject = null;
                        }else{
                            console.error("Wrong character!");
                        }
                        break;
                }

                currentObject = null;
            });
            console.log(parsedData);
            return parsedData;
        },
        parseFields(string, type, lastSiteObject = null){
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

            if(type == 'category'){
                parsedObject.sites = [];
            }

            if((type == 'site') && Object.values(parsedObject).length >= 3
                && parsedObject.search_address.length > 0 && parsedObject.search_address.charAt(0) == '/'){
                console.log("Shorthand search! "+this.getBaseSite(parsedObject.address)+parsedObject.search_address);
                parsedObject.search_address = this.getBaseSite( parsedObject.address ) + parsedObject.search_address;
            }


            if(type == 'subsite' && Object.values(parsedObject).length >= 1
                && parsedObject.address.length > 0 && parsedObject.address.charAt(0) == '/'){
                console.log("appending domain: "+this.getBaseSite( lastSiteObject.address )+" to: "+parsedObject.address);
                if(Object.values(parsedObject).length == 1){
                    parsedObject.name = parsedObject.address;
                }
                parsedObject.address = this.getBaseSite( lastSiteObject.address ) + parsedObject.address;
            }

            if(type == 'subsite' && Object.values(parsedObject).length >= 3
                && parsedObject.search_address.length > 0 && parsedObject.search_address.charAt(0) == '/'){
                console.log("appending search domain: "+this.getBaseSite( lastSiteObject.address )+" to: "+parsedObject.search_address);
                parsedObject.search_address = this.getBaseSite( lastSiteObject.address ) + parsedObject.search_address;
            }

            if(type != 'category'){
                ['https://', 'http://', 'www.'].forEach((part) => {
                    if(parsedObject.address.startsWith(part)){
                        parsedObject.address = parsedObject.address.slice( part.length );
                    }
                })
            }


            if( Object.values(parsedObject).length )
                return parsedObject;
            else
                return null;
        },
    }
});