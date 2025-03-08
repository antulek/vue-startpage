<script>
import Module from './Module.vue';

export default {
  extends: Module,
  components: {
    Module
  }
}
</script>
<template>
  <Module>
    <div class="categories-module">
      Categories
    </div>
  </Module>
</template>
<style scoped>
  .categories-module {
    background-color: pink;
    height: 100%;
  }
</style>