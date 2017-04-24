import React from 'react'
import NECK from '../../constants/neck.js'
import neck from '../../functions/neck.js'

export default ({ id, fretNumber, scaleLength, fretThickness, nutThickness,
  neckWidth, fingerboardLength, neckSpace, orientation, handedness, fill }) => {

  // assume vertical orientation by default
  const distanceFromFretToNut = neck.distanceFromFretToNut(scaleLength, fretNumber)
  let x = neckSpace.west
  let y = neckSpace.north + nutThickness + distanceFromFretToNut - (fretThickness / 2)
  let width = neckWidth
  let height = fretThickness

  if (orientation === NECK.ORIENTATION.HORIZONTAL) {
    x = neckSpace.west + nutThickness + distanceFromFretToNut - (fretThickness / 2)
    y = neckSpace.north
    width = fretThickness
    height = neckWidth

    if (handedness === NECK.HANDEDNESS.LEFT) {
      x = neckSpace.west + fingerboardLength - distanceFromFretToNut - (fretThickness / 2)
    }
  }

  return (
    <rect id={id} x={x.toFixed(3)} y={y.toFixed(3)} width={width} height={height}
      fill={fill} />
  )
}
