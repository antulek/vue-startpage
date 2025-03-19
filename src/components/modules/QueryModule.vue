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
        <input type="text" v-model="searchStore.data.query">
        <button @click="searchStore.search(searchStore.data.query)">Search</button>
        <button>Lucky</button>
      </div>
    </div>
  </Module>
</template>