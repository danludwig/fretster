import React from 'react'
import NECK from '../../constants/neck.js'

export default ({ orientation, handedness, neckWidth, fingerboardLength, nutThickness,
  neckSpace }) => {

  // assume vertical orientation by default
  let x = neckSpace.west
  let y = neckSpace.north
  let width = neckWidth
  let height = nutThickness

  if (orientation === NECK.ORIENTATION.HORIZONTAL) {
    x = neckSpace.west
    y = neckSpace.north
    width = nutThickness
    height = neckWidth

    if (handedness === NECK.HANDEDNESS.LEFT) {
      x = neckSpace.west + fingerboardLength
    }
  }

  return (
    <rect x={x} y={y} width={width} height={height}
      fill="url(#nut_contour)" stroke="black" strokeWidth="0.1"
      strokeOpacity="0.7" />
  )
}