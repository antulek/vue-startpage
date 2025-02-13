<script lang="ts">
import Container from "./Container.vue";

export default {
  components: {Container},
  data() {
    return {

    }
  },
}
</script>
<template>
  <container class="logo">
    <div>
      LOGO
    </div>
  </container>
</template>
<style scoped>

.logo{
  background-color: blue;
  grid-area: logo;
  color: white;

  min-height: 10vh;
}

</style>