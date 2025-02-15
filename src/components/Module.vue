<script>
import emitter from "../eventBus.js";
export default {
  props: {
    containerName: {
      type: String,
      default: "space",
      required: false
    },
    height: {
      type: String,
    }
  },
  data(){
    return {
      message: "",
    }
  },
  mounted() {
    emitter.on('event', value =>{
      this.message = value;
    });
  }
}
</script>
<template>
  <div class="module grid">
    {{containerName}}
    {{ message }}
    <slot>

    </slot>
  </div>
</template>
<style scoped>
  .module{
    border: 1px solid black;
    background-color: darkred;

  }

  .grid{
    grid-area: v-bind(containerName);
  }

  @media only screen and (min-width: 768px) {
    .module{

    }
  }
</style>