import Check from '@/application/shared/icons/assets/svg-colorizable/check.svg?raw'
import ChevronDown from '@/application/shared/icons/assets/svg-colorizable/chevron_down.svg?raw'
import Copy from '@/application/shared/icons/assets/svg-colorizable/copy.svg?raw'
import Edit from '@/application/shared/icons/assets/svg-colorizable/edit.svg?raw'
import Plus from '@/application/shared/icons/assets/svg-colorizable/plus.svg?raw'
import ReinstallShare from '@/application/shared/icons/assets/svg-colorizable/reinstall_share.svg?raw'
import Rethinc from '@/application/shared/icons/assets/svg-colorizable/rethinc.svg?raw'
import Trash from '@/application/shared/icons/assets/svg-colorizable/trash.svg?raw'

import ReinstallLogo from '@/application/shared/icons/assets/svg-original/reinstall_logo.svg?raw'
import ReinstallSign from '@/application/shared/icons/assets/svg-original/reinstall_sign.svg?raw'

export enum IconColorizable {
  Check = 'IconColorizable_Check',
  ChevronDown = 'IconColorizable_ChevronDown',
  Copy = 'IconColorizable_Copy',
  Edit = 'IconColorizable_Edit',
  Plus = 'IconColorizable_Plus',
  ReinstallShare = 'IconColorizable_ReinstallShare',
  Rethinc = 'IconColorizable_Rethinc',
  Trash = 'IconColorizable_Trash',
}

export enum IconOriginal {
  ReinstallLogo = 'IconOriginal_ReinstallLogo',
  ReinstallSign = 'IconOriginal_ReinstallSign',
}

export type IconType = IconColorizable | IconOriginal

export const iconByType = (iconType: IconType): string => {
  switch (iconType) {
    case IconColorizable.Check:
      return Check

    case IconColorizable.ChevronDown:
      return ChevronDown

    case IconColorizable.Copy:
      return Copy

    case IconColorizable.Edit:
      return Edit

    case IconColorizable.Plus:
      return Plus

    case IconColorizable.ReinstallShare:
      return ReinstallShare

    case IconColorizable.Rethinc:
      return Rethinc

    case IconColorizable.Trash:
      return Trash

    case IconOriginal.ReinstallLogo:
      return ReinstallLogo

    case IconOriginal.ReinstallSign:
      return ReinstallSign
  }
}
