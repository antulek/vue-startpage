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
      //default: "https://previews.123rf.com/images/valueinvestor/valueinvestor1904/valueinvestor190400048/123603982-seamless-little-cat-pattern.jpg",
      default: "https://64.media.tumblr.com/3b5440683e71e2d39f998c6ed99c3feb/tumblr_ord7ll2peg1sx56xso1_1280.gif",
      required: false
    },
    scale: {
      type: Number,
      default: 100,
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
      return this.scale+"%";
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
    <div class="logo-module">

    </div>
  </Module>
</template>
<style scoped>
  .logo-module {
    background-color: forestgreen;
    height: 100%;
    background-image: v-bind(backgroundImageCss);
    background-size: v-bind(scaleCSS);
    background-repeat: v-bind(repeatCSS);
    background-position: 50% 50%;
    image-rendering: v-bind(isPixelArtCSS);
  }
</style>