import * as NOTES from '../constants/notes'
import * as notes from '../functions/notes'
import * as SCALES from '../constants/scales'

export const computeNextEnharmonicId = (rootNote, interval) => {
  const nextEnharmonicId =
    ((rootNote.enharmonicId + interval.halfStepsFromRoot - 1) % 12) + 1
  return nextEnharmonicId
}

export const buildScale = (rootNoteId, scaleTypeId) => {
  const TONES = NOTES.TONES
  const scale = SCALES.TYPES.find(x => x.id === scaleTypeId)
  const rootNote = TONES.find(x => x.id === rootNoteId)
  const scaleNotes = [{
    note: rootNote, interval: scale.intervals[0]
  }]

  let lastLetter = rootNote.letter
  for (let interval of scale.intervals) {
    if (interval.halfStepsFromRoot === 0) continue
    const nextEnharmonicId = computeNextEnharmonicId(rootNote, interval)
    const nextLetter = notes.computeNextNoteLetter(lastLetter)

    const nextTones = TONES.filter(x => x.enharmonicId === nextEnharmonicId)
    const nextNote = nextTones.find(x => x.letter === nextLetter)
      || nextTones[0]

    scaleNotes.push({ note: nextNote, interval })
    lastLetter = nextNote.letter
  }

  return scaleNotes
}
