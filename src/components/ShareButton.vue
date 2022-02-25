<template>
  <button @click="share()">Share</button>
  <ShareUrl v-if="shareUrl" :url="shareUrl" />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import ShareUrl from '@/components/ShareUrl.vue'

export default defineComponent({
  name: 'ShareButton',
  components: { ShareUrl },
  setup() {
    const shareUrl = ref<string | undefined>(undefined)

    const share = () => {
      shareUrl.value = window.location.href
    }

    return {
      shareUrl,
      share,
    }
  },
})
</script>
