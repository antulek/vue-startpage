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
    emitEvent(name, value){
      emitter.emit(name, value);
    }
  }
})
</script>
<template>
  <div>
    <div class="btn btn-success" @click="emitEvent('event', 'hello world!')">EMIT EVENT!</div>
    <input type="number" min="1" max="5" v-model="columns">
    <input type="number" min="1" max="25" v-model="modules">
    <WebsiteLayout :columns="columns" :modules="modules">

    </WebsiteLayout>
  </div>
</template>
<style scoped>

</style>