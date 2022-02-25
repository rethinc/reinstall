<template>
  <template v-if="!isEditing">
    <h1>{{ packageName }}</h1>
    <form @submit.prevent="install()">
      <label for="versionCode">Version Code</label>
      <input id="versionCode" v-model="versionCode" type="text" />
      <button>Install</button>
    </form>
    <button @click="edit()">Edit</button>
  </template>
  <EditApp
    v-if="isEditing"
    :package-name="packageName"
    :on-close="closeEditing"
  />
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'
import EditApp from '@/components/EditApp.vue'

export default defineComponent({
  name: 'AppCard',
  components: { EditApp },
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
    const isEditing = ref<boolean>(false)

    const edit = (): void => {
      isEditing.value = true
    }

    const closeEditing = () => {
      isEditing.value = false
    }

    return {
      isEditing,
      closeEditing,
      versionCode,
      install,
      edit,
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
