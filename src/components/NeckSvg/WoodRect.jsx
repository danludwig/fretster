import React from 'react'
import NECK from '../../constants/neck.js'

export default ({ orientation, handedness, neckWidth, fingerboardLength, nutThickness,
  neckSpace, fill }) => {

  // assume vertical orientation by default
  let x = neckSpace.west
  let y = nutThickness + neckSpace.north
  let width = neckWidth
  let height = fingerboardLength

  if (orientation === NECK.ORIENTATION.HORIZONTAL) {
    x = nutThickness + neckSpace.west
    y = neckSpace.north
    width = fingerboardLength
    height = neckWidth

    if (handedness === NECK.HANDEDNESS.LEFT) {
      x = neckSpace.west
    }
  }

  return (
    <rect x={x} y={y} width={width} height={height}
      fill={fill}
    />
  )
}