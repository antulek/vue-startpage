<script setup lang="ts">
// bootstrap and font-awesome icons imports
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';

import '../src/assets/styles/main.css';
import '../src/assets/styles/themes/default.css';
// compnents imports
import Website from "./components/Website.vue";
import { useDataStore } from './stores/dataStore.js';

const dataStore = useDataStore();
</script>

<template>
  <Website :data-store="dataStore">

  </Website>
</template>

<style scoped>

</style>
