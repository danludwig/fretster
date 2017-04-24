import React from 'react'
import NECK from '../../constants/neck.js'

export default ({ orientation }) => {
  const transform = orientation === NECK.ORIENTATION.VERTICAL
    ? undefined : 'rotate(90, 50, 50)'

  return (
    <pattern id="wood_grain" width="100" height="100"
      patternUnits="userSpaceOnUse">

      <image xlinkHref="images/wood-grain.jpg"
        x="0" y="0" width="100" height="100"
        transform={transform}
      />
    </pattern>
  )
}