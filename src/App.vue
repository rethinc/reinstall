<template>
  <home />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Home from '@/app/Home.vue'

export default defineComponent({
  name: 'App',
  components: { Home },
  setup() {
    return {}
  },
})
</script>
