<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  setup() {
    return {}
  },
})
</script>

<style lang="scss">
@import './assets/styles/browser-reset';
@import './assets/styles/colors';

body {
  background: $accent;
}

*:focus {
  outline: 4px solid $accent;
}
</style>
