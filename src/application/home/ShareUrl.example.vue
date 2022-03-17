<template>
  <h1>ShareUrl component</h1>

  <ShareUrl url="https://www.rethinc.ch" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ShareUrl from './ShareUrl.vue'

export default defineComponent({
  name: 'ShareUrlExample',
  components: { ShareUrl },
})
</script>
