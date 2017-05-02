import * as NOTES from '../constants/notes'

export const selectDistinctEnharmonicIds = notesArray => {
  return notesArray.map(x => x.enharmonicId)
    .filter((value, index, self) => self.indexOf(value) === index)
}

export const selectNotesByEnharmonicId = (notesArray, note) => {
  return notesArray.filter(x => x.enharmonicId === (note.enharmonicId || note))
}
