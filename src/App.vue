<script setup lang="ts">
// bootstrap and font-awesome icons imports
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';

import '../src/assets/styles/main.css';

// compnents imports
import Website from "./components/Website.vue";
import { useDataStore } from './stores/dataStore.js';
import {onMounted} from "vue";

const dataStore = useDataStore();

</script>

<template>
  <head>
    <link id="theme" rel="stylesheet" :href="'./src/assets/styles/themes/'+dataStore.settings.themes.currentTheme+'.css'" />
  </head>

  <Website :data-store="dataStore">

  </Website>

</template>
