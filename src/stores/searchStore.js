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
        search(query, searchAddress=null){
            if(searchAddress)
                alert("Searching '"+query+"' on site'"+searchAddress+"'");
            else
                alert("Searching '"+query+"' on google");
        },
    }
})