<script lang="ts">
export default {
  props: {
    containerName: String,
  },
  data() {
    return {

    }
  },
  methods: {
    sayName(){
      alert("I'm "+this.containerName);
    }
  }
}
</script>
<template>
  <div class="part">
    <slot>

    </slot>
  </div>
</template>
<style scoped>

.part{
  background-color: red;
  grid-area: v-bind(containerName);

  min-width: 20vw;
  min-height: 30vh;

  border: 1px dashed black;
}

</style>