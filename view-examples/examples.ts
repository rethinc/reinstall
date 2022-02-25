import { Component } from 'vue'
import IconViewExample from './examples/shared/IconViewExample.vue'
import ShareUrlExample from './examples/components/ShareUrlExample.vue'
import AppCardExample from './examples/components/AppCardExample.vue'

export interface Example {
  name: string
  component: Component
}

export const examples = new Map<string, Example[]>([
  ['Shared', [{ name: 'Icons', component: IconViewExample }]],
  [
    'Components',
    [
      { name: 'ShareUrl', component: ShareUrlExample },
      { name: 'AppCard', component: AppCardExample },
    ],
  ],
])
