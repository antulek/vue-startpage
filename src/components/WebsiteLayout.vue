<script>
import Module from "./Module.vue";

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
    Module
  }
}
</script>
<template>
  <div class="website-layout grid">
    <Module container-name="sidebar"></Module>
    <Module container-name="content"></Module>
    <Module container-name="sidebar2"></Module>
    <Module container-name="footer"></Module>
  </div>
</template>
<style scoped>
  .website-layout{
    background-color: aquamarine;
    min-width: 100vw;
    min-height: 100vh;
  }

  .grid{
    display: grid;
    //grid-template-columns: v-bind(gridTemplateColumnsStyle);
    grid-template-columns: v-bind(gridTemplateColumnsStyle);
    grid-template-rows: v-bind(gridTemplateColumnsStyle);
    grid-template-areas:
    "logo logo logo"
    "sidebar content sidebar2"
    "footer content sidebar2";
    column-gap: v-bind(columnGap);
    row-gap: v-bind(rowGap);
  }

  @media only screen and (min-width: 768px) {
    .website-layout{
      background-color: red;
      min-width: 90vw;
      min-height: 90vh;

      margin: 5vh;
      margin-inline: 5vw;
    }

    .grid{
      //grid-template-columns: v-bind(gridTemplateColumnsStyle);

    }
  }
</style>