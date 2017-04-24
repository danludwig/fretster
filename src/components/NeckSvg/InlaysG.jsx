import React from 'react'
import neck from '../../functions/neck'
import InlayImage from './InlayImage'

export default ({ id = 'inlays', inlays, ...props }) => {

  return (
    <g id={id}>
      { neck.flattenAndSortInlays(inlays).map(inlay =>
        <InlayImage {...inlay} {...props}
          key={`inlay_clip_path_${inlay.fretNumber}_${inlay.inlayLocation}`} />
      )}
    </g>
  )
}
