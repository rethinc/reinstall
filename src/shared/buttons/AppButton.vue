<template>
  <button><slot /></button>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AppButton',
})
</script>

<style scoped lang="scss">
@import '../../assets/styles/colors';
@import '../../assets/styles/sizes-and-spacings';
@import '../../assets/styles/fonts';

button {
  background: $primary;
  border: none;
  color: $white;
  padding: $spacing-small;
  font-size: $smallfont;
  font-weight: $fontWeightBold;
}
</style>
