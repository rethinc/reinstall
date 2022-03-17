<template>
  <div class="sharable-url-wrapper">
    <InputField>
      <input readonly class="input" type="text" :value="url" />
    </InputField>
    <AppButton :appearance="AppButtonAppearance.Primary" @click="copy()">
      <IconView :type="copyIconType" />
    </AppButton>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'
import AppButton, {
  AppButtonAppearance,
} from '@/application/shared/buttons/AppButton.vue'
import IconView from '@/application/shared/icons/IconView.vue'
import { IconColorizable } from '@/application/shared/icons/icons'
import InputField from '@/application/shared/forms/InputField.vue'

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
@import '../../assets/styles/fonts';
@import '../../assets/styles/sizes-and-spacings';
.sharable-url-wrapper {
  display: flex;
  font-size: $fontSize;

  > :first-child {
    flex: 1 1 auto;
    margin-right: $spacing-smaller;
  }
}
</style>
