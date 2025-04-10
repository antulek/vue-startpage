<script>

import {defineComponent, reactive} from "vue";
import WebsiteLayout from "./WebsiteLayout.vue";
import Overlay from "./overlays/Overlay.vue";
import DimmingOverlay from "./overlays/DimmingOverlay.vue";
import DataTextEditor from "./subcomponents/Edit/DataTextEditor.vue"

import {useOverlayStore} from "../stores/overlayStore.js";

export default defineComponent({
  components: {
    WebsiteLayout,
    DimmingOverlay,
    DataTextEditor
  },
  props: {
    dataStore: {
      type: Object,
      default: null,
      required: true
    }
  },
  data(){
    return {

    }
  },
  setup() {
    // Use the store inside setup function
    const overlayStore = useOverlayStore();

    // Define componentMap inside setup
    const componentMap = reactive({
      overlay: Overlay,
      dimmingOverlay: DimmingOverlay,
      dataTextEditor: DataTextEditor,
      // Add more overlays as needed
    });

    // Return everything that needs to be accessible in the template
    return {
      overlayStore,
      componentMap
    };
  },
  methods: {

  }
})
</script>
<template>
  <WebsiteLayout :data-store="dataStore" :columns="columns" :modules="modules">

  </WebsiteLayout>
  <div v-if="overlayStore.activeOverlay" class="overlay-wrapper">
    <component
        :is="componentMap[overlayStore.activeOverlay]"
        v-bind="overlayStore.overlayProps"
        @close="overlayStore.hide"
    >
<!--      <DataTextEditor @close="overlayStore.hide()">

      </DataTextEditor>-->
    </component>
  </div>
</template>