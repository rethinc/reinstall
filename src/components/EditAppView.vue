<template>
  <div class="card-wrapper">
    <form @submit.prevent="save()" @reset.prevent="onCancel()">
      <input-field>
        <label for="packageName" class="label">Package Name</label>
        <input
          id="packageName"
          v-model="currentPackageName"
          class="input"
          type="text"
        />
      </input-field>
      <div class="footer-buttons">
        <AppButton type="reset" :appearance="AppButtonAppearance.Transparent"
          >Cancel</AppButton
        >
        <AppButton>Save</AppButton>
      </div>
    </form>
    <div class="delete-container">
      <AppButton
        :appearance="AppButtonAppearance.Transparent"
        @click="onDelete()"
        ><icon-view :type="IconColorizable.Trash"
      /></AppButton>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'
import InputField from '@/components/InputField.vue'
import AppButton, { AppButtonAppearance } from '@/shared/buttons/AppButton.vue'
import IconView from '@/shared/icons/IconView.vue'
import { IconColorizable } from '@/shared/icons/IconProvider'

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
@import '../assets/styles/colors';
@import '../assets/styles/fonts';
@import '../assets/styles/sizes-and-spacings';

.footer-buttons {
  margin-top: $spacing-small;
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
  margin-top: $spacing-large;
  justify-content: center;
}
</style>
