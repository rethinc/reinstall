<template>
  <icon-view
    :type="IconRegular.Reinstall_logo"
    style="width: 200px; height: 200px"
  />
  <form @submit.prevent="install()">
    <input v-model="packageName" type="text" />
    <input v-model="buildNumber" type="text" />
    <button>Install</button>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import IconView from '@/shared/icons/IconView.vue'
import { IconColorizable, IconRegular } from '@/shared/icons/IconProvider'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'App',
  components: { IconView },
  setup() {
    const route = useRoute()
    const queryPackage =
      typeof route.query['package'] === 'string' ? route.query['package'] : ''
    const packageName = ref<string>(queryPackage)
    const buildNumber = ref<string>('1569')
    const install = (): void => {
      window.open(
        `https://play.google.com/apps/test/${packageName.value}/${buildNumber.value}`
      )
    }

    return {
      IconColorizable,
      IconRegular,
      packageName,
      buildNumber,
      install,
    }
  },
})
</script>

<style scoped lang="scss">
@import '../assets/styles/colors';

.colorizedIcon {
  color: $primary;
}
</style>
