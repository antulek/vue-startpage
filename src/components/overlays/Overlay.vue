<script setup>
import {useOverlayStore} from "../../stores/overlayStore.js";
const overlayStore = useOverlayStore();
</script>
<script>
export default {
  date() {
    return {

    }
  },
  methods: {

  },
  props: {

  }
}
</script>
<template>
  <div class="overlay">
    <slot></slot>
    HELLO
    <div style="background-color: red" @click="overlayStore.hide()">
      DIASBLE
    </div>
  </div>
</template>