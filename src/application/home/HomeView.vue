<template>
  <nav class="navigation-wrapper">
    <div class="navigation-items">
      <div></div>
      <ShareButton id="share" />
    </div>
    <span class="gradient" />
  </nav>
  <div class="sticky-effect"></div>
  <div class="sticky-logo">
    <IconView class="logo" :type="IconOriginal.ReinstallSign" />
  </div>
  <div class="main-content">
    <div class="app-list">
      <CardWrapper v-for="packageName in packageNames" :key="packageName">
        <AppCard :package-name="packageName" />
      </CardWrapper>
    </div>
    <CardWrapper>
      <AddApp />
    </CardWrapper>
    <div class="footer-information">
      <a class="footer-link" href="https://rethinc.ch" target="_blank">
        <span>made by re:thinc</span>
        <IconView :type="IconColorizable.Rethinc" class="logo-rethinc" />
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import IconView from '@/application/shared/icons/IconView.vue'
import AddApp from './AddApp.vue'
import { IconColorizable, IconOriginal } from '@/application/shared/icons/icons'
import { useRoute } from 'vue-router'
import AppCard from './AppCard.vue'
import ShareButton from './ShareButton.vue'
import { extractPackageNamesFromRoute } from './extractPackageNamesFromRoute'
import CardWrapper from './CardWrapper.vue'

export default defineComponent({
  name: 'HomeView',
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
      IconOriginal,
      packageNames,
    }
  },
})
</script>

<style scoped lang="scss">
@import '../../assets/styles/colors';
@import '../../assets/styles/browser-reset';
@import '../../assets/styles/sizes-and-spacings';

.logo-rethinc {
  width: 34px;
  height: 32px;
}

.navigation-wrapper {
  position: fixed;
  padding-bottom: 40px;
  max-height: 156px;
  z-index: 2;

  .navigation-items {
    position: relative;
    background: $white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100vw;
    padding: $spacing-small 4vw;
  }

  .gradient {
    position: absolute;
    bottom: 0;
    width: 100vw;
    height: 40px;
    background: linear-gradient(180deg, #50e3c2 0%, rgba(80, 227, 194, 0) 100%);
  }
}

.sticky-logo {
  pointer-events: none;
  position: sticky;
  margin: 0 auto;
  top: 3px;
  height: 50px;
  z-index: 10;
  max-width: 600px;
  padding: 0 4vw;
}

.sticky-effect {
  height: 25px;
}

.main-content {
  padding: $spacing-small 4vw;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.app-list {
  > * {
    margin-bottom: $spacing-normal;
  }
}

.footer-information {
  margin: $spacing-huge 0 $spacing-normal;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;

  .footer-link {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    color: #3dad94;
    text-decoration: none;

    :first-child {
      padding-bottom: $spacing-smaller;
    }
  }
}
</style>
