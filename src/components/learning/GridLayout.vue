<script lang="ts">
import Container from "./Container.vue";
import ContainerLogo from "./ContainerLogo.vue";
export default {
  components: {ContainerLogo, Container},
  props: {
    columns: Number,
    rows: Number,
  },
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>
<template id="main">
  <div id="main-grid">
    <container-logo></container-logo>
    <container container-name="nav">ART</container>
    <container container-name="article">ART</container>
    <container container-name="special">special</container>
  </div>
</template>
<style scoped>
  #main-grid {
    display: grid;
    grid-template-columns: 30vw 30vw 30vw;
    grid-template-rows: auto auto auto;
    grid-template-areas:
    "logo logo logo"
    "nav article article"
    "special article article"
    "special article article";
  }
</style>