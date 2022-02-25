<template>
  <div class="card-wrapper">
    <template v-if="!isAdding">
      <button @click="addApp()"> + </button>
    </template>
    <template v-if="isAdding">
      <HowToUse />
      <form @submit.prevent="submit()" @reset.prevent="reset()">
        <label for="packageName">Package Name</label>
        <input id="packageName" v-model="packageName" type="text" />
        <button type="reset">Cancel</button>
        <button>Add</button>
      </form>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import HowToUse from '@/components/HowToUse.vue'

export default defineComponent({
  components: {HowToUse },
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

<style scoped lang="scss">
@import '../assets/styles/colors';
@import '../assets/styles/fonts';
@import '../assets/styles/sizes-and-spacings';

.card-wrapper {
  background: $white;
  padding: $spacing-large;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
</style>
