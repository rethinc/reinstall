<template>
  <h1>Edit Card component</h1>

  <h2>Basic state</h2>
  <div>
    <edit-app package-name="ch.viavelo.customer" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import EditApp from '../../../src/components/EditApp.vue'

export default defineComponent({
  name: 'EditAppExample',
  components: { EditApp },
})
</script>
