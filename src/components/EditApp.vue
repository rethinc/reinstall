<template>
  <EditAppView
    :package-name="packageName"
    :on-save="submit"
    :on-cancel="reset"
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
  },
  emits: ['cancel'],
  setup(props, { emit }) {
    const router = useRouter()

    const reset = () => {
      emit('cancel')
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

    const submit = (newPackageName: string) => {
      const currentPackageNames = extractPackageNamesFromRoute(route)
      const index = currentPackageNames.indexOf(props.packageName)
      const updatedPackageNames = [
        ...currentPackageNames.slice(0, index),
        newPackageName,
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
      deleteApp,
    }
  },
})
</script>
