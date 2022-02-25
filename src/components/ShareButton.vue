<template>
  <AppButton :appearance="AppButtonAppearance.Transparent" @click="share()">
    <icon-view :type="IconColorizable.Reinstall_share" />
  </AppButton>
  <ShareUrl v-if="shareUrl" :url="shareUrl" @copy="copied" />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import ShareUrl from '@/components/ShareUrl.vue'
import AppButton, { AppButtonAppearance } from '@/shared/buttons/AppButton.vue'
import IconView from '@/shared/icons/IconView.vue'
import { IconColorizable } from '@/shared/icons/IconProvider'

export default defineComponent({
  name: 'ShareButton',
  components: { IconView, AppButton, ShareUrl },
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
      IconColorizable,
      AppButtonAppearance,
    }
  },
})
</script>
