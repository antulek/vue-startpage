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
  },
  methods: {
    alert(message){ alert(message); }
  }
}
</script>
<template>
  <div class="site"
       @click.exact="searchStore.search(searchStore.data.query, site)"
       @click.alt.exact="searchStore.search(searchStore.data.query, site)"
       @click.ctrl.exact="searchStore.search(searchStore.data.query, site, false, true)"
       @click.alt.ctrl.exact="searchStore.search(searchStore.data.query, site, true, true)"
  >
    <div class="site-header">
      <div class="site-header-icon">
        {{ site.icon }}
      </div>
      <div class="site-header-name">
        <template v-if="site.name">
          {{site.name}}
        </template>
        <template v-else>
          {{site.address}}
        </template>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .site {
    /* flex-direction: column; */
  }

  .site-header {
    display: flex;
    flex-direction: row;
  }
</style>