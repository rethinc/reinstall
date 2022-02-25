<template>
  <template v-if="!isAdding">
    <button @click="addApp()">+</button>
  </template>
  <template v-if="isAdding">
    <form @submit.prevent="submit()">
      <input v-model="packageName" type="text" />
      <button>Add</button>
    </form>
  </template>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const isAdding = ref<boolean>(false)

    const packageName = ref<string>('')

    const addApp = () => {
      isAdding.value = true
    }

    const submit = () => {
      console.log('packagename', packageName.value)
    }

    return {
      addApp,
      submit,
      isAdding,
      packageName,
    }
  },
})
</script>
