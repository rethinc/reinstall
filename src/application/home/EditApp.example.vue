<template>
  <h1>Edit Card component</h1>

  <h2>Basic state</h2>
  <div>
    <EditApp package-name="ch.viavelo.customer" :on-close="() => {}" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import EditApp from './EditApp.vue'

export default defineComponent({
  name: 'EditAppExample',
  components: { EditApp },
})
</script>
