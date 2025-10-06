<script>
import Module from '../Module.vue';
import LogoModule from "../LogoModule.vue";
import comics from "../../../assets/modulesdata/xkcdComic.json";
export default {
  extends: Module,
  components: {
    LogoModule,
    Module
  },
  data(){
    return {
      comicDomain: "http://imgs.xkcd.com/comics/",
      comicImageAddress: null,
      comics: [],
    }
  },
  methods: {
    findComicIndex(ratio){
      let currentIndex;
      let currentValue;
      let minIndex = 0;
      let maxIndex = comics.length-1;
      let previousValue;
      let previousDelta=100000;

      let tries = 15;
      while (tries>0) {
        currentIndex = Math.floor((minIndex+maxIndex)/2);
        currentValue = comics[currentIndex].r;

        if (previousDelta >= Math.abs(previousValue - currentValue)) {
          return currentIndex;
        } else {
          if (currentValue > ratio) {
            maxIndex = currentIndex;
          } else {
            minIndex = currentIndex;
          }
        }
        previousValue = currentValue;
        previousDelta = Math.abs(previousValue - currentValue);
        tries--;
      }
      return currentIndex;
    }
  },
  mounted() {
    window.addEventListener("load", () => {
      const rect = this.$refs.box.getBoundingClientRect();
      this.comicImageAddress = this.comicDomain+comics[this.findComicIndex(rect.width/rect.height)].adr;
    });
  }
}

</script>
<template>
  <Module>
    <div ref="box" class="xkcd-module" :style="{ backgroundImage: `url(${comicImageAddress})` }">

    </div>
  </Module>
</template>
<style scoped>
  .xkcd-module {
    background-color: white;        /* White padding area */
    border: 2px solid black;        /* Black border */
    padding: 3px;                   /* The inset you wanted */
    box-sizing: border-box;         /* Border & padding included in total size */

    background-size: contain;       /* Scale comic proportionally */
    background-position: center;
    background-repeat: no-repeat;
    background-origin: content-box; /* Start image inside the padding */

    width: 100%;
    height: 100%;
  }
</style>
/*
TODO
-add some randomization (add little nubmer to index)

*/