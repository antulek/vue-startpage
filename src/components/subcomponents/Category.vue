<script>
import Site from "./Site.vue";
  export default {
    components: {
      Site
    },
    props: {
      category: {
        type: Object,
        default: null,
        required: true
      }
    }
  }
</script>
<template>
  <div class="category">
    CATEGORY: {{ category.name }}
    <Site v-for="site in category.sites" :site="site" class="site">
      {{site.name}}
    </Site>
  </div>
</template>
<style scoped>
  .category {
    flex-direction: row;
    width: 100%;
    border: 2px solid blueviolet;
  }
</style>