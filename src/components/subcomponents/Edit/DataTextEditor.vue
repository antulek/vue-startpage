<script>
import {useDataStore} from "../../../stores/dataStore.js";

export default {
  data(){
    return {
      jsonData: JSON.stringify( this.dataStore.data, null, 2 ),
    }
  },
  setup(){
    const dataStore = useDataStore();
    return {
      dataStore
    }
  },
  methods: {
    updateData(){
      try{
        let parsedData = JSON.parse(this.jsonData);
      }catch (error){
        console.error(error);
        return null;
      }
      this.dataStore.data = {...JSON.parse(this.jsonData)};
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
      <div @click="updateData">SAVE</div>
    </div>
  </div>
</template>