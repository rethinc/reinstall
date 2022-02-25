<template>
  <h1>Card component (with different contents)</h1>
  <div class="list-spacing">
    <card-wrapper> I'm just a random text </card-wrapper>
    <card-wrapper>
      <add-app />
    </card-wrapper>
    <card-wrapper>
      <app-card package-name="ch.viavelo.customer" />
    </card-wrapper>
    <card-wrapper>
      <how-to-use />
    </card-wrapper>
  </div>

  <h1>Add App component</h1>
  <add-app></add-app>

  <h1>App Card component</h1>

  <h2>Basic state</h2>
  <div>
    <app-card package-name="ch.viavelo.customer" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppCard from '@/components/AppCard.vue'
import AddApp from '@/components/AddApp.vue'
import CardWrapper from '@/components/CardWrapper.vue'
import HowToUse from '@/components/HowToUse.vue'

export default defineComponent({
  name: 'AppCardExample',
  components: { AddApp, AppCard, CardWrapper, HowToUse},
})
</script>

<style scoped lang="scss">
@import '@/assets/styles/sizes-and-spacings';

.list-spacing {
  > * {
    margin-bottom: $spacing-normal;
  }
}
</style>
