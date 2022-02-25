<template>
  <template v-if="!isAdding">
    <button @click="addApp()">+</button>
  </template>
  <template v-if="isAdding">
    <HowToUse />
    <form @submit.prevent="submit()" @reset.prevent="reset()">
      <input-field>
        <label for="packageName" class="label">Package Name</label>
        <input
          id="packageName"
          v-model="packageName"
          class="input"
          type="text"
        />
      </input-field>
      <AppButton type="reset" :appearance="AppButtonAppearance.Transparent"
        >Cancel</AppButton
      >
      <AppButton>Add</AppButton>
    </form>
  </template>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import HowToUse from '@/components/HowToUse.vue'
import { extractPackageNamesFromRoute } from '@/app/extractPackageNamesFromRoute'
import { addPackage } from '@/app/packageOperations'
import AppButton, { AppButtonAppearance } from '@/shared/buttons/AppButton.vue'
import InputField from '@/components/InputField.vue'

export default defineComponent({
  components: { InputField, AppButton, HowToUse },
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

    const route = useRoute()

    const submit = () => {
      isAdding.value = false
      const currentPackageNames = extractPackageNamesFromRoute(route)
      router.push({
        path: '/',
        query: {
          packagename: addPackage(currentPackageNames, packageName.value),
        },
      })
    }

    return {
      AppButtonAppearance,
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
</style>
