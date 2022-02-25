<template>
  <input v-model="shareUrl" type="text" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'ShareUrl',
  setup() {
    const shareUrl = ref<string>('')

    return {
      shareUrl,
    }
  },
})
</script>
