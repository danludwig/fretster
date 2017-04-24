import React from 'react'
import NeckWoodRect from './WoodRect'
import NutRect from './NutRect'
import NutShadowRect from './NutShadowRect'

export default ({ id = 'fingerboard', children, ...props }) => {

  return (
    <g id={id}>
      <NeckWoodRect fill="url(#wood_grain)" { ...props } />
      <NeckWoodRect fill="rgba(73, 36, 5, 0.57)" { ...props } />
      <NeckWoodRect fill="rgba(0, 0, 0, 0.49)" { ...props } />
      <NutRect {...props} />
      <NutShadowRect {...props} />
      {/*
      */}
      {children}
    </g>
  )
}