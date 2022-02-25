import edit from '@/assets/icons/colorizable/edit.svg?raw'
import reinstall_share from '@/assets/icons/colorizable/reinstall_share.svg?raw'
import trash from '@/assets/icons/colorizable/trash.svg?raw'

import reinstall_logo from '@/assets/icons/regular/reinstall_logo.svg?raw'
import reinstall_sign from '@/assets/icons/regular/reinstall_sign.svg?raw'

export enum IconColorizable {
  Edit = 'IconColorizable_Edit',
  Reinstall_share = 'IconColorizable_Reinstall_share',
  Trash = 'IconColorizable_Trash',
}

export enum IconRegular {
  Reinstall_logo = 'IconRegular_Reinstall_logo',
  Reinstall_sign = 'IconRegular_Reinstall_sign',
}

export type IconType = IconColorizable | IconRegular

export const iconByType = (iconType: IconType): string => {
  switch (iconType) {
    case IconColorizable.Edit:
      return edit

    case IconColorizable.Reinstall_share:
      return reinstall_share

    case IconColorizable.Trash:
      return trash

    case IconRegular.Reinstall_logo:
      return reinstall_logo

    case IconRegular.Reinstall_sign:
      return reinstall_sign
  }
}
