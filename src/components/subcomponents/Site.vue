<script>
export default {
  props: {
    site: {
      type: Object,
      default: null,
      required: true
    }
  }
}
</script>
<template>
  <div class="site" :style="'color:'+site.color">
    {{ site.icon }}
    {{ site.name }}
  </div>
</template>
<style scoped>
  .site {
    //flex-direction: column;
    border: 1px dashed cadetblue;
  }
</style>