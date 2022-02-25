<template>
  <button @click="share()">Share</button>
  <ShareUrl v-if="shareUrl" :url="shareUrl" @copy="copied" />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import ShareUrl from '@/components/ShareUrl.vue'

export default defineComponent({
  name: 'ShareButton',
  components: { ShareUrl },
  setup() {
    const showShareUrl = ref<string | undefined>(undefined)

    const share = () => {
      showShareUrl.value = window.location.href
    }

    const copied = () => {
      setTimeout(() => {
        showShareUrl.value = undefined
      }, 2000)
    }

    return {
      shareUrl: showShareUrl,
      share,
      copied,
    }
  },
})
</script>
