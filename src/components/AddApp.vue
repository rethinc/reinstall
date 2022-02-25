<template>
  <template v-if="!isAdding">
    <button @click="addApp()">+</button>
  </template>
  <template v-if="isAdding"> Adding </template>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const isAdding = ref<boolean>(false)

    const addApp = () => {
      isAdding.value = true
    }

    return {
      addApp,
      isAdding,
    }
  },
})
</script>
