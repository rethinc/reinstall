<template>
  <button :class="appearance"><slot /></button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export enum AppButtonAppearance {
  Primary = 'primary',
  Transparent = 'transparent',
  Secondary = 'secondary',
}

export default defineComponent({
  name: 'AppButton',
  props: {
    appearance: {
      type: String as PropType<AppButtonAppearance>,
      default: AppButtonAppearance.Primary,
    },
  },
})
</script>

<style scoped lang="scss">
@import '../../assets/styles/colors';
@import '../../assets/styles/sizes-and-spacings';
@import '../../assets/styles/fonts';

button {
  border: none;
  padding: $spacing-small;
  font-size: $smallfont;
  font-weight: $fontWeightBold;
  cursor: pointer;

  &.primary {
    background: $primary;
    color: $white;
    border: 2px solid $primary;
  }

  &.secondary {
    border: 2px solid $primary;
    background: $white;
    color: $primary;
  }

  &.transparent {
    background: transparent;
    color: $primary;
  }
}
</style>
