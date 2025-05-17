<script>
import Module from './Module.vue';

export default {
  extends: Module,
  components: {
    Module
  },
  props: {
    src: {
      type: String,
      default: "",
      required: false
    },
    scale: {
      type: Number,
      default: 0,
      required: false
    },
    repeat: {
      type: Boolean,
      default: false,
      required: false
    },
    isPixelArt: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  computed:{
    backgroundImageCss(){
      return 'url('+this.src+')';
    },
    scaleCSS(){
      return this.scale ? this.scale+"%" : "auto 100%";
    },
    repeatCSS(){
      return this.repeat ? "repeat" : "no-repeat";
    },
    isPixelArtCSS(){
      return this.isPixelArt ? "pixelated" : "smooth";
    }
  },
  data() {
    return{

    }
  },
  methods: {

  }
}
</script>
<template>
  <Module>
    <div class="logo-module-alternative">
      <div class="logo-module">

      </div>
    </div>
  </Module>
</template>
<style scoped>
.logo-module {
  background-image: v-bind(backgroundImageCss);
  background-size: v-bind(scaleCSS);
  background-repeat: v-bind(repeatCSS);
  image-rendering: v-bind(isPixelArtCSS);
}
</style>