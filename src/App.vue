<template>
  <h1>re:install</h1>
  <p>Install Android app with</p>
  <icon-view
    :type="IconRegular.Reinstall_logo"
    style="width: 200px; height: 200px"
  />

  <p>by clicking this download button</p>
  <icon-view
    :type="IconColorizable.Download"
    style="width: 16px; height: 16px; color: red"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IconView from '@/shared/icons/IconView.vue'
import { IconColorizable, IconRegular } from '@/shared/icons/IconProvider'

export default defineComponent({
  name: 'App',
  components: { IconView },
  setup() {
    return {
      IconColorizable,
      IconRegular,
    }
  },
})
</script>

<style scoped lang="scss">
@import './assets/styles/colors';

.colorizedIcon {
  color: $primary;
}
</style>
