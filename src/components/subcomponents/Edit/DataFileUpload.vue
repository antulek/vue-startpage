<script>
import {useDataStore} from "../../../stores/dataStore.js";

export default {
  setup(){
    const dataStore = useDataStore();
    return {
      dataStore
    }
  },
  data() {
    return {
      fileContents: null,
    }
  },
  methods: {
    async handleFileUpload(event) {
      const file = event.target.files[0];
      if (!file) return;

      try {
        this.fileContents = await this.readFileAsText(file);
        this.dataStore.loadFromJSON(this.fileContents);
      } catch (error) {
        console.error("File reading failed:", error);
      }
    },
    readFileAsText(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = () => resolve(reader.result);
        reader.onerror = () => reject(reader.error);

        reader.readAsText(file);
      });
    }
  }
}
</script>
<template>
  <div class="data-file-upload">
    <input class="data-file-upload-input" type="file" accept=".json" @change="handleFileUpload" v-bind="file"/>
  </div>
</template>