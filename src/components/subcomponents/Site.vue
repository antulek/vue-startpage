<script setup>
import {useSearchStore} from "../../stores/searchStore.js";

const searchStore = useSearchStore();
</script>
<script>
export default {
  props: {
    site: {
      type: Object,
      default: null,
      required: true
    }
  }
}
</script>
<template>
  <div class="site">
    <div class="site-header" @click="searchStore.search(searchStore.data.query, site.search_address)">
      <div class="site-header-icon">
        {{ site.icon }}
      </div>
      <div class="site-header-name">
        {{ site.name }}
      </div>
    </div>
  </div>
</template>
<style scoped>
  .site {
    //flex-direction: column;
  }

  .site-header {
    display: flex;
    flex-direction: row;
  }
</style>