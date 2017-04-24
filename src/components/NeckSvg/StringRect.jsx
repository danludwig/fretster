import React from 'react'
import NECK from '../../constants/neck'

export default ({ string, orientation, handedness, neckSpace, neckWidth }) => {

  // assume vertical orientation and right handedness by default
  let width = string.gaugeWidth
  let height = '100%'
  let x = neckSpace.west + neckWidth - (width / 2) - (neckWidth * 0.05)
          - (neckWidth * 0.18 * (string.number - 1))
  let y = neckSpace.north
  if (handedness === NECK.HANDEDNESS.LEFT) {
    x = neckSpace.west + (neckWidth * 0.05) - (width / 2)
        + (neckWidth * 0.18 * (string.number - 1))
  }

  if (orientation === NECK.ORIENTATION.HORIZONTAL) {
    width = '100%'
    height = string.gaugeWidth
    x = neckSpace.west
    y = neckSpace.north + (neckWidth * 0.05) - (height / 2)
        + (neckWidth * 0.18 * (string.number - 1))
  }

  const fill = string.windingWidth
    ? `url(#wound_string_${string.number})`
    : '#eeeeee'

  return (
    <rect x={x.toFixed(3)} y={y.toFixed(3)} width={width} height={height}
      fill={fill} stroke="black" strokeWidth="0.1" strokeOpacity="0.5" />
  )
}
