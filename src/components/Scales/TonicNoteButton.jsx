import React from 'react'
import classnames from 'classnames'
import { SCALE_TONICS } from '../../constants/notes'

const ButtonGroup = ({ children }) => (
  <div className="btn-group">
    { children }
  </div>
)

const Button = ({ note, onClick }) => {
  const enharmonicNotes = SCALE_TONICS
    .filter(x => x.enharmonicId === note.enharmonicId)
  const hasMarginRight = enharmonicNotes.length == 1
    ? note !== SCALE_TONICS[SCALE_TONICS.length - 1]
    : note === enharmonicNotes[enharmonicNotes.length - 1]
  const className = classnames('btn btn-primary mt-1', {
    'mr-2': hasMarginRight,
  })
  return (
    <button type="button" className={className}
      onClick={() => onClick(note.id)}>

      { note.letter }
      { note.accidentals.length
        ? <sup>{ note.accidentals.join(' ') }</sup>
      : undefined }
    </button>
  )
}

export default ({ enharmonicId, onClick }) => {
  const notes = SCALE_TONICS.filter(x => x.enharmonicId === enharmonicId)
  if (notes.length === 1) {
    return (
      <Button note={notes[0]} onClick={onClick} />
    )
  }
  return (
    <ButtonGroup>
      { notes.map(x =>
        <Button note={x} onClick={onClick}
          key={`tonic_enharmonic_member_${x.id}`} />
      )}
    </ButtonGroup>
  )
}