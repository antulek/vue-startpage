<script>
import SettingsThemes from "../subcomponents/Settings/SettingsThemes.vue";

  export default {
    props: {
      settingsData: {
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
    components: {
      SettingsThemes,
    },
    data() {
      return {

      }
    }
  }
</script>
<template>
  <div class="settings-module">
    <div class="settings-header">
      <SettingsThemes :themes-data="settingsData.themes" :is-drop-up="isDropUp">

      </SettingsThemes>
    </div>
  </div>
</template>
<style scoped>
  /* don't add any rules here! Please use imported file instead! */
  @import "@/assets/styles/settings.css";
</style>