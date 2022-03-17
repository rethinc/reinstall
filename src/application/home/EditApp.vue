<template>
  <EditAppView
    :package-name="packageName"
    :on-save="submit"
    :on-cancel="onClose"
    :on-delete="deleteApp"
  />
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { extractPackageNamesFromRoute } from './extractPackageNamesFromRoute'
import EditAppView from './EditAppView.vue'
import {
  deletePackage,
  replacePackage,
} from '@/application/home/packageOperations'

export default defineComponent({
  name: 'EditApp',
  components: { EditAppView },
  props: {
    packageName: {
      type: String as PropType<string>,
      required: true,
    },
    onClose: {
      type: Function as PropType<() => void>,
      required: true,
    },
  },
  setup(props) {
    const router = useRouter()

    const route = useRoute()

    const deleteApp = () => {
      const existingPackageNames = extractPackageNamesFromRoute(route)
      props.onClose()
      router.push({
        path: '/',
        query: {
          packagename: deletePackage(existingPackageNames, props.packageName),
        },
      })
    }

    const submit = (newPackageName: string) => {
      const existingPackageNames = extractPackageNamesFromRoute(route)
      const updatedPackageNames = replacePackage(
        existingPackageNames,
        props.packageName,
        newPackageName
      )
      props.onClose()
      router.push({
        path: '/',
        query: {
          packagename: updatedPackageNames,
        },
      })
    }

    return {
      submit,
      deleteApp,
    }
  },
})
</script>
