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
    data(action, storage){
      alert(action+" from "+storage)
    },
    resetConfigToDefault(){
      this.dataStore.dataTransfer('import', 'fixed-empty')
      this.dataStore.saveToLocalStorage();
    },
    loadExample(){
      this.dataStore.dataTransfer('import', 'fixed-default')
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
      <div class="settings-item-category" @click="resetConfigToDefault()">
        <div class="settings-action">
          Reset to default
        </div>
      </div>
      <div class="settings-item-category" @click="loadExample()">
        <div class="settings-action">
          Load example
        </div>
      </div>
    </div>
  </div>
</template>