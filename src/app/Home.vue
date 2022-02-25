<template>
  <nav class="navigation-wrapper">
    <div class="navigation-items">
      <icon-view :type="IconRegular.Reinstall_sign" style="height: 60px" />
    </div>
    <span class="gradient" />
  </nav>
  <icon-view
    :type="IconRegular.Reinstall_logo"
    style="width: 200px; height: 200px"
  />
  <AppCard v-if="packageName" :package-name="packageName" />
  <AddApp />
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from 'vue'
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

    const packageName = ref<string>('')
    onMounted(() => {
      packageName.value = extractPackageName(route) ?? ''
    })

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
@import '../assets/styles/sizes-and-spacings';

.navigation-wrapper {
  position: relative;
  padding-bottom: 40px;

  .navigation-items {
    background: $white;
    display: flex;
    justify-content: center;
    width: 100%;
    padding: $spacing-normal 0;
  }

  .gradient {
    position: absolute;
    bottom: 0;
    width: 100vw;
    height: 40px;
    background: linear-gradient(180deg, #50e3c2 0%, rgba(80, 227, 194, 0) 100%);
  }
}

.colorizedIcon {
  color: $primary;
}
</style>
