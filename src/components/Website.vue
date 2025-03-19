<script>

import {defineComponent} from "vue";
import WebsiteLayout from "./WebsiteLayout.vue";
import emitter from "../eventBus.js";

export default defineComponent({
  components: {WebsiteLayout},
  props: {
    dataStore: {
      type: Object,
      default: null,
      required: true
    }
  },
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
    <WebsiteLayout :data-store="dataStore" :columns="columns" :modules="modules">

    </WebsiteLayout>
  </div>
</template>