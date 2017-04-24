import React from 'react'
import NECK from '../../constants/neck'
import neck from '../../functions/neck'

export default ({ fretNumber, inlayLocation, orientation, handedness,
  scaleLength, neckSpace, neckWidth, nutThickness, fingerboardLength }) => {

  const radius = 2.5
  const distanceFromFretToNut = neck.distanceFromFretToNut(scaleLength, fretNumber)
  const distanceFromPreviousFretToNut = fretNumber > 1
    ? neck.distanceFromFretToNut(scaleLength, fretNumber - 1) : 0
  const fretLength = distanceFromFretToNut - distanceFromPreviousFretToNut
  let inlayIdOnFret = ''
  if (inlayLocation !== NECK.INLAY_LOCATION.MIDDLE) {
    inlayIdOnFret = inlayLocation === NECK.INLAY_LOCATION.LOW ? 'a' : 'b'
  }

  // assume vertical orientation & center inlay location by default
  let cx = neckSpace.west + (neckWidth / 2)
  let cy = neckSpace.north + nutThickness + distanceFromPreviousFretToNut
           + (fretLength /2)
   if (inlayLocation === NECK.INLAY_LOCATION.LOW) {
     cx = neckSpace.west + (neckWidth * 0.23)
   }
   else if (inlayLocation === NECK.INLAY_LOCATION.HIGH) {
     cx = neckSpace.west + (neckWidth * 0.77)
   }

  if (orientation === NECK.ORIENTATION.HORIZONTAL) {
    cx = neckSpace.west + nutThickness + distanceFromPreviousFretToNut
         + (fretLength / 2)
    cy = neckSpace.north + (neckWidth / 2)
    if (inlayLocation === NECK.INLAY_LOCATION.LOW) {
      cy = neckSpace.north + ((neckWidth * 7) / 9)
    }
    else if (inlayLocation === NECK.INLAY_LOCATION.HIGH) {
      cy = neckSpace.north + ((neckWidth * 2) / 9)
    }

    if (handedness === NECK.HANDEDNESS.LEFT) {
      cx = neckSpace.west + fingerboardLength - distanceFromFretToNut
           + (fretLength / 2)
    }
  }

  return (
    <clipPath id={`circle_inlay_${fretNumber}${inlayIdOnFret}`}>
      <circle r={radius} cx={cx.toFixed(3)} cy={cy.toFixed(3)} />
    </clipPath>
  )
}