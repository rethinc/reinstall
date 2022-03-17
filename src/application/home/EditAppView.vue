<template>
  <div class="card-wrapper">
    <form
      class="edit-form"
      @submit.prevent="save()"
      @reset.prevent="onCancel()"
    >
      <InputField>
        <label for="packageName" class="label">Package Name</label>
        <input
          id="packageName"
          v-model="currentPackageName"
          class="input"
          type="text"
        />
      </InputField>
      <div class="footer-buttons">
        <AppButton type="reset" :appearance="AppButtonAppearance.Secondary"
          >Cancel</AppButton
        >
        <AppButton>Save</AppButton>
      </div>
    </form>
    <div class="delete-container">
      <AppButton
        :appearance="AppButtonAppearance.Transparent"
        @click="onDelete()"
        ><iconView :type="IconColorizable.Trash"
      /></AppButton>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'
import InputField from '@/application/shared/forms/InputField.vue'
import AppButton, {
  AppButtonAppearance,
} from '@/application/shared/buttons/AppButton.vue'
import IconView from '@/application/shared/icons/IconView.vue'
import { IconColorizable } from '@/application/shared/icons/icons'

export default defineComponent({
  name: 'EditApp',
  components: { IconView, AppButton, InputField },
  props: {
    packageName: {
      type: String as PropType<string>,
      required: true,
    },
    onCancel: {
      type: Function as PropType<() => void>,
      required: true,
    },
    onSave: {
      type: Function as PropType<(newPackageName: string) => void>,
      required: true,
    },
    onDelete: {
      type: Function as PropType<() => void>,
      required: true,
    },
  },
  setup(props) {
    const currentPackageName = ref<string>(props.packageName)

    const save = () => {
      console.log('saving')
      props.onSave(currentPackageName.value)
    }

    return {
      currentPackageName,
      save,
      AppButtonAppearance,
      IconColorizable,
    }
  },
})
</script>

<style scoped lang="scss">
@import '../../assets/styles/colors';
@import '../../assets/styles/fonts';
@import '../../assets/styles/sizes-and-spacings';

.edit-form {
  margin-bottom: $spacing-normal;
}

.footer-buttons {
  margin-top: $spacing-smaller;
  display: flex;
  > * {
    flex: 1 1 50%;
    margin-right: 10px;
  }

  :last-child {
    margin-right: 0;
  }
}
.delete-container {
  display: flex;
  justify-content: center;
}
</style>
