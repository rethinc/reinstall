<template>
  <template v-if="!isAdding">
    <AppButton :appearance="AppButtonAppearance.Transparent" @click="addApp()">
      <icon-view :type="IconColorizable.Plus" />
    </AppButton>
  </template>
  <template v-if="isAdding">
    <HowToUse />
    <form @submit.prevent="submit()" @reset.prevent="reset()">
      <InputField>
        <label for="packageName" class="label">Package Name</label>
        <input
          id="packageName"
          v-model="packageName"
          class="input"
          type="text"
        />
      </InputField>
      <div class="footer-buttons">
        <AppButton type="reset" :appearance="AppButtonAppearance.Secondary"
          >Cancel</AppButton
        >
        <AppButton>Add</AppButton>
      </div>
    </form>
  </template>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { extractPackageNamesFromRoute } from './extractPackageNamesFromRoute'
import { addPackage } from './packageOperations'
import HowToUse from './HowToUse.vue'

import AppButton, {
  AppButtonAppearance,
} from '@/application/shared/buttons/AppButton.vue'
import InputField from '@/application/shared/forms/InputField.vue'
import IconView from '@/shared/icons/IconView.vue'
import { IconColorizable } from '@/shared/icons/IconProvider'

export default defineComponent({
  components: { IconView, InputField, AppButton, HowToUse },
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
      IconColorizable,
    }
  },
})
</script>

<style scoped lang="scss">
@import '../../assets/styles/colors';
@import '../../assets/styles/fonts';
@import '../../assets/styles/sizes-and-spacings';

.footer-buttons {
  margin-top: $spacing-small;
  display: flex;

  > * {
    flex: 1 1 50%;
    margin-right: 10px;
  }

  :last-child {
    margin-right: 0;
  }
}
</style>
