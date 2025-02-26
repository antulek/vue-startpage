<script>
import Module from "./Module.vue";
import LogoModule from "./modules/LogoModule.vue"
import QueryModule from "./modules/QueryModule.vue"
import CategoriesModule from "./modules/CategoriesModule.vue"

export default {
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
  components: {
    Module,
    LogoModule,
    QueryModule,
    CategoriesModule
  }
}
</script>
<template>
  <div class="website-layout grid">
    <Module container-name="logo">
      <LogoModule>

      </LogoModule>
    </Module>
    <Module container-name="query">
      <QueryModule></QueryModule>
    </Module>
    <Module container-name="categories">
      <CategoriesModule>
asd
      </CategoriesModule>
    </Module>

  </div>
</template>
<style scoped>
  .website-layout{
    min-width: 100vw;
    min-height: 100vh;
  }

  .grid{
    display: grid;
    //grid-template-columns: v-bind(gridTemplateColumnsStyle);
    grid-template-columns: auto;
    grid-template-rows: auto;
    grid-template-areas:
    "logo"
    "query"
    "categories";
    column-gap: v-bind(columnGap);
    row-gap: v-bind(rowGap);

    background-color: #0a58ca;
  }

</style>