<script setup>
import {useSearchStore} from "../../stores/searchStore.js";

const searchStore = useSearchStore();
</script>
<script>
import Module from './Module.vue';

export default {
  extends: Module,
  components: {
    Module
  },
  data() {
    return{

    }
  },
  methods: {

  }
}
</script>
<template>
  <Module>
    <div class="query-module">
      <div class="query-module-input">
        <input type="text" v-model="searchStore.data.query"
               @keyup.enter.exact="searchStore.search(searchStore.data.query)"
               @keyup.enter.alt.exact="searchStore.search(searchStore.data.query, null, true)"
               @keyup.enter.ctrl.exact="searchStore.search(searchStore.data.query, null, false, true)"
               @keyup.enter.alt.ctrl.exact="searchStore.search(searchStore.data.query, null, true, true)"
        >
        <button
            @click.exact="searchStore.search(searchStore.data.query)"
            @click.ctrl.exact="searchStore.search(searchStore.data.query, null, false, true)"
        >Search</button>
        <button
            @click="searchStore.search(searchStore.data.query, null, true)"
        >Lucky</button>
      </div>
    </div>
  </Module>
</template>