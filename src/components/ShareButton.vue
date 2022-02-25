<template>
  <AppButton @click="share()">Share</AppButton>
  <ShareUrl v-if="shareUrl" :url="shareUrl" @copy="copied" />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import ShareUrl from '@/components/ShareUrl.vue'
import AppButton from '@/shared/buttons/AppButton.vue'

export default defineComponent({
  name: 'ShareButton',
  components: { AppButton, ShareUrl },
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
