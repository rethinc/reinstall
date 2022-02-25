<template>
  <h1>AppButton</h1>
  <p>Relative to font icon size</p>
  <AppButton>Click me</AppButton>
  <AppButton>
    <IconView
      :type="IconColorizable.Download"
      style="width: 24px; height: 24px"
    />
  </AppButton>
  <p>Fixed button width</p>
  <AppButton style="width: 300px">Click me</AppButton>
  <AppButton style="width: 300px">
    <IconView
      :type="IconColorizable.Download"
      style="width: 24px; height: 24px"
    />
  </AppButton>
  <p>Button appearance transparent</p>
  <AppButton :appearance="AppButtonAppearance.Transparent">Click me</AppButton>
  <AppButton :appearance="AppButtonAppearance.Transparent">
    <IconView
      :type="IconColorizable.Download"
      style="width: 24px; height: 24px"
    />
  </AppButton>
</template>

<script>
import { defineComponent } from 'vue'
import AppButton, { AppButtonAppearance } from '@/shared/buttons/AppButton.vue'
import IconView from '@/shared/icons/IconView.vue'
import { IconColorizable } from '@/shared/icons/IconProvider.ts'

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
