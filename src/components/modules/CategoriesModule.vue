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