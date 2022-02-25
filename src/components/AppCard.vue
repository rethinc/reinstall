<template>
  <h1>{{ packageName }}</h1>
  <form @submit.prevent="install()">
    <label for="versionCode">Version Code</label>
    <input id="versionCode" v-model="versionCode" type="text" />
    <button>Install</button>
  </form>
  <button @click="share()">Share</button>
  <ShareUrl v-if="shareUrl" :url="shareUrl" />
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'
import ShareUrl from '@/components/ShareUrl.vue'

export default defineComponent({
  name: 'AppCard',
  components: { ShareUrl },
  props: {
    packageName: {
      type: String as PropType<string>,
      required: true,
    },
  },
  setup(props) {
    const versionCode = ref<string>('1569')
    const shareUrl = ref<string | undefined>(undefined)

    const install = (): void => {
      window.open(
        `https://play.google.com/apps/test/${props.packageName}/${versionCode.value}`
      )
    }
    const share = () => {
      shareUrl.value = window.location.href
    }

    return {
      versionCode,
      shareUrl,
      install,
      share,
    }
  },
})
</script>

<style scoped lang="scss">
@import '../assets/styles/colors';
@import '../assets/styles/browser-reset';

.colorizedIcon {
  color: $primary;
}
</style>
