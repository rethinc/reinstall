<template>
  <h1>ShareButton component</h1>
  <share-button />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ShareButton from '@/components/ShareButton.vue'

export default defineComponent({
  name: 'ShareButtonExample',
  components: { ShareButton },
})
</script>
