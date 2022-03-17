export const addPackage = (
  existingPackages: string[],
  newPackage: string
): string[] => {
  return [...existingPackages, newPackage]
}

export const replacePackage = (
  existingPackages: string[],
  oldPackage: string,
  newPackage: string
): string[] => {
  const index = existingPackages.indexOf(oldPackage)
  return [
    ...existingPackages.slice(0, index),
    newPackage,
    ...existingPackages.slice(index + 1, existingPackages.length),
  ]
}

export const deletePackage = (
  existingPackages: string[],
  packageToDelete: string
): string[] => {
  return existingPackages.filter((p) => p !== packageToDelete)
}
