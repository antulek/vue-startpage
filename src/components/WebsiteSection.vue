<script>

export default {
  props: {
    containerName: {
      type: String,
      default: "space",
      required: false
    },
  },
  data(){
    return {

    }
  },
  mounted() {
    //
  }
}
</script>
<template >
  <div class="section section-grid">
    <slot>
      {{containerName}}
    </slot>
  </div>
</template>
<style scoped>
  .section-grid {
    grid-area: v-bind(containerName);
  }
</style>