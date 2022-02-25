<template>
  <div class="input-field">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'InputField',
})
</script>

<style scoped lang="scss">
@import '../assets/styles/colors';
@import '../assets/styles/sizes-and-spacings';
@import '../assets/styles/fonts';

.input-field {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  margin: $spacing-small 0;
  :deep(.label) {
    font-size: $smallfont;
    font-weight: 700;
    margin-bottom: $spacing-smallest;
  }
  :deep(.input) {
    font-size: $fontSize;
    font-weight: 600;
    padding: $spacing-smaller;
    border: solid 2px $primary;
  }
}
</style>
