<script>
import WebsiteSection from "./WebsiteSection.vue"
import Module from "./modules/Module.vue"
import LogoModule from "./modules/LogoModule.vue"
import QueryModule from "./modules/QueryModule.vue"
import CategoriesModule from "./modules/CategoriesModule.vue"
import SettingsModule from "./modules/SettingsModule.vue"
import XkcdComic from "./modules/funmodules/XkcdComic.vue";
import {useThemeStore} from "../stores/modules/themeStore.js";

export default {
  components: {
    XkcdComic,
    WebsiteSection,
    Module,
    LogoModule,
    QueryModule,
    CategoriesModule,
    SettingsModule
  },
  props: {
    dataStore: {
      type: Object,
      default: null,
      required: true
    },
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
      themeStore: useThemeStore(),
    }


  }
}
</script>
<template>
  <slot>
    <div class="website-layout" >
      <div class="website-header">
        <button @click="themeStore.shuffleModules()">
          Shuffle +1
        </button>
        <button @click="themeStore.nukeData()">
          NUKE
        </button>
      </div>
      <div class="website-layout-grid" :style="themeStore.getGridTemplateAreas2D">
        <template v-for="module in dataStore.data.layout" :key="module.index">
          <website-section :container-name="module.type+module.index">
            <component :is="module.type+`-module`" v-bind="module.data">

            </component>
          </website-section>
        </template>
        <!--
        <WebsiteSection container-name="logo">
          <LogoModule v-bind="dataStore.data.logo">
            L.O.G.O
          </LogoModule>
        </WebsiteSection>
        <WebsiteSection container-name="query">
          <QueryModule></QueryModule>
        </WebsiteSection>
        <WebsiteSection container-name="categories">
          <CategoriesModule :categories="dataStore.data.categories">

          </CategoriesModule>
        </WebsiteSection>
        <WebsiteSection container-name="xkcd">
          <XkcdComic>

          </XkcdComic>
        </WebsiteSection>
        -->
      </div>
      <div class="website-footer">
        <SettingsModule :settings-data="dataStore.data.settings"></SettingsModule>
      </div>
    </div>
  </slot>
</template>

