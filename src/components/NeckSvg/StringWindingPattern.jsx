import React from 'react'
import NECK from '../../constants/neck'

export default ({ string, orientation }) => {

  const id = `wound_string_${string.number}`

  // assume vertical orientation by default
  let width = string.windingWidth
  let height = 0.1
  let x2 = undefined
  let y2 = '100%'

  if (orientation === NECK.ORIENTATION.HORIZONTAL) {
    width = 0.1
    height = string.windingWidth
    x2 = '100%'
    y2 = undefined
  }

  return (
    <pattern id={id} width={width} height={height}
      patternTransform="rotate(45 50 50)">

      <line stroke="#cccccc" strokeWidth="1" x2={x2} y2={y2} />
    </pattern>
  )
}