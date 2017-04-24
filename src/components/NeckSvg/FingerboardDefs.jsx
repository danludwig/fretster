import React from 'react'
import NeckWoodGrainPattern from './WoodGrainPattern'
import NutContourGradient from './NutContourGradient'
import NutShadowGradient from './NutShadowGradient'

export default ({ id = 'fingerboard_defs', children, ...props }) => {

  return (
    <defs id={id}>
      <NeckWoodGrainPattern {...props} />
      <NutContourGradient {...props} />
      <NutShadowGradient {...props} />
      {children}
    </defs>
  )
}
