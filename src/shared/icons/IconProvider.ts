import check from '@/assets/icons/colorizable/check.svg?raw'
import copy from '@/assets/icons/colorizable/copy.svg?raw'
import edit from '@/assets/icons/colorizable/edit.svg?raw'
import plus from '@/assets/icons/colorizable/plus.svg?raw'
import reinstall_share from '@/assets/icons/colorizable/reinstall_share.svg?raw'
import rethinc from '@/assets/icons/colorizable/rethinc.svg?raw'
import trash from '@/assets/icons/colorizable/trash.svg?raw'

import reinstall_logo from '@/assets/icons/regular/reinstall_logo.svg?raw'
import reinstall_sign from '@/assets/icons/regular/reinstall_sign.svg?raw'

export enum IconColorizable {
  Check = 'IconColorizable_Check',
  Copy = 'IconColorizable_Copy',
  Edit = 'IconColorizable_Edit',
  Plus = 'IconColorizable_Plus',
  Reinstall_share = 'IconColorizable_Reinstall_share',
  Rethinc = 'IconColorizable_Rethinc',
  Trash = 'IconColorizable_Trash',
}

export enum IconRegular {
  Reinstall_logo = 'IconRegular_Reinstall_logo',
  Reinstall_sign = 'IconRegular_Reinstall_sign',
}

export type IconType = IconColorizable | IconRegular

export const iconByType = (iconType: IconType): string => {
  switch (iconType) {
    case IconColorizable.Check:
      return check

    case IconColorizable.Copy:
      return copy

    case IconColorizable.Edit:
      return edit

    case IconColorizable.Plus:
      return plus

    case IconColorizable.Reinstall_share:
      return reinstall_share

    case IconColorizable.Rethinc:
      return rethinc

    case IconColorizable.Trash:
      return trash

    case IconRegular.Reinstall_logo:
      return reinstall_logo

    case IconRegular.Reinstall_sign:
      return reinstall_sign
  }
}
