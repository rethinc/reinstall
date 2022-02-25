import * as fs from 'fs'
import * as path from 'path'
import { exec } from 'child_process'

const projectRootDirectory = process.cwd()

const iconColorizableDirectory = path.resolve(
  projectRootDirectory,
  'src/assets/icons/colorizable'
)
const iconRegularDirectory = path.resolve(
  projectRootDirectory,
  'src/assets/icons/regular'
)

interface ProcessedIcons {
  importContent: string
  enumContent: string
  switchContent: string
}

const processIcons = (
  files: string[],
  importPath: string,
  enumName: string
): ProcessedIcons => {
  let importContent = ''
  let enumContent = ''
  let switchContent = ''
  files.forEach((fileName) => {
    const iconName = fileName.substring(0, fileName.lastIndexOf('.'))
    const enumCaseName = iconName[0].toUpperCase() + iconName.slice(1)
    importContent += `import ${iconName} from '${importPath}/${fileName}?raw'\n`
    enumContent += `${enumCaseName} = '${enumName}_${enumCaseName}',`
    switchContent += `
    case ${enumName}.${enumCaseName}:
      return ${iconName}
    `
  })
  return { importContent, enumContent, switchContent }
}

const processedColorizableIcons = processIcons(
  fs.readdirSync(iconColorizableDirectory),
  '@/assets/icons/colorizable',
  'IconColorizable'
)

const processedRegularIcons = processIcons(
  fs.readdirSync(iconRegularDirectory),
  '@/assets/icons/regular',
  'IconRegular'
)

const iconProviderFile = path.resolve(
  projectRootDirectory,
  'src/shared/icons/IconProvider.ts'
)

fs.mkdirSync(path.dirname(iconProviderFile), { recursive: true })
fs.writeFileSync(
  iconProviderFile,
  `
    ${processedColorizableIcons.importContent}
    ${processedRegularIcons.importContent}
    
    export enum IconColorizable {
      ${processedColorizableIcons.enumContent}    
    }
    
    export enum IconRegular{
      ${processedRegularIcons.enumContent}    
    }
    
    export type IconType = IconColorizable | IconRegular
    
    export const iconByType = (iconType: IconType): string => {
      switch (iconType) {
        ${processedColorizableIcons.switchContent}    
        ${processedRegularIcons.switchContent}    
     }
    }
  `
)

exec(`npx prettier --write "${iconProviderFile}"`)
