<template>
  <div class="card-wrapper">
    <form @submit.prevent="submit()" @reset.prevent="reset()">
      <label for="packageName">Package Name</label>
      <input id="packageName" v-model="currentPackageName" type="text" />
      <button type="reset">Cancel</button>
      <button>Edit</button>
    </form>
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
      console.log('resetting')
    }

    const route = useRoute()

    const submit = () => {
      const currentPackageNams = extractPackageNamesFromRoute(route)
      router.push({
        path: '/',
        query: {
          packagename: [...currentPackageNams, currentPackageName.value],
        },
      })
    }

    return {
      submit,
      reset,
      currentPackageName,
    }
  },
})
</script>
