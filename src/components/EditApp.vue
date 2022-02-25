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
import { extractPackageNamesFromRoute } from '@/app/extractPackageNamesFromRoute'
import EditAppView from '@/components/EditAppView.vue'

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
      const currentPackageNames = extractPackageNamesFromRoute(route)
      props.onClose()
      router.push({
        path: '/',
        query: {
          packagename: currentPackageNames.filter(
            (p) => p !== props.packageName
          ),
        },
      })
    }

    const submit = (newPackageName: string) => {
      const currentPackageNames = extractPackageNamesFromRoute(route)
      const index = currentPackageNames.indexOf(props.packageName)
      const updatedPackageNames = [
        ...currentPackageNames.slice(0, index),
        newPackageName,
        ...currentPackageNames.slice(index + 1, currentPackageNames.length),
      ]
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
