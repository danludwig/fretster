import React from 'react'
import NECK from '../../constants/neck.js'

export default ({ orientation, handedness }) => {

  // assume vertical orientation by default
  let x1 = '0%'
  let x2 = '0%'
  let y2 = '100%'

  if (orientation === NECK.ORIENTATION.HORIZONTAL) {
    x2 = '100%'
    y2 = '0%'

    if (handedness === NECK.HANDEDNESS.LEFT) {
      x1 = '100%'
      x2 = '0%'
    }
  }

  return (
    <linearGradient id="nut_dropshadow" x1={x1} y1="0%" x2={x2} y2={y2}
      spreadMethod="pad">

      <stop offset="0%" stopColor="#333333" />
      <stop offset="90%" stopColor="#333333" stopOpacity="0" />
    </linearGradient>
  )
}