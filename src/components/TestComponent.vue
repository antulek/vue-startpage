<script lang="ts">
export default {
  data() {
    return {
      greeting: 'Hello World!'
    }
  }
}
</script>

<template>
  <h3 class="greeting">{{ greeting }}</h3>

  <div class="card">
    <div class="card-header">
      Header
    </div>
    <div class="card-body">
      Body
    </div>
  </div>
</template>

<style scoped>
  h3 {
    color: black;
    font-weight: bold;
    background-color: yellow;
  }
</style>