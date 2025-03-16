import { defineStore } from "pinia";

export const useDataStore = defineStore('dataStore',{
   state: () => ({
       categories: [
           {
               "name": "News",
               "icon": "📰",
               "color": "#FF5733",
               "sites": [
                   {
                       "name": "BBC",
                       "address": "https://www.bbc.com",
                       "search_address": "https://www.bbc.com/search?q=",
                       "icon": "🌍",
                       "color": "#005BBC"
                   },
                   {
                       "name": "CNN",
                       "address": "https://www.cnn.com",
                       "search_address": "https://www.cnn.com/search?q=",
                       "icon": "📺",
                       "color": "#CC0000"
                   },
                   {
                       "name": "The Guardian",
                       "address": "https://www.theguardian.com",
                       "search_address": "https://www.theguardian.com/search?q=",
                       "icon": "📰",
                       "color": "#052962"
                   },
                   {
                       "name": "NY Times",
                       "address": "https://www.nytimes.com",
                       "search_address": "https://www.nytimes.com/search?query=",
                       "icon": "🗞️",
                       "color": "#000000"
                   }
               ]
           }
       ],
       logo: {
           src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Wikipedia-logo-v2.svg/640px-Wikipedia-logo-v2.svg.png"
       },
       setings: {
           themes: {
               themeList: [],
               currentTheme: 'default.css'
           }
       }
   }),
   actions: {

   }
});