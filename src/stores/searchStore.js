import { defineStore } from "pinia";

export const useSearchStore = defineStore('searchStore',{
    state: () => ({
        data: {
            query: null
        }
    }),
    getters: {

    },
    actions: {
        search(query, site=null, lucky= false, newTab = false){
            let destination = "";
            let parameters = lucky ? "?btnI=1&q=" : "?q=";
            if(query && !site){
                destination = "http://www."+"google.com/search"+parameters+encodeURI(query);
            }else if(!query && site && site.address){
                destination = site.address;
            }else if(query && site && site.address && !site.search_address){
                destination = "http://www."+"google.com/search"+parameters+encodeURI("site:"+site.address+" "+query);
            }else if(query && site && site.address && site.search_address){
                destination = site.search_address+encodeURI(query);
            }


            if(query || site){
                if(newTab)
                    window.open(destination, '_blank');
                else
                    window.location.href = destination;
            }
        },
    }
})