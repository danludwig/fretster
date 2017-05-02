import * as SCALES from '../constants/scales'
import * as TRIADS from '../constants/triads'
import * as scales from './scales'

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

export const buildTriads = (rootNoteId, scaleTypeId, excludeHalfStepsFromRoot = []) => {
  const scaleType = SCALES.TYPES.find(x => x.id === scaleTypeId)
  if (scaleType.triadsScaleType) {
    return buildTriads(rootNoteId, scaleType.triadsScaleType.id,
      scaleType.triadsScaleType.excludeHalfStepsFromRoot)
  }
  const scaleNotes = scales.buildScale(rootNoteId, scaleTypeId)
  const triads = []
  for (let noteIndex in scaleNotes) {
    const scaleNote = scaleNotes[noteIndex]
    if (excludeHalfStepsFromRoot.indexOf(scaleNote.interval.halfStepsFromRoot) > -1) {
      continue
    }
    const triadNotes = findTriadNotesForScaleNote(scaleNotes, noteIndex)
    const triadType = findTriadTypeForScaleNotes(triadNotes)
    triads.push({
      triadType, notes: triadNotes, rootNote: triadNotes[0]
    })
  }
  return triads
}
