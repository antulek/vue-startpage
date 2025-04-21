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
    }
  }
}
</script>
<template>
  <div class="settings-item">
    <div class="settings-item-header" @click="show = !show">
      Data
    </div>
    <div v-if="show" class="settings-item-body" :style="dropStyle">
      <div class="settings-item-category" >
        <div class="settings-category-header">
          File
        </div>
        <div class="settings-action" @click="this.dataStore.downloadJson(this.dataStore.data, 'startpage')">
          Download
        </div>
        <div class="settings-action">
          <DataFileUpload></DataFileUpload>
        </div>
      </div>
      <div class="settings-item-category" >
        <div class="settings-category-header">
          JSON
        </div>
        <div class="settings-action" @click="this.dataStore.downloadJson(this.dataStore.data, 'startpage')">
          Download
        </div>
        <div class="settings-action" @click="this.overlayStore.show('dataJsonEditor')">
          Edit
        </div>
        <div class="settings-action" @click="this.overlayStore.show('dataSitesTextEditor')">
          Edit TEXT
        </div>
      </div>
      <div class="settings-item-category" >
        <div class="settings-category-header">
          Changes
        </div>
        <div class="settings-action" @click="this.dataStore.saveToLocalStorage()">
          Save
        </div>
        <div class="settings-action" @click="this.dataStore.loadFromLocalStorage()">
          Discard
        </div>
      </div>
      <div class="settings-item-category" >
        <div class="settings-category-header">
          Debug file
        </div>
        <div class="settings-action" @click="this.dataStore.dataTransfer('import', 'fixed-default')">
          Import Default
        </div>
        <div class="settings-action" @click="resetConfigToDefault()">
          Import Empty
        </div>
      </div>
    </div>
  </div>
</template>