<template>
  <input readonly type="text" :value="url" />
  <button @click="copy()">Copy</button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'ShareUrl',
  props: {
    url: {
      type: String as PropType<string>,
      required: true,
    },
  },
  setup(props) {
    const copy = () => {
      navigator.clipboard.writeText(props.url)
    }
    return {
      copy,
    }
  },
})
</script>
