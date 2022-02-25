<template>
  <h1>HowToUse component</h1>
  <div>
    <how-to-use />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HowToUse from '@/components/HowToUse.vue'

export default defineComponent({
  name: 'HowToUseExample',
  components: { HowToUse },
})
</script>
