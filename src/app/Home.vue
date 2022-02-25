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

export default defineComponent({
  name: 'App',
  components: { IconView },
  setup() {
    const packageName = ref<string>('ch.viavelo.customerapp')
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
