<template>
  <h1>Card component (with different contents)</h1>
  <div class="list-spacing">
    <CardWrapper> I'm just a random text </CardWrapper>
    <CardWrapper>
      <addApp />
    </CardWrapper>
    <CardWrapper>
      <app-card package-name="ch.viavelo.customer" />
    </CardWrapper>
    <CardWrapper>
      <HowToUse />
    </CardWrapper>
  </div>

  <h1>Add App component</h1>
  <AddApp></AddApp>

  <h1>App Card component</h1>

  <h2>Basic state</h2>
  <div>
    <AppCard package-name="ch.viavelo.customer" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppCard from './AppCard.vue'
import AddApp from './AddApp.vue'
import CardWrapper from './CardWrapper.vue'
import HowToUse from './HowToUse.vue'

export default defineComponent({
  name: 'AppCardExample',
  components: { AddApp, AppCard, CardWrapper, HowToUse },
})
</script>

<style scoped lang="scss">
@import '../../assets/styles/sizes-and-spacings';

.list-spacing {
  > * {
    margin-bottom: $spacing-normal;
  }
}
</style>
