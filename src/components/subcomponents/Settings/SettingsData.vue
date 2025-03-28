<script>
export default {
  props: {
    isDropUp: {
      type: Boolean,
      default: true,
      required: false,
    },
  },
  computed: {
    dropStyle(){
      return (this.isDropUp ? {bottom: '100%'} : {top: '100%'})
    }
  },
  data(){
    return{
      storageOptions: ['local storage', 'file', 'clipboard'],
      actionsOptions: ['import', 'export']
    }
  },
  methods: {
    data(action, storage){
      alert(action+" from "+storage)
    }
  }
}
</script>
<template>
  <div class="settings-item">
    <div class="settings-item-header">
      Themes
    </div>
    <div class="settings-item-body" :style="dropStyle">
      <div class="settings-item-category"
           v-for="action in actionsOptions">
        <div class="settings-category-header">
          {{action}}
        </div>
        <div class="settings-action" v-for="storage in storageOptions"
          @click="data(action, storage)">
          {{storage}}
        </div>
      </div>
    </div>
  </div>
</template>