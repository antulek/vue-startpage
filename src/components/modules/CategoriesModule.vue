<script>
import Module from './Module.vue';
import Category from '../subcomponents/Category.vue';

export default {
  extends: Module,
  components: {
    Module,
    Category
  },
  props: {
    categories: {
      type: Object,
      required: true
    },
  }
}
</script>
<template>
  <Module>
    <div class="categories-module">
      <Category v-for="category in categories" :category="category">
      </Category>
    </div>
  </Module>
</template>
<style scoped>
  .categories-module {
    display: flex;
    flex-direction: row;
    background-color: pink;
    height: 100%;


    border: 2px solid magenta;
  }
</style>