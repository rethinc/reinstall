import download from '@/assets/icons/colorizable/download.svg?raw'
import reinstall_share from '@/assets/icons/colorizable/reinstall_share.svg?raw'

import reinstall_logo from '@/assets/icons/regular/reinstall_logo.svg?raw'
import reinstall_sign from '@/assets/icons/regular/reinstall_sign.svg?raw'

export enum IconColorizable {
  Download = 'IconColorizable_Download',
  Reinstall_share = 'IconColorizable_Reinstall_share',
}

export enum IconRegular {
  Reinstall_logo = 'IconRegular_Reinstall_logo',
  Reinstall_sign = 'IconRegular_Reinstall_sign',
}

export type IconType = IconColorizable | IconRegular

export const iconByType = (iconType: IconType): string => {
  switch (iconType) {
    case IconColorizable.Download:
      return download

    case IconColorizable.Reinstall_share:
      return reinstall_share

    case IconRegular.Reinstall_logo:
      return reinstall_logo

    case IconRegular.Reinstall_sign:
      return reinstall_sign
  }
}
