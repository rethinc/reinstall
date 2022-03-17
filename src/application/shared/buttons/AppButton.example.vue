<template>
  <h1>AppButton</h1>
  <p>Relative to font icon size</p>
  <AppButton>Click me</AppButton>
  <AppButton>
    <IconView :type="IconColorizable.Edit" style="width: 24px; height: 24px" />
  </AppButton>
  <p>Fixed button width</p>
  <AppButton style="width: 300px">Click me</AppButton>
  <AppButton style="width: 300px">
    <IconView :type="IconColorizable.Edit" style="width: 24px; height: 24px" />
  </AppButton>
  <p>Button appearance transparent</p>
  <AppButton :appearance="AppButtonAppearance.Transparent">Click me</AppButton>
  <AppButton :appearance="AppButtonAppearance.Transparent">
    <IconView :type="IconColorizable.Edit" style="width: 24px; height: 24px" />
  </AppButton>
</template>

<script>
import { defineComponent } from 'vue'
import AppButton, { AppButtonAppearance } from './AppButton.vue'
import IconView from '@/application/shared/icons/IconView.vue'
import { IconColorizable } from '@/application/shared/icons/icons'

export default defineComponent({
  name: 'AppButtonExample',
  components: { IconView, AppButton },
  setup() {
    return {
      IconColorizable,
      AppButtonAppearance,
    }
  },
})
</script>
