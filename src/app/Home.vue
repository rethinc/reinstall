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
    <icon-view id="logo" :type="IconRegular.Reinstall_sign" />
  </div>
  <div class="main-content">
    <div class="app-list">
      <card-wrapper v-for="packageName in packageNames" :key="packageName">
        <AppCard :package-name="packageName" />
      </card-wrapper>
    </div>
    <card-wrapper>
      <AddApp />
    </card-wrapper>
    <div class="footer-information">
      <a class="footer-link" href="https://rethinc.ch" target="_blank">
        <span>made by re:thinc</span>
        <icon-view :type="IconColorizable.Rethinc" />
      </a>
    </div>
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
  display: flex;
  justify-content: center;
  top: 3px;
  height: 50px;
  z-index: 10;
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
