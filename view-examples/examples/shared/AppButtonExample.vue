<template>
  <h1>AppButton</h1>
  <AppButton>Click me</AppButton>
</template>

<script>
import { defineComponent } from 'vue'
import AppButton from '@/shared/buttons/AppButton.vue'

export default defineComponent({
  name: 'AppButtonExample',
  components: { AppButton },
})
</script>
