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
    <div class="border sidebar">a</div>
    <div class="border content">a</div>
    <container container-name="special">special</container>
    <div class="border footer">a</div>
  </div>
</template>
<style scoped>
  #main-grid {
    display: grid;
    grid-template-columns: 20vw auto auto;
    grid-template-rows: 15vh 70vh 5vh;
    grid-template-areas:
    "logo logo logo"
    "sidebar content special"
    "footer footer footer";
  }

  .sidebar{
    grid-area: sidebar;
    width: 20vw;
  }

  .content{
    grid-area: content;
  }

  .footer{
    grid-area: footer;
  }

  .border{
    border: 1px solid black;
    background-color: lightgrey;
  }
</style>