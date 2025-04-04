<script setup lang="ts">
// bootstrap and font-awesome icons imports
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../src/assets/styles/main.css';

// compnents imports
import Website from "./components/Website.vue";
import { useDataStore } from './stores/dataStore.js';
import { useThemeStore } from './stores/modules/themeStore.js';
import { useSchemaStore } from './stores/schemaStore.js';

const dataStore = useDataStore();
const themeStore = useThemeStore();
const schemaStore = useSchemaStore();
</script>

<template>
  <head>
    <link id="theme" rel="stylesheet" :href="themeStore.getCurrentTheme" />
  </head>
  <button @click="schemaStore.validateApplicationData()">VALIDATE</button>

  <Website :data-store="dataStore">

  </Website>

</template>
