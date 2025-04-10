<script>
import {useDataStore} from "../../../stores/dataStore.js";
import {useOverlayStore} from "../../../stores/overlayStore.js";

export default {
  data(){
    return {
      jsonData: JSON.stringify( this.dataStore.data, null, 2 ),
    }
  },
  setup(){
    const dataStore = useDataStore();
    const overlayStore = useOverlayStore();

    return {
      dataStore,
      overlayStore
    }
  },
  methods: {
    updateData(){
      this.dataStore.loadFromJSON( this.jsonData )
    },
    close () {
      this.$emit('close')
    }
  }
}
</script>
<template>
  <div class="data-text-editor">
    <div class="data-text-editor-header">
      Edit Data here!
    </div>
    <div class="data-text-editor-body">
      <textarea class="data-text-editor-text-area" v-model="jsonData">

      </textarea>
    </div>
    <div class="data-text-editor-footer">
      <div class="data-text-editor-button" @click="updateData">
        save
      </div>
      <div class="data-text-editor-button" @click="close()">
        cancel
      </div>
    </div>
  </div>
</template>