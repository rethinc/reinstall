<template>
  <h1>App Card component</h1>

  <h2>Basic state</h2>
  <div>
    <app-card package-name="ch.viavelo.customer" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppCard from '../../../src/components/AppCard.vue'

export default defineComponent({
  name: 'AppCardExample',
  components: { AppCard },
})
</script>
