<script>

import {defineComponent} from "vue";
import WebsiteLayout from "./WebsiteLayout.vue";
import emitter from "../eventBus.js";

export default defineComponent({
  components: {WebsiteLayout},
  data(){
    return {
      columns: 1,
      modules: 4,
    }
  },
  methods: {

  }
})
</script>
<template>
  <div>
    <WebsiteLayout :columns="columns" :modules="modules">

    </WebsiteLayout>
  </div>
</template>
<style scoped>

</style>