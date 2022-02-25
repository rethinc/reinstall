<template>
  <template v-if="state === ViewState.INITIAL">
    <button>+</button>
  </template>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

enum ViewState {
  ADDING,
  INITIAL,
}

export default defineComponent({
  setup() {
    const state = ref<ViewState>(ViewState.INITIAL)

    return {
      state,
    }
  },
})
</script>
