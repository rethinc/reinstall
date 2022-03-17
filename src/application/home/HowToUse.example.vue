<template>
  <h1>HowToUse component</h1>
  <div>
    <HowToUse />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HowToUse from './HowToUse.vue'

export default defineComponent({
  name: 'HowToUseExample',
  components: { HowToUse },
})
</script>
