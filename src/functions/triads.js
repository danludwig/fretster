import * as TRIADS from '../constants/triads'

export const findTriadIntervalsForScaleNotes = scaleNotes => (
  scaleNotes.map(x =>
    (x.enharmonicId + 12 - scaleNotes[0].enharmonicId) % 12)
)

export const findTriadTypeForScaleNotes = scaleNotes => {
  const noteIntervals = findTriadIntervalsForScaleNotes(scaleNotes)
  for (let triadType of TRIADS.TYPES) {
    if (triadType.intervals.length === noteIntervals.length) {
      let isMatchingTriad = true
      for (let intervalIndexText in noteIntervals) {
        const intervalIndex = parseInt(intervalIndexText)
        const noteInterval = noteIntervals[intervalIndex]
        const triadInterval = triadType.intervals[intervalIndex]
        isMatchingTriad = noteInterval === triadInterval
        if (!isMatchingTriad) break
      }
      if (isMatchingTriad) return triadType
    }
  }
  return undefined
}

export const findTriadNotesForScaleNote = (scaleNotes, noteIndex) => {
  const rootIndex = parseInt(noteIndex)
  const firstNote = scaleNotes[rootIndex]
  const secondNoteIndex = (rootIndex + 2) % scaleNotes.length
  const thirdNoteIndex = (rootIndex + 4) % scaleNotes.length

  const triadNotes = [
    scaleNotes[rootIndex].note,
    scaleNotes[secondNoteIndex].note,
    scaleNotes[thirdNoteIndex].note
  ]
  return triadNotes
}
