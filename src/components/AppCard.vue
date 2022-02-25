<template>
  <template v-if="!isEditing">
    <h2>{{ packageName }}</h2>
    <form class="install-form" @submit.prevent="install()">
      <input-field>
        <label for="versionCode" class="label">Version Code</label>
        <input
          id="versionCode"
          v-model="versionCode"
          class="input"
          type="text"
          placeholder="1234"
        />
      </input-field>
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
import InputField from '@/components/InputField.vue'

export default defineComponent({
  name: 'AppCard',
  components: { InputField, EditApp },
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
@import '../assets/styles/sizes-and-spacings';

.colorizedIcon {
  color: $primary;
}

.install-form {
  display: flex;
  margin-bottom: $spacing-normal;

  :first-child {
    margin-right: $spacing-small;
  }
}
</style>
