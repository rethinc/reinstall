<template>
  <div class="container">
    <AppButton :appearance="AppButtonAppearance.Transparent" @click="share()">
      <icon-view :type="IconColorizable.Reinstall_share" />
    </AppButton>
    <div v-if="shareUrl" class="sharable-url">
      <card-wrapper>
        <ShareUrl :url="shareUrl" @copy="copied" />
      </card-wrapper>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import ShareUrl from '@/components/ShareUrl.vue'
import AppButton, { AppButtonAppearance } from '@/shared/buttons/AppButton.vue'
import IconView from '@/shared/icons/IconView.vue'
import { IconColorizable } from '@/shared/icons/IconProvider'
import CardWrapper from '@/components/CardWrapper.vue'

export default defineComponent({
  name: 'ShareButton',
  components: { CardWrapper, IconView, AppButton, ShareUrl },
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
<style scoped lang="scss">
@import '../assets/styles/colors';
@import '../assets/styles/browser-reset';
@import '../assets/styles/sizes-and-spacings';

.container {
  position: relative;
}

.sharable-url {
  position: fixed;
  z-index: 10;
  right: 0;
  left: 0;
  width: 100vw;
  bottom: 0;
}
</style>
