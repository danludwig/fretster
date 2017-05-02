import * as NOTES from '../constants/notes'
import * as SCALES from '../constants/scales'

export const findScaleEnharmonicId = (rootNote, interval) => {
  const enharmonicId =
    ((rootNote.enharmonicId + interval.halfStepsFromRoot - 1) % 12) + 1
  return enharmonicId
}

export const findScaleLetter = (rootNote, interval) => {
  const rootLetter = rootNote.letter
  const rootLetterIndex = NOTES.LETTERS.findIndex(x => x === rootLetter)
  const noteLetterIndex = (rootLetterIndex + interval.noteLettersFromRoot)
    % NOTES.LETTERS.length
  const noteLetter = NOTES.LETTERS[noteLetterIndex]
  return noteLetter
}

export const buildScale = (rootNoteId, scaleTypeId) => {
  const TONES = NOTES.TONES
  const scale = SCALES.TYPES.find(x => x.id === scaleTypeId)
  const rootNote = TONES.find(x => x.id === rootNoteId)
  const scaleNotes = []

  for (let interval of scale.intervals) {
    const nextEnharmonicId = findScaleEnharmonicId(rootNote, interval)
    const nextLetter = findScaleLetter(rootNote, interval)

    const nextTones = TONES.filter(x => x.enharmonicId === nextEnharmonicId)
    const nextNote = nextTones.find(x => x.letter === nextLetter)
      || nextTones[0]

    scaleNotes.push({ note: nextNote, interval })
  }

  return scaleNotes
}
