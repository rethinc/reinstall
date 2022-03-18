<template>
  <!-- eslint-disable-next-line vue/no-v-html -->
  <div v-if="icon" class="icon" v-html="icon" />
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { iconByType, IconType } from './icons'

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
  width: 100%;
  height: 100%;

  :deep(svg) {
    width: 100%;
    height: 100%;
  }
}

.style-text {
  display: inline-block;
  width: 1rem;
  height: 1rem;
  position: relative;
  top: 0.125rem;

  :deep(svg) {
    width: 1rem;
    height: 1rem;
  }
}
</style>
