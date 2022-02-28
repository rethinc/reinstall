<template>
  <div class="guide">
    <h2>Add new</h2>
    <p>
      In order to use re:install make sure you enabled internal App Sharing on
      Google Play.
    </p>
    <AppButton
      :appearance="AppButtonAppearance.Textlink"
      @click="onShowDetail()"
    >
      {{ showDetailButtonContent }}
      <icon-view
        class="show-more-icon"
        :class="{ 'icon-hide': showDetail }"
        :type="IconColorizable.Chevron_down"
      />
    </AppButton>
  </div>
  <div v-if="showDetail" class="textblock guide">
    <h2>Prerequisites</h2>
    <h3>Pushing packages to google play</h3>
    <p>
      You are already able to publish packages with a specific package name and
      version code to google play.
    </p>
    <h3>Enable internal app sharing</h3>
    <p>
      In order to enable internal app sharing, create at least one email list
      with at least one email from testers google account. The email list can be
      added in the Google Play Console under: Setup ➔ internal app sharing ➔
      Email list.
    </p>
    <h3>Enable internal app sharing on phone</h3>
    <p>
      On the phone on which you want to install your applications you need to
      enable internal app sharing. You can do this as follows:
    </p>
    <ol>
      <li>Open the Google Play Store app.</li>
      <li>In the main menu tap on Settings.</li>
      <li>Tap on the Play Store version (in the About section) 7 times.</li>
      <li>
        After this you will see the Internal app sharing setting appear. Make
        sure it is enabled.
      </li>
    </ol>
    <h2>How to use</h2>
    <p>
      Once both the prerequisites are fulfilled, you are ready to use
      re:install. All you have to do is enter your apps package name and
      appropriate version code in the re:install app on an Android phone which
      is linked to the previously added Google account. This will install the
      app on your phone.
    </p>
    <h2>You've got a 404 when installing the app?</h2>
    <p>
      Check that the email list on your Play console internal app sharing
      contains the email of the signed in Google account on the phone.
    </p>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import AppButton, { AppButtonAppearance } from '@/shared/buttons/AppButton.vue'
import IconView from '@/shared/icons/IconView.vue'
import { IconColorizable } from '@/shared/icons/IconProvider'

export default defineComponent({
  name: 'HowToUse',
  components: { IconView, AppButton },
  setup() {
    const showDetail = ref<boolean>(false)

    const showDetailButtonContent = computed(() => {
      return showDetail.value ? 'Hide' : 'Show me how'
    })

    const onShowDetail = () => {
      showDetail.value = !showDetail.value
    }

    return {
      AppButtonAppearance,
      onShowDetail,
      showDetail,
      showDetailButtonContent,
      IconColorizable,
    }
  },
})
</script>

<style lang="scss" scoped>
@import '../assets/styles/fonts';
@import '../assets/styles/sizes-and-spacings';

.guide {
  > * {
    margin-bottom: $spacing-small;
  }
}

.show-more-icon {
  margin-left: $spacing-smallest;

  .icon-hide {
    transform: rotate(90deg);
  }
}

.icon-hide {
  transform: rotate(180deg);
}

.textblock {
  @include typography-default;

  h2 {
    margin: $spacing-normal 0 $spacing-smaller;

    &:first-of-type {
      margin-top: 0;
    }
  }

  h3 {
    margin-bottom: $spacing-smaller;
  }

  ol {
    line-height: 2;
    padding-inline: 1rem;

    li::marker {
      font-weight: 600;
    }
  }
}
</style>
