<script>
import SettingsThemes from "../subcomponents/Settings/SettingsThemes.vue";
import SettingsData from "../subcomponents/Settings/SettingsData.vue"

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
      SettingsData,
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
      <SettingsData :is-drop-up="isDropUp">

      </SettingsData>
    </div>
  </div>
</template>