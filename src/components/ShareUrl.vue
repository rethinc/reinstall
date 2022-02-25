<template>
  <input type="text" :value="url" />
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
    console.log(props)
  },
})
</script>
