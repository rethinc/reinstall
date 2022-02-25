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

button {
  background: $primary;
  border: none;
  color: $white;
}
</style>
