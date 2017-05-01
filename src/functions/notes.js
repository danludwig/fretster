import * as NOTES from '../constants/notes'

export const selectDistinctEnharmonicIds = notesArray => {
  return notesArray.map(x => x.enharmonicId)
    .filter((value, index, self) => self.indexOf(value) === index)
}

export const selectNotesByEnharmonicId = (notesArray, note) => {
  return notesArray.filter(x => x.enharmonicId === (note.enharmonicId || note))
}

export const computeNextNoteLetter = lastLetter => {
  const nextLetterIndex = (NOTES.LETTERS.findIndex(x => x === lastLetter) + 1)
    % NOTES.LETTERS.length
  const nextLetter = NOTES.LETTERS[nextLetterIndex]
  return nextLetter
}
