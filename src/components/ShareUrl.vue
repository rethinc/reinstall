<template>
  <div class="container">
    <input readonly type="text" :value="url" />
    <AppButton @click="copy()">
      <icon-view :type="copyIconType" />
    </AppButton>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'
import AppButton from '@/shared/buttons/AppButton.vue'
import IconView from '@/shared/icons/IconView.vue'
import { IconColorizable } from '@/shared/icons/IconProvider'

export default defineComponent({
  name: 'ShareUrl',
  components: { IconView, AppButton },
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
    }
  },
})
</script>

<style scoped lang="scss">
@import '../assets/styles/fonts';
.container {
  display: flex;
  input[type='text'] {
    width: 50vw;
    font-size: $smallfont;
  }
}
</style>
