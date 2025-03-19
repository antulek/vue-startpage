<script>
import {useDataStore} from "../../../stores/dataStore.js";

  export default {
    props: {
      themesData: {
        type: Object,
        default: null,
        required: true
      },
      isDropUp: {
        type: Boolean,
        default: true,
        required: false,
      }
    },
    computed: {
      dropStyle(){
        return (this.isDropUp ? {bottom: '100%'} : {top: '100%'})
      }
    },
    data() {
      return {
        dataStore: useDataStore(), // ✅ Store instance in `data()`
      };
    },
    methods: {
      theme(name){
        this.dataStore.setTheme(name);
        console.log("Setting theme to:"+name);
      }
    }
  }
</script>
<template>
  <div class="settings-item">
    <div class="settings-item-header">
      Themes ({{themesData.currentTheme}})
    </div>
    <div class="settings-item-actions" :style="dropStyle">
      <template v-if="themesData && themesData.themesList" >
        <div v-for="themeName in themesData.themesList" class="settings-action"
          @click="theme(themeName)">
          {{themeName}}
        </div>
      </template>
      <template v-else>
        <div class="settings-action">
          No Themes Specified!
        </div>
      </template>
    </div>
  </div>
</template>