<template>
  <nav class="navigation-wrapper">
    <div class="navigation-items">
      <div></div>
      <div>
        <icon-view id="logo" :type="IconRegular.Reinstall_sign" />
      </div>
      <ShareButton id="share" />
    </div>
    <span class="gradient" />
  </nav>
  <div class="main-content">
    <div class="app-list">
      <card-wrapper v-for="packageName in packageNames" :key="packageName">
        <AppCard :package-name="packageName" />
      </card-wrapper>
    </div>
    <card-wrapper>
      <AddApp />
    </card-wrapper>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import IconView from '@/shared/icons/IconView.vue'
import AddApp from '@/components/AddApp.vue'
import { IconColorizable, IconRegular } from '@/shared/icons/IconProvider'
import { useRoute } from 'vue-router'
import AppCard from '@/components/AppCard.vue'
import ShareButton from '@/components/ShareButton.vue'
import { extractPackageNamesFromRoute } from '@/app/extractPackageNamesFromRoute'
import CardWrapper from '@/components/CardWrapper.vue'

export default defineComponent({
  name: 'App',
  components: {
    CardWrapper,
    IconView,
    AddApp,
    AppCard,
    ShareButton,
  },
  setup() {
    const route = useRoute()
    const packageNames = ref<string[]>(extractPackageNamesFromRoute(route))

    watch(route, () => {
      packageNames.value = extractPackageNamesFromRoute(route)
    })

    return {
      IconColorizable,
      IconRegular,
      packageNames,
    }
  },
})
</script>

<style scoped lang="scss">
@import '../assets/styles/colors';
@import '../assets/styles/browser-reset';
@import '../assets/styles/sizes-and-spacings';

.navigation-wrapper {
  position: fixed;
  padding-bottom: 40px;
  max-height: 156px;

  .navigation-items {
    position: relative;
    background: $white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100vw;
    padding: $spacing-small $spacing-small;

    #logo {
      position: absolute;
      bottom: 0;
      height: 50px;
      transform: translateY(50%);
      z-index: 10;
    }
  }

  .gradient {
    position: absolute;
    bottom: 0;
    width: 100vw;
    height: 40px;
    background: linear-gradient(180deg, #50e3c2 0%, rgba(80, 227, 194, 0) 100%);
  }
}

.main-content {
  padding: 100px 4vw;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.app-list {
  > * {
    margin-bottom: $spacing-normal;
  }
}

.colorizedIcon {
  color: $primary;
}
</style>
