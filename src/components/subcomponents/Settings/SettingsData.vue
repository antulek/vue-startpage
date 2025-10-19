<script>
import DataFileUpload from "../Edit/DataFileUpload.vue";
import { useDataStore } from '../../../stores/dataStore.js';
import {useOverlayStore} from "../../../stores/overlayStore.js";

export default {
  components: {
    DataFileUpload
  },
  props: {
    isDropUp: {
      type: Boolean,
      default: true,
      required: false,
    },
  },
  computed: {
    dropStyle(){
      return (this.isDropUp ? {bottom: '100%'} : {top: '100%'})
    }
  },
  data(){
    return{
      show: false,
    }
  },
  setup() {
    const dataStore = useDataStore();
    const overlayStore = useOverlayStore();

    return {
      dataStore,
      overlayStore,
    };
  },
  methods: {
    loadExampleConfiguration(name){
      this.dataStore.loadExampleData(name);
      this.dataStore.saveToLocalStorage();
    }
  },
  mounted() {

  }
}
</script>
<template>
  <div class="settings-item">
    <div class="settings-item-header" @click="show = !show">
      Data
    </div>
    <div v-if="show" class="settings-item-body" :style="dropStyle">
      <div class="settings-item-category" @click="this.overlayStore.show('dataSitesTextEditor')">
        <div class="settings-action">
          Edit sites
        </div>
      </div>
      <div class="settings-item-category" @click="this.overlayStore.show('dataJsonEditor')">
        <div class="settings-action">
          Edit data
        </div>
      </div>
      <div class="settings-item-category">
        <div class="settings-action" @click="loadExampleConfiguration('default')">
          Load default
        </div>
        <div class="settings-action" @click="loadExampleConfiguration('images')">
          Load IMAGES
        </div>
        <div class="settings-action" @click="loadExampleConfiguration('compact')">
          Load compact
        </div>
        <div class="settings-action" @click="loadExampleConfiguration('unity')">
          Load unity
        </div>
      </div>
    </div>
  </div>
</template>