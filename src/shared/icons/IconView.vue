<template>
  <!-- eslint-disable-next-line vue/no-v-html -->
  <div v-if="icon" class="icon" v-html="icon" />
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { iconByType, IconType } from './IconProvider'

export default defineComponent({
  name: 'IconView',
  props: {
    type: {
      type: String as PropType<IconType>,
      required: true,
    },
  },
  setup(props) {
    const icon = computed<string>(() => {
      return iconByType(props.type)
    })

    return {
      icon,
    }
  },
})
</script>

<style lang="scss" scoped>
.icon {
  display: inline-flex;

  :deep(svg) {
    width: auto;
    height: auto;
  }
}
</style>
