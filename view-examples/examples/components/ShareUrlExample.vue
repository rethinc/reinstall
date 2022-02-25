<template>
  <h1>ShareUrl component</h1>

  <share-url url="https://www.rethinc.ch" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ShareUrl from '@/components/ShareUrl.vue'

export default defineComponent({
  name: 'ShareUrlExample',
  components: { ShareUrl },
})
</script>
