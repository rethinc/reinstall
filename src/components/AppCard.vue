<template>
  <template v-if="!isEditing">
    <h2>{{ packageName }}</h2>
    <form class="install-form" @submit.prevent="install()">
      <input-field>
        <label for="versionCode" class="label">Version Code</label>
        <input
          id="versionCode"
          v-model="versionCode"
          type="text"
          class="input"
          placeholder="1234"
        />
      </input-field>
      <app-button> Install</app-button>
    </form>
    <AppButton :appearance="AppButtonAppearance.Transparent" @click="edit()">
      <IconView :type="IconColorizable.Edit" class="icon" />
    </AppButton>
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
import AppButton, { AppButtonAppearance } from '@/shared/buttons/AppButton.vue'
import { IconColorizable } from '@/shared/icons/IconProvider'
import IconView from '@/shared/icons/IconView.vue'

export default defineComponent({
  name: 'AppCard',
  components: { IconView, AppButton, InputField, EditApp },
  props: {
    packageName: {
      type: String as PropType<string>,
      required: true,
    },
  },
  setup(props) {
    const versionCode = ref<string>('')

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
      AppButtonAppearance,
      IconColorizable,
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

.install-form {
  display: flex;
  margin-bottom: $spacing-normal;
  align-items: flex-end;

  :first-child {
    flex: 1 1 auto;
    margin-right: $spacing-smaller;
    * {
      align-items: center;
    }
  }
  > :last-child {
    flex: 1 1 auto;
    height: 47px;
    padding: 0 $spacing-normal;
    font-size: $smallfont;
    font-weight: $fontWeightBold;
  }
}

.icon {
  width: $icon-size;
  height: $icon-size;
}
</style>
