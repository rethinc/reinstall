<template>
  <h1>ShareUrl component</h1>

  <h2>Basic state</h2>
  <div>
    <share-url url="https://www.rethinc.ch" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ShareUrl from '@/components/ShareUrl.vue'

export default defineComponent({
  name: 'ShareUrlExample',
  components: { ShareUrl },
})
</script>

<style scoped lang="scss">
.icon {
  width: 50px;
  height: 50px;
}

button {
  margin-bottom: 20px;
}
</style>
