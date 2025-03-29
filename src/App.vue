<script setup lang="ts">
// bootstrap and font-awesome icons imports
import '@fortawesome/fontawesome-free/css/all.min.css';

import '../src/assets/styles/main.css';

// compnents imports
import Website from "./components/Website.vue";
import { useDataStore } from './stores/dataStore.js';

const dataStore = useDataStore();

</script>

<template>
  <head>
    <link id="theme" rel="stylesheet" :href="'./src/assets/styles/themes/'+dataStore.data.settings.themes.currentTheme+'.css'" />
  </head>

  <Website :data-store="dataStore">

  </Website>

</template>
