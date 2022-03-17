<template>
  <div class="card-wrapper">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CardWrapper',
})
</script>

<style scoped lang="scss">
@import '../../assets/styles/colors';
@import '../../assets/styles/sizes-and-spacings';

.card-wrapper {
  background: $white;
  padding: $spacing-normal;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
</style>
