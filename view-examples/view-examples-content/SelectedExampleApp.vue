<template>
  <SelectedExampleView
    v-if="selectedExample"
    :selected-example="selectedExample"
  />
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from 'vue'
import SelectedExampleView from './SelectedExampleView.vue'
import { SelectedExample } from './SelectedExample'
import {
  createExampleViewMountedMessage,
  createExampleViewUnmountedMessage,
  ViewExamplesMessage,
} from './ViewExamplesMessage'

export default defineComponent({
  name: 'App',
  components: { SelectedExampleView },
  setup() {
    const selectedExample = ref<SelectedExample>()

    const messageEventListener = (event: MessageEvent<ViewExamplesMessage>) => {
      if (event.data.type === 'SelectedExampleMessage') {
        selectedExample.value = event.data.selectedExample
      }
    }

    onMounted(() => {
      window.addEventListener('message', messageEventListener)
      window.parent.postMessage(createExampleViewMountedMessage())
    })

    onUnmounted(() => {
      window.removeEventListener('message', messageEventListener)
      window.parent.postMessage(createExampleViewUnmountedMessage())
    })

    return {
      selectedExample,
    }
  },
})
</script>

<style lang="scss">
</style>
