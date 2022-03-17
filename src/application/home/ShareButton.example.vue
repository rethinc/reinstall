<template>
  <h1>ShareButton component</h1>
  <ShareButton />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ShareButton from './ShareButton.vue'

export default defineComponent({
  name: 'ShareButtonExample',
  components: { ShareButton },
})
</script>
