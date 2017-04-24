import NECK from '../constants/neck'

const distanceFromFretToBridge = (scaleLength, fretNumber) => (
  scaleLength / (Math.pow(2, fretNumber / 12))
)

const distanceFromFretToNut = (scaleLength, fretNumber) => (
  scaleLength - distanceFromFretToBridge(scaleLength, fretNumber)
)

const flattenAndSortInlays = (inlays) => {
  const sortedInlays = []
  for (let inlayLocation of Object.keys(inlays)) {
    for (let fretNumber of inlays[inlayLocation]) {
      sortedInlays.push({ fretNumber, inlayLocation })
    }
  }
  sortedInlays.sort((a, b) => {
    // when the fretNumbers are different, always sort by fretNumbers
    if (a.fretNumber != b.fretNumber) {
      return a.fretNumber - b.fretNumber
    }

    // when the fretNumbers are the same, low comes before high
    return a.inlayLocation === NECK.INLAY_LOCATION.LOW ? -1 : 1
  })

  return sortedInlays
}

export default {
  distanceFromFretToBridge,
  distanceFromFretToNut,
  flattenAndSortInlays
}