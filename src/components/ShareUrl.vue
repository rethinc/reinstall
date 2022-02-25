<template>
  <div class="container">
    <input readonly type="text" :value="url" />
    <AppButton @click="copy()">{{ copyText }}</AppButton>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'
import AppButton from '@/shared/buttons/AppButton.vue'

export default defineComponent({
  name: 'ShareUrl',
  components: { AppButton },
  props: {
    url: {
      type: String as PropType<string>,
      required: true,
    },
  },
  emits: ['copy'],
  setup(props, { emit }) {
    const copyText = ref<string>('Copy')
    const copy = () => {
      navigator.clipboard.writeText(props.url)
      copyText.value = 'Copied'
      emit('copy')
    }
    return {
      copy,
      copyText,
    }
  },
})
</script>

<style scoped lang="scss">
@import '../assets/styles/fonts';
.container {
  display: flex;
  input[type='text'] {
    max-width: 750px;
    font-size: $smallfont;
  }
}
</style>
