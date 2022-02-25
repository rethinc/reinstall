<template>
  <template v-if="!isAdding">
    <button @click="addApp()">+</button>
  </template>
  <template v-if="isAdding">
    <form @submit.prevent="submit()" @reset.prevent="reset()">
      <input v-model="packageName" type="text" />
      <button type="reset">Cancel</button>
      <button>Add</button>
    </form>
  </template>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    const isAdding = ref<boolean>(false)

    const packageName = ref<string>('')

    const router = useRouter()

    const addApp = () => {
      packageName.value = ''
      isAdding.value = true
    }

    const reset = () => {
      isAdding.value = false
    }

    const submit = () => {
      isAdding.value = false
      router.push({
        path: '/',
        query: { packagename: packageName.value },
      })
    }

    return {
      addApp,
      submit,
      reset,
      isAdding,
      packageName,
    }
  },
})
</script>
