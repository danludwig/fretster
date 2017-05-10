import React from 'react'
import * as NOTES from '../../constants/notes'
import * as scales from '../../functions/scales'
import * as SCALES from '../../constants/scales'
import NoteCircleSvg from '../Notes/NoteCircleSvg'
import './scale-notes.scss'

const ScaleNotes = ({ rootNoteId, scaleTypeId }) => {

  const scaleNotes = scales.buildScale(rootNoteId, scaleTypeId)
  const rootNote = scaleNotes[0].note
  const renderNotes = []
  for (let i = 0; i < 12; ++i) {
    const scaleNote = scaleNotes.find(x => x.interval.halfStepsFromRoot === i)
    if (!!scaleNote) {
      scaleNote.isScaleNote = true
      renderNotes.push(scaleNote)
      continue
    }

    const interval = SCALES.CHROMATIC.intervals
      .find(x => x.halfStepsFromRoot === i)
    const enharmonicId = scales.findScaleEnharmonicId(rootNote, interval)
    const letter = scales.findScaleLetter(rootNote, interval)
    const tones = NOTES.TONES.filter(x => x.enharmonicId === enharmonicId)
    const note = tones.find(x => x.letter === letter)
      || tones[0]
    renderNotes.push({ note, interval, isScaleNote: false })
  }
  renderNotes.push(renderNotes[0])

  return (
    <div className="d-flex flex-row scale-notes">
      { renderNotes.map((x, i) =>
        <RenderNote note={x} key={i} />
      )}
    </div>
  )
}

export const RenderNote = ({ note }) => {
  const className = note.isScaleNote ? 'scale-note' : 'avoid-note'
  return (
    <div className={className}>
      { note.isScaleNote ?
        <NoteCircleSvg size={48} note={note.note} circleFill="#5cb85c" />
        :
        <NoteCircleSvg size={48} circleRadius={20} text="" />
      }
      <IntervalText note={note} />
    </div>
  )
}

export const IntervalText = ({ note }) => {
  return (
    <div className="interval-text">
      { note.interval.interval }
    </div>
  )
}

export default ScaleNotes
