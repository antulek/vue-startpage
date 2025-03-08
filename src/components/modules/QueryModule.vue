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
<style scoped>
  .query-module{
    width: 100%;
    height: 100%;
    background-color: magenta;
  }

  .query-module-input{
    padding: 10px;
    top: 50%;
    transform: translateY(-50%);
    position: relative;
  }

  .query-module-input input{
    width: 80%;
  }

  .query-module-input button{
    width: 10%;
  }

  input, button{
    background-color: white;
    border: 1px inset black;
    padding: 0px;
  }
</style>