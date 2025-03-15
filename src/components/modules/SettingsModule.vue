<script>
  export default {
    props: {
      isDropUp: {
        type: Boolean,
        default: true,
        required: false,
      }
    },
    components: {

    },
    data() {
      return {

      }
    }
  }
</script>
<template>
  <div class="settings">
    <div class="settings-header">
      <div v-for="setting in ['theme', 'edit', 'export/import']" class="settings-item">
        <div class="settings-item-header">
          {{setting}}
        </div>
        <div class="settings-item-actions" :class="{dropup: isDropUp, dropdown: !isDropUp}">
          <div v-for="action in [1,2,3,4,5,6]" class="settings-action">
            action NO#{{action}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .dropdown { top: 100% }
  .dropup { bottom: 100% }

  .settings {
    display: flex;
    flex-direction: row;
    width: 100%;

  }

  .settings-header {
    display: flex;
    flex-direction: row;

    width: 100%;
  }

  .settings-item {
    display: flex;
    flex-direction: column;
    width: 100%;
    position: relative;

    border: 1px solid red;
  }

  .settings-item-actions {
    display: none;
    position: absolute;
    //bottom: 100%;
    width: 100%;

    background-color: greenyellow;
  }

  .settings-item-header:hover + .settings-item-actions {
    display: block;
  }

  .settings-item-actions:hover {
    display: block;
  }



</style>