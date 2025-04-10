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
    <div class="overlay-footer">
      <div class="overlay-footer-cancel" @click="overlayStore.hide()">
        Cancel
      </div>
    </div>
    <div class="overlay-slot">
      <slot></slot>
    </div>
  </div>
</template>