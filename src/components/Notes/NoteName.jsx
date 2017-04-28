import React from 'react'

export default ({ note }) => {
  return (
    <span>
      { note.letter }
      { note.accidentals.length
        ? <sup>{ note.accidentals.join(' ') }</sup>
      : undefined }
    </span>
  )
}
