<script setup>
import { useDataStore } from '../../../stores/dataStore.js';
import {useOverlayStore} from "../../../stores/overlayStore.js";

const dataStore = useDataStore();
const overlayStore = useOverlayStore();
</script>
<script>

export default {
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
      storageOptions: ['local storage', 'file', 'json'],
      actionsOptions: ['import', 'export']
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
    <div class="settings-item-header">
      Data
    </div>
    <div class="settings-item-body" :style="dropStyle">
      <div class="settings-item-category" >
        <div class="settings-category-header">
          File
        </div>
        <div class="settings-action">
          Export
        </div>
        <div class="settings-action">
          Import
        </div>
      </div>
      <div class="settings-item-category" >
        <div class="settings-category-header">
          JSON
        </div>
        <div class="settings-action" @click="overlayStore.show('dimmingOverlay')">
          Copy to clipboard
        </div>
        <div class="settings-action" @click="overlayStore.show('overlay')">
          Edit
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
<!--    <div class="settings-item-body" :style="dropStyle">
      <div class="settings-item-category"
           v-for="action in actionsOptions">
        <div class="settings-category-header">
          {{action}}
        </div>
        <div class="settings-action" v-for="storage in storageOptions"
          @click="dataStore.dataTransfer(action, storage)">
          {{storage}}
        </div>
      </div>
      <div class="settings-item-category">
        <div class="settings-action" @click="dataStore.dataTransfer('import', 'fixed')">
          Import fixed template
        </div>
      </div>
    </div>-->
  </div>
</template>