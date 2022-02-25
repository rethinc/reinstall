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

  <AddApp />
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import IconView from '@/shared/icons/IconView.vue'
import AddApp from '@/components/AddApp.vue'
import { IconColorizable, IconRegular } from '@/shared/icons/IconProvider'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'App',
  components: { IconView, AddApp },
  setup() {
    const route = useRoute()
    const queryPackage =
      typeof route.query['packagename'] === 'string'
        ? route.query['packagename']
        : ''

    const packageName = ref<string>(queryPackage)
    const buildNumber = ref<string>('1569')

    watch(route, () => {
      const newQueryPackage =
        typeof route.query['packagename'] === 'string'
          ? route.query['packagename']
          : ''
      packageName.value = newQueryPackage
    })

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
