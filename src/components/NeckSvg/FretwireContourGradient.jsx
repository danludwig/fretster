import React from 'react'
import NECK from '../../constants/neck.js'

export default ({ orientation }) => {

  // assume vertical orientation by default
  let x2 = '0%'
  let y2 = '100%'

  if (orientation === NECK.ORIENTATION.HORIZONTAL) {
    x2 = '100%'
    y2 = '0%'
  }

  return (
    <linearGradient id="fretwire_contour"
      x1="0%" y1="0%" x2={x2} y2={y2}
      spreadMethod="pad">

      <stop offset="0%" stopColor="#666666" />
      <stop offset="50%" stopColor="#ffffff" />
      <stop offset="100%" stopColor="#666666" />
    </linearGradient>
  )
}
