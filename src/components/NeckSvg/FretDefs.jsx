import React from 'react'
import FretwireContourGradient from './FretwireContourGradient'

export default ({ id = 'fret_defs', children, ...props }) => {

  return (
    <defs id={id}>
      <FretwireContourGradient {...props} />
      {children}
    </defs>
  )
}
