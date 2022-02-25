import { Component } from 'vue'
import IconViewExample from './examples/shared/IconViewExample.vue'
import ShareUrlExample from './examples/components/ShareUrlExample.vue'
import ShareButtonExample from './examples/components/ShareButtonExample.vue'
import AppCardExample from './examples/components/AppCardExample.vue'
import HowToUseExample from './examples/components/HowToUseExample.vue'
import EditAppExample from './examples/components/EditAppExample.vue'
import AppButtonExample from './examples/shared/AppButtonExample.vue'

export interface Example {
  name: string
  component: Component
}

export const examples = new Map<string, Example[]>([
  [
    'Shared',
    [
      { name: 'Icons', component: IconViewExample },
      { name: 'Buttons', component: AppButtonExample },
    ],
  ],
  [
    'Components',
    [
      { name: 'AppCard', component: AppCardExample },
      { name: 'EditApp', component: EditAppExample },
      { name: 'HowToUse', component: HowToUseExample },
      { name: 'ShareButton', component: ShareButtonExample },
      { name: 'ShareUrl', component: ShareUrlExample },
    ],
  ],
])
