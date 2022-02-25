import { RouteLocationNormalizedLoaded } from 'vue-router'

export const extractPackageNamesFromRoute = (
  route: RouteLocationNormalizedLoaded
): string[] => {
  const packageNames = route.query['packagename']

  if (typeof packageNames === 'object') {
    return (packageNames as string[]).filter(onlyUnique)
  } else if (typeof packageNames === 'string') {
    return [packageNames]
  }
  return []
}

const onlyUnique = (value: string, index: number, self: string[]) => {
  return self.indexOf(value) === index
}
