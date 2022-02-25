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
      <button type="reset">Cancel</button>
      <button>Save</button>
    </form>
    <button @click="onDelete()">Delete</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'
import InputField from '@/components/InputField.vue'

export default defineComponent({
  name: 'EditApp',
  components: { InputField },
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
    }
  },
})
</script>
