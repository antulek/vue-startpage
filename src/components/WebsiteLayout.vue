<script>
import WebsiteSection from "./WebsiteSection.vue"
import Module from "./modules/Module.vue"
import LogoModule from "./modules/LogoModule.vue"
import QueryModule from "./modules/QueryModule.vue"
import CategoriesModule from "./modules/CategoriesModule.vue"
import SettingsModule from "./modules/SettingsModule.vue"

export default {
  components: {
    WebsiteSection,
    Module,
    LogoModule,
    QueryModule,
    CategoriesModule,
    SettingsModule
  },
  props: {
    columns: {
      type: Number,
      default: 3,
      required: false
    },
    columnGap: {
      type: String,
      default: "0px",
      required: false
    },
    rowGap: {
      type: String,
      default: "0px",
      required: false
    },
    //dev
    modules: {
      type: Number,
      default: 1,
      required: false
    }
  },
  computed: {
    gridTemplateColumnsStyle() {
      let text = "";
      for (let i = 0; i < this.columns; i++) {
        text += " auto"
      }
      return text;
    }
  },
  data() {
    return {
      logo: {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Wikipedia-logo-v2.svg/640px-Wikipedia-logo-v2.svg.png"
      },
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
        },
        {
          "name": "Technology",
          "icon": "💻",
          "color": "#4CAF50",
          "sites": [
            {
              "name": "TechCrunch",
              "address": "https://www.techcrunch.com",
              "search_address": "https://search.techcrunch.com/search?q=",
              "icon": "🚀",
              "color": "#0F9D58"
            },
            {
              "name": "Wired",
              "address": "https://www.wired.com",
              "search_address": "https://www.wired.com/search/?q=",
              "icon": "🔌",
              "color": "#FF9800"
            },
            {
              "name": "Ars Technica",
              "address": "https://www.arstechnica.com",
              "search_address": "https://www.arstechnica.com/search?q=",
              "icon": "🖥️",
              "color": "#D32F2F"
            },
            {
              "name": "The Verge",
              "address": "https://www.theverge.com",
              "search_address": "https://www.theverge.com/search?q=",
              "icon": "📱",
              "color": "#673AB7"
            }
          ]
        },
        {
          "name": "Entertainment",
          "icon": "🎭",
          "color": "#E91E63",
          "sites": [
            {
              "name": "IMDb",
              "address": "https://www.imdb.com",
              "search_address": "https://www.imdb.com/find?q=",
              "icon": "🎬",
              "color": "#F5C518"
            },
            {
              "name": "Netflix",
              "address": "https://www.netflix.com",
              "search_address": "https://www.netflix.com/search?q=",
              "icon": "🎥",
              "color": "#E50914"
            },
            {
              "name": "Spotify",
              "address": "https://www.spotify.com",
              "search_address": "https://open.spotify.com/search/",
              "icon": "🎵",
              "color": "#1DB954"
            },
            {
              "name": "YouTube",
              "address": "https://www.youtube.com",
              "search_address": "https://www.youtube.com/results?search_query=",
              "icon": "▶️",
              "color": "#FF0000"
            }
          ]
        }
      ]
    }


  }
}
</script>
<template>
  <div class="website-layout website-layout-grid">
    <WebsiteSection container-name="logo">
      <LogoModule v-bind="logo">
        L.O.G.O
      </LogoModule>
    </WebsiteSection>
    <WebsiteSection container-name="query">
      <QueryModule></QueryModule>
    </WebsiteSection>
    <WebsiteSection container-name="categories">
      <CategoriesModule :categories="categories">

      </CategoriesModule>
    </WebsiteSection>
    <WebsiteSection container-name="settings">
      <SettingsModule></SettingsModule>
    </WebsiteSection>
  </div>
</template>
<style scoped>
.website-layout {
  min-width: 100vw;
  //min-height: 100vh;
}

.website-layout-grid {
  display: grid;
  grid-template-columns: v-bind(gridTemplateColumnsStyle);
//grid-template-columns: auto; grid-template-rows: auto;
  grid-template-areas:
    "logo"
    "query"
    "categories"
    "settings";
  column-gap: v-bind(columnGap);
  row-gap: v-bind(rowGap);
}

</style>