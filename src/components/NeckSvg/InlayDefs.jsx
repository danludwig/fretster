import React from 'react'
import neck from '../../functions/neck'
import InlayClipPath from './InlayClipPath'

export default ({ id = 'inlay_defs', inlays, ...props }) => {

  return (
    <defs id={id}>
      { neck.flattenAndSortInlays(inlays).map(inlay =>
        <InlayClipPath {...inlay} {...props}
          key={`inlay_clip_path_${inlay.fretNumber}_${inlay.inlayLocation}`} />
      )}
    </defs>
  )
}
