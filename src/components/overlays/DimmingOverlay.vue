<script setup>
import {useOverlayStore} from "../../stores/overlayStore.js";
const overlayStore = useOverlayStore();
</script>
<script>
import Overlay from "./Overlay.vue";

export default {
  extends: Overlay,
  components: {
    Overlay
  },
  data(){
    return{

    }
  },
  methods: {

  }
}
</script>
<template>
  <div class="dimming-overlay">
    <div class="overlay-footer">
      <div style="background-color: red" @click="overlayStore.hide()">
        DIASBLE
      </div>
    </div>
    <div class="overlay-slot">
      <slot></slot>
    </div>
  </div>
</template>