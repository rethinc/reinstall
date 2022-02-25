<template>
  <input readonly type="text" :value="url" />
  <button @click="copy()">{{ copyText }}</button>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'

export default defineComponent({
  name: 'ShareUrl',
  props: {
    url: {
      type: String as PropType<string>,
      required: true,
    },
  },
  setup(props) {
    const copyText = ref<string>('Copy')
    const copy = () => {
      navigator.clipboard.writeText(props.url)
      copyText.value = 'Copied'
    }
    return {
      copy,
      copyText,
    }
  },
})
</script>
