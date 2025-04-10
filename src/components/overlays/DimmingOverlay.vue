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
  <Overlay class="dimming-overlay">
    <slot></slot>
  </Overlay>
</template>