<template>
  <div class="sharable-url-wrapper">
    <input-field>
      <input readonly class="input" type="text" :value="url" />
    </input-field>
    <app-button :appearance="AppButtonAppearance.Primary" @click="copy()">
      <icon-view :type="copyIconType" />
    </app-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'
import AppButton, { AppButtonAppearance } from '@/shared/buttons/AppButton.vue'
import IconView from '@/shared/icons/IconView.vue'
import { IconColorizable } from '@/shared/icons/IconProvider'
import InputField from '@/components/InputField.vue'

export default defineComponent({
  name: 'ShareUrl',
  components: { InputField, IconView, AppButton },
  props: {
    url: {
      type: String as PropType<string>,
      required: true,
    },
  },
  emits: ['copy'],
  setup(props, { emit }) {
    const copyIconType = ref<IconColorizable>(IconColorizable.Copy)
    const copy = () => {
      navigator.clipboard.writeText(props.url)
      copyIconType.value = IconColorizable.Check
      emit('copy')
    }
    return {
      copy,
      copyIconType,
      AppButtonAppearance,
    }
  },
})
</script>

<style scoped lang="scss">
@import '../assets/styles/fonts';
@import '../assets/styles/sizes-and-spacings';
.sharable-url-wrapper {
  display: flex;
  font-size: $fontSize;

  > :first-child {
    flex: 1 1 auto;
    margin-right: $spacing-smaller;
  }
}
</style>
