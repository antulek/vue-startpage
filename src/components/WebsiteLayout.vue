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
    }


  }
}
</script>
<template>
  <div class="website-layout website-layout-grid">

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
    <WebsiteSection container-name="lorem">
      <Module>
        <span v-for="l in [0,1,2,3,4,5,6,7,8,9,0]">
          <span v-for="lorem in [0,1,2,3,4,5,6,7,8,9,0]">
            Lorem ipsum
          </span>
        </span>
      </Module>
    </WebsiteSection>
    <WebsiteSection container-name="settings">
      <div class="footer">
        <SettingsModule :settings-data="dataStore.data.settings"></SettingsModule>
      </div>
    </WebsiteSection>
  </div>
</template>