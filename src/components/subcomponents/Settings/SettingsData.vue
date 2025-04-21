<script setup>
import { useDataStore } from '../../../stores/dataStore.js';
import {useOverlayStore} from "../../../stores/overlayStore.js";
import DataFileUpload from "../Edit/DataFileUpload.vue";

const dataStore = useDataStore();
const overlayStore = useOverlayStore();
</script>
<script>

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
  methods: {
    data(action, storage){
      alert(action+" from "+storage)
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
        <div class="settings-action" @click="dataStore.downloadJson(dataStore.data, 'startpage')">
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
        <div class="settings-action" @click="dataStore.downloadJson(dataStore.data, 'startpage')">
          Download
        </div>
        <div class="settings-action" @click="overlayStore.show('dataJsonEditor')">
          Edit
        </div>
        <div class="settings-action" @click="overlayStore.show('dataSitesTextEditor')">
          Edit TEXT
        </div>
      </div>
      <div class="settings-item-category" >
        <div class="settings-category-header">
          Changes
        </div>
        <div class="settings-action" @click="dataStore.saveToLocalStorage()">
          Save
        </div>
        <div class="settings-action" @click="dataStore.loadFromLocalStorage()">
          Discard
        </div>
      </div>
      <div class="settings-item-category" >
        <div class="settings-category-header">
          Debug file
        </div>
        <div class="settings-action" @click="dataStore.dataTransfer('import', 'fixed-default')">
          Import Default
        </div>
        <div class="settings-action" @click="dataStore.dataTransfer('import', 'fixed-empty')">
          Import Empty
        </div>
      </div>
    </div>
  </div>
</template>