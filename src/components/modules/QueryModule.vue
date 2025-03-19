<script>
import Module from './Module.vue';

export default {
  extends: Module,
  components: {
    Module
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
    <div class="query-module">
      <div class="query-module-input">
        <input type="text">
        <button>Search</button>
        <button>Lucky</button>
      </div>
    </div>
  </Module>
</template>