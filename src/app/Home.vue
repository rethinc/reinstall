<template>
  <icon-view
    :type="IconRegular.Reinstall_logo"
    style="width: 200px; height: 200px"
  />
  <AppCard :package-name="packageName" />
  <AddApp />
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import IconView from '@/shared/icons/IconView.vue'
import AddApp from '@/components/AddApp.vue'
import { IconColorizable, IconRegular } from '@/shared/icons/IconProvider'
import { RouteLocationNormalizedLoaded, useRoute } from 'vue-router'
import AppCard from '@/components/AppCard.vue'

export default defineComponent({
  name: 'App',
  components: { IconView, AddApp, AppCard },
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

    watch(route, () => {
      const newQueryPackage = extractPackageName(route)
      if (newQueryPackage) {
        packageName.value = newQueryPackage
      }
    })

    return {
      IconColorizable,
      IconRegular,
      packageName,
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
