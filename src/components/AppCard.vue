<template>
  <h1>{{ packageName }}</h1>
  <form @submit.prevent="install()">
    <label for="versionCode">Version Code</label>
    <input id="versionCode" v-model="versionCode" type="text" />
    <button>Install</button>
  </form>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'

export default defineComponent({
  name: 'AppCard',
  props: {
    packageName: {
      type: String as PropType<string>,
      required: true,
    },
  },
  setup(props) {
    const versionCode = ref<string>('1569')

    const install = (): void => {
      window.open(
        `https://play.google.com/apps/test/${props.packageName}/${versionCode.value}`
      )
    }

    return {
      versionCode,
      install,
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
