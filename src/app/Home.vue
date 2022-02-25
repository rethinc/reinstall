<template>
  <icon-view
    :type="IconRegular.Reinstall_logo"
    style="width: 200px; height: 200px"
  />
  {{ packageName }}
  <form @submit.prevent="install()">
    <label for="versionCode">Version Code</label>
    <input id="versionCode" v-model="versionCode" type="text" />
    <button>Install</button>
  </form>

  <AddApp />
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import IconView from '@/shared/icons/IconView.vue'
import AddApp from '@/components/AddApp.vue'
import { IconColorizable, IconRegular } from '@/shared/icons/IconProvider'
import { RouteLocationNormalizedLoaded, useRoute } from 'vue-router'

export default defineComponent({
  name: 'App',
  components: { IconView, AddApp },
  setup() {
    const route = useRoute()
    const extractPackageName = (
      route: RouteLocationNormalizedLoaded
    ): string | undefined => {
      return typeof route.query['packagename'] === 'string'
        ? route.query['packagename']
        : undefined
    }

    const packageName = ref<string>(extractPackageName(route) ?? '')
    const versionCode = ref<string>('1569')

    watch(route, () => {
      const newQueryPackage = extractPackageName(route)
      if (newQueryPackage) {
        packageName.value = newQueryPackage
      }
    })

    const install = (): void => {
      window.open(
        `https://play.google.com/apps/test/${packageName.value}/${versionCode.value}`
      )
    }

    return {
      IconColorizable,
      IconRegular,
      packageName,
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
