<script>

import {defineComponent} from "vue";
import WebsiteLayout from "./WebsiteLayout.vue";

export default defineComponent({
  components: {WebsiteLayout},
  data(){
    return {
      columns: 1,
    }
  }
})
</script>
<template>
  <div>
    <input type="number" min="1" max="5" v-model="columns">
    <WebsiteLayout :columns="columns">
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div><div>1</div>
      <div>1</div>
      <div>1</div>
    </WebsiteLayout>
  </div>
</template>
<style scoped>

</style>