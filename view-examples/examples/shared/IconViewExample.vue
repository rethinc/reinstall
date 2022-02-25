<template>
  <h1>IconView component</h1>
  <h2>Regular icons</h2>
  <icon-view
    v-for="type in IconRegular"
    :key="type"
    :type="type"
    class="icon"
  />

  <h2>Colorizable icons</h2>
  <button class="change-color-button" @click.prevent="changeColor">
    Change Color
  </button>
  <div>
    <icon-view
      v-for="type in IconColorizable"
      :key="type"
      class="icon"
      :type="type"
      :style="iconsColorizableStyle"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import IconView from '@/shared/icons/IconView.vue'
import { IconColorizable, IconRegular } from '@/shared/icons/IconProvider'

export default defineComponent({
  name: 'IconViewExample',
  components: { IconView },
  setup: () => {
    const colors = ['#F00', '#0F0', '#00F']
    let currentColorIndex = 0
    const iconsColorizableStyle = ref({
      color: colors[currentColorIndex],
    })

    const changeColor = () => {
      currentColorIndex = (currentColorIndex + 1) % 3
      iconsColorizableStyle.value = { color: colors[currentColorIndex] }
    }

    return {
      IconRegular,
      IconColorizable,
      changeColor,
      iconsColorizableStyle,
    }
  },
})
</script>

<style scoped lang="scss">
.icon {
  width: 50px;
  height: 50px;
}

button {
  margin-bottom: 20px;
}
</style>
