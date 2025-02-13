<script lang="ts">
export default {
  data() {
    return {
      containerNumber: 12,
      containerLimit: 66
    }
  },
  methods: {
    addContainer(add: number = 1){
      this.containerNumber += add;
    }
  }
}
</script>

<template>
  <div class="row">
    <button @click="addContainer(3)">Add</button>
    <button @click="this.containerNumber = 10">Reset</button>
    <button @click="addContainer(-3)">Remove</button>
    <div>
      {{containerNumber}}
    </div>
  </div>
  <div class="container">
    <div class="special">
      big
    </div>
    <div v-for="index in this.containerNumber" :key="index">{{index}}</div>
  </div>
</template>

<style scoped>
div{
  background-color: dodgerblue;
}

.row{
  display: inline-flex;
}

.container > div{
  background-color: lightgrey;
  border: 1px solid black;
  text-align: center;
  padding: 30px;
}

.special {
  grid-area: 1/2/4/4;
}


.container{
  display: grid;
  grid-template-columns: auto auto auto auto;

  align-content: center;

  gap: 10px 100px;
}
</style>