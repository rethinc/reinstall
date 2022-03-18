<template>
  <RouterView />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
})
</script>

<style lang="scss">
@import '../../src/assets/styles/browser-reset';
@import '../../src/assets/styles/colors';

body {
  background: $accent;
}

*:focus {
  outline: 4px solid $accent;
}
</style>
