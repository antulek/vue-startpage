<script>

</script>
<template>
  <div class="query-module">
    <div class="query-module-input">
      <input type="text">
      <button>Search</button>
      <button>Lucky</button>
    </div>
    <slot>

    </slot>
  </div>
</template>
<style scoped>
  .query-module{
    min-width: 100%;
    min-height: 100%;
    background-color: #0dcaf0;
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