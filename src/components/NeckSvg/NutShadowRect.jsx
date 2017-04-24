import React from 'react'
import NECK from '../../constants/neck.js'

export default ({ orientation, handedness, neckWidth, fingerboardLength, neckSpace, nutThickness }) => {

  const shadow = 1.5

  // assume vertical orientation by default
  let x = neckSpace.west
  let y = neckSpace.north + nutThickness
  let width = neckWidth
  let height = shadow

  if (orientation === NECK.ORIENTATION.HORIZONTAL) {
    x = neckSpace.west + nutThickness
    y = neckSpace.north
    width = shadow
    height = neckWidth

    if (handedness === NECK.HANDEDNESS.LEFT) {
      x = neckSpace.west + fingerboardLength - shadow
    }
  }

  return (
    <rect x={x} y={y} width={width} height={height}
      fill="url(#nut_dropshadow)"></rect>
  )
}