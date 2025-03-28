<script setup>
import { useDataStore } from '../../../stores/dataStore.js';

const dataStore = useDataStore();
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
      Themes
    </div>
    <div class="settings-item-body" :style="dropStyle">
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
    </div>
  </div>
</template>