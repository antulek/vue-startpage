<script>
import emitter from "../eventBus.js";
export default {
  props: {
    containerName: {
      type: String,
      default: "space",
      required: false
    },
  },
  data(){
    return {

    }
  },
  mounted() {
    //
  }
}
</script>
<template >
  <div class="module module-grid">
    <slot>
      {{containerName}}
    </slot>
  </div>
</template>
<style scoped>
  .module {
    width: 100%;
    height: 100%;
    border: 1px dashed lightgrey;
  }

  .module-grid{
    display: flex;
    grid-area: v-bind(containerName);
  }

</style>