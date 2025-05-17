<script setup>

import Website from "./components/Website.vue";
import { useDataStore } from './stores/dataStore.js';
import { useThemeStore } from './stores/modules/themeStore.js';

const dataStore = useDataStore();
const themeStore = useThemeStore();
</script>

<template>
  <head>
    <link id="theme" rel="stylesheet" :href="themeStore.getCurrentTheme" />
  </head>

  <Website :data-store="dataStore">

  </Website>

</template>
