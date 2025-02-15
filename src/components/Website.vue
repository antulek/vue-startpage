<script>

import {defineComponent} from "vue";
import WebsiteLayout from "./WebsiteLayout.vue";

export default defineComponent({
  components: {WebsiteLayout},
  data(){
    return {
      columns: 1,
      modules: 4,
    }
  }
})
</script>
<template>
  <div>
    <input type="number" min="1" max="5" v-model="columns">
    <input type="number" min="1" max="25" v-model="modules">
    <WebsiteLayout :columns="columns" :modules="modules">

    </WebsiteLayout>
  </div>
</template>
<style scoped>

</style>