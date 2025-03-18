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
    <div class="category-header">
      <div class="category-header-icon">
        {{category.icon}}
      </div>
      <div class="category-header-name">
        {{category.name}}
      </div>
    </div>
    <div class="category-sites">
      <Site v-for="site in category.sites" :site="site" class="site">
        {{site.name}}
      </Site>
    </div>
  </div>
</template>
<style scoped>
  .category {
    flex-direction: row;
    width: 100%;
  }

  .category-header{
    display: flex;
    flex-direction: row;
  }
</style>