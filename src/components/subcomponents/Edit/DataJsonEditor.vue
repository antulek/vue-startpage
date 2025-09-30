<script>
import {useDataStore} from "../../../stores/dataStore.js";
import {useOverlayStore} from "../../../stores/overlayStore.js";
import {useSchemaStore} from "../../../stores/schemaStore.js";
import * as yup from 'yup';

export default {
  data(){
    return {
      jsonData: JSON.stringify( this.dataStore.exampleApplicationData, null, 2 ),
    }
  },
  setup(){
    const dataStore = useDataStore();
    const overlayStore = useOverlayStore();
    const schemaStore = useSchemaStore();

    return {
      dataStore,
      overlayStore,
      schemaStore,
    }
  },
  methods: {
    updateData(){
      this.dataStore.loadFromJSON( this.jsonData )
    },
    close () {
      this.$emit('close')
    },
    validateApp() {
      console.log( this.schemaStore.validateLayout( JSON.parse(this.jsonData)) );
    },
    validateModule() {
      console.log( this.schemaStore.validateModuleData('logo', JSON.parse(this.jsonData).layout[0].data) );
    },
  }
}
</script>
<template>
  <div class="data-json-editor">
    <div class="data-json-editor-header">
      Edit Data here!
    </div>
    <div class="data-json-editor-body">
      <textarea class="data-json-editor-text-area" v-model="jsonData">

      </textarea>
    </div>
    <div class="data-json-editor-footer">
      <div class="data-json-editor-button" @click="validateApp">
        validate app data
      </div>
      <div class="data-json-editor-button" @click="validateModule">
        validate module data
      </div>
    </div>
    <div class="data-json-editor-footer">
      <div class="data-json-editor-button" @click="updateData">
        save
      </div>
      <div class="data-json-editor-button" @click="close()">
        cancel
      </div>
    </div>
  </div>
</template>