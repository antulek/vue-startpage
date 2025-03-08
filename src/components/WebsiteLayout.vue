<script>
import WebsiteSection from "./WebsiteSection.vue"
import Module from "./modules/Module.vue"
import LogoModule from "./modules/LogoModule.vue"
import QueryModule from "./modules/QueryModule.vue"
import CategoriesModule from "./modules/CategoriesModule.vue"

export default {
  components: {
    WebsiteSection,
    Module,
    LogoModule,
    QueryModule,
    CategoriesModule
  },
  props: {
    columns: {
      type: Number,
      default: 3,
      required: false
    },
    columnGap: {
      type: String,
      default: "30px",
      required: false
    },
    rowGap: {
      type: String,
      default: "10px",
      required: false
    },
    //dev
    modules: {
      type: Number,
      default: 1,
      required: false
    }
  },
  computed:{
    gridTemplateColumnsStyle(){
      let text = "";
      for(let i = 0; i < this.columns; i++){
        text += " auto"
      }
      return text;
    }
  },
  data() {
    return {
      logo: {
        src: "https://interactive-examples.mdn.mozilla.net/media/examples/lizard.png",
        scale: 10,
        repeat: true
      }
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
      <CategoriesModule>

      </CategoriesModule>
    </WebsiteSection>
    <WebsiteSection container-name="module">
      <Module>
        MODULE
      </Module>
    </WebsiteSection>
    <WebsiteSection container-name="module-child">
      Module child
    </WebsiteSection>
  </div>
</template>
<style scoped>
  .website-layout{
    min-width: 100vw;
    min-height: 100vh;
  }

  .website-layout-grid{
    display: grid;
    grid-template-columns: v-bind(gridTemplateColumnsStyle);
    //grid-template-columns: auto;
    grid-template-rows: auto;
    grid-template-areas:
    "logo"
    "query"
    "categories"
    "module"
    "module-child";
    column-gap: v-bind(columnGap);
    row-gap: v-bind(rowGap);
  }

</style>