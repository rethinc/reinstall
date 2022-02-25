<template>
  <div class="card-wrapper">
    <form @submit.prevent="submit()" @reset.prevent="reset()">
      <label for="packageName">Package Name</label>
      <input id="packageName" v-model="currentPackageName" type="text" />
      <button type="reset">Cancel</button>
      <button>Save</button>
    </form>
    <button @click="deleteApp()">Delete</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { extractPackageNamesFromRoute } from '@/app/extractPackageNamesFromRoute'

export default defineComponent({
  name: 'EditApp',
  props: {
    packageName: {
      type: String as PropType<string>,
      required: true,
    },
  },
  setup(props) {
    const currentPackageName = ref<string>(props.packageName)

    const router = useRouter()

    const reset = () => {
      console.log('cancel')
    }

    const route = useRoute()

    const deleteApp = () => {
      const currentPackageNames = extractPackageNamesFromRoute(route)
      router.push({
        path: '/',
        query: {
          packagename: currentPackageNames.filter(
            (p) => p !== props.packageName
          ),
        },
      })
    }

    const submit = () => {
      const currentPackageNames = extractPackageNamesFromRoute(route)
      const index = currentPackageNames.indexOf(props.packageName)
      const updatedPackageNames = [
        ...currentPackageNames.slice(0, index),
        currentPackageName.value,
        ...currentPackageNames.slice(index + 1, currentPackageNames.length),
      ]
      router.push({
        path: '/',
        query: {
          packagename: updatedPackageNames,
        },
      })
    }

    return {
      submit,
      reset,
      currentPackageName,
      deleteApp,
    }
  },
})
</script>
