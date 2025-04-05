import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useOverlayStore = defineStore('overlay', () => {
    const activeOverlay = ref(null) // 'drag', 'json', etc.
    const overlayProps = ref({})

    function show(name, props = {}) {
        activeOverlay.value = name
        overlayProps.value = props
    }

    function hide() {
        activeOverlay.value = null
        overlayProps.value = {}
    }

    return { activeOverlay, overlayProps, show, hide }
})
