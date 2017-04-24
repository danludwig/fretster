import React from 'react'
import NECK from '../../constants/neck'
import neck from '../../functions/neck'

export default ({ fretNumber, inlayLocation, orientation, handedness,
  neckWidth, neckSpace, scaleLength, nutThickness,
  fingerboardLength }) => {

  const imageWidth = 10
  const imageHeight = 10
  const distanceFromFretToNut = neck.distanceFromFretToNut(scaleLength, fretNumber)
  const distanceFromPreviousFretToNut = fretNumber > 1
    ? neck.distanceFromFretToNut(scaleLength, fretNumber - 1) : 0
  const fretLength = distanceFromFretToNut - distanceFromPreviousFretToNut
  let inlayIdOnFret = ''
  if (inlayLocation !== NECK.INLAY_LOCATION.MIDDLE) {
    inlayIdOnFret = inlayLocation === NECK.INLAY_LOCATION.LOW ? 'a' : 'b'
  }

  // assume vertical orientation & center inlay location by default
  let x = neckSpace.west + (neckWidth / 2) - (imageWidth / 2)
  let y = neckSpace.north + nutThickness + distanceFromPreviousFretToNut
          + (fretLength /2) - (imageHeight / 2)
  if (inlayLocation === NECK.INLAY_LOCATION.LOW) {
    x = neckSpace.west + ((neckWidth * 2) / 9) - (imageWidth / 2)
  }
  else if (inlayLocation === NECK.INLAY_LOCATION.HIGH) {
    x = neckSpace.west + ((neckWidth * 7) / 9) - (imageWidth / 2)
  }


  if (orientation === NECK.ORIENTATION.HORIZONTAL) {
    x = neckSpace.west + nutThickness + distanceFromPreviousFretToNut
        + (fretLength /2) - (imageWidth / 2)
    y = neckSpace.north + (neckWidth / 2) - (imageHeight / 2)
    if (inlayLocation === NECK.INLAY_LOCATION.LOW) {
      y = neckSpace.north + ((neckWidth * 7) / 9) - (imageHeight / 2)
    }
    else if (inlayLocation === NECK.INLAY_LOCATION.HIGH) {
      y = neckSpace.north + ((neckWidth * 2) / 9) - (imageHeight / 2)
    }

    if (handedness === NECK.HANDEDNESS.LEFT) {
      x = neckSpace.west + fingerboardLength - distanceFromFretToNut
          + (fretLength / 2) - (imageWidth / 2)
    }
  }

  return (
    <image x={x.toFixed(3)} y={y.toFixed(3)} width={imageWidth} height={imageHeight}
      xlinkHref="/images/pearl-inlay.jpg"
      clipPath={`url(#circle_inlay_${fretNumber}${inlayIdOnFret})`} />
  )
}