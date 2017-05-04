import * as NOTES from './notes'

export const ROOT_NOTES = [
  NOTES.C,
  NOTES.C_SHARP, NOTES.D_FLAT,
  NOTES.D,
  NOTES.E_FLAT,
  NOTES.E,
  NOTES.F,
  NOTES.F_SHARP, NOTES.G_FLAT,
  NOTES.G,
  NOTES.A_FLAT,
  NOTES.A,
  NOTES.B_FLAT,
  NOTES.B,
]

export const FINDER_NOTES = [
  NOTES.C,
  NOTES.C_SHARP, NOTES.D_FLAT,
  NOTES.D,
  NOTES.D_SHARP, NOTES.E_FLAT,
  NOTES.E,
  NOTES.F,
  NOTES.F_SHARP, NOTES.G_FLAT,
  NOTES.G,
  NOTES.G_SHARP, NOTES.A_FLAT,
  NOTES.A,
  NOTES.A_SHARP, NOTES.B_FLAT,
  NOTES.B,
]

export const MAJOR = {
  id: 'Major',
  intervals: [
    {
      halfStepsFromRoot: 0,
      noteLettersFromRoot: 0,
      interval: 'Root'
    },
    {
      halfStepsFromRoot: 2,
      noteLettersFromRoot: 1,
      interval: '2nd'
    },
    {
      halfStepsFromRoot: 4,
      noteLettersFromRoot: 2,
      interval: '3rd'
    },
    {
      halfStepsFromRoot: 5,
      noteLettersFromRoot: 3,
      interval: '4th'
    },
    {
      halfStepsFromRoot: 7,
      noteLettersFromRoot: 4,
      interval: '5th'
    },
    {
      halfStepsFromRoot: 9,
      noteLettersFromRoot: 5,
      interval: '6th'
    },
    {
      halfStepsFromRoot: 11,
      noteLettersFromRoot: 6,
      interval: '7th'
    },
  ]
}

export const MAJOR_PENTATONIC = {
  id: 'Major Pentatonic',
  triadsScaleType: {
    id: MAJOR.id,
    excludeHalfStepsFromRoot: [5, 11]
  },
  intervals: [
    {
      halfStepsFromRoot: 0,
      noteLettersFromRoot: 0,
      interval: 'Root'
    },
    {
      halfStepsFromRoot: 2,
      noteLettersFromRoot: 1,
      interval: '2nd'
    },
    {
      halfStepsFromRoot: 4,
      noteLettersFromRoot: 2,
      interval: '3rd'
    },
    {
      halfStepsFromRoot: 7,
      noteLettersFromRoot: 4,
      interval: '5th'
    },
    {
      halfStepsFromRoot: 9,
      noteLettersFromRoot: 5,
      interval: '6th'
    },
  ]
}

export const MINOR = {
  id: 'Minor',
  intervals: [
    {
      halfStepsFromRoot: 0,
      noteLettersFromRoot: 0,
      interval: 'Root'
    },
    {
      halfStepsFromRoot: 2,
      noteLettersFromRoot: 1,
      interval: '2nd'
    },
    {
      halfStepsFromRoot: 3,
      noteLettersFromRoot: 2,
      interval: 'Minor 3rd'
    },
    {
      halfStepsFromRoot: 5,
      noteLettersFromRoot: 3,
      interval: '4th'
    },
    {
      halfStepsFromRoot: 7,
      noteLettersFromRoot: 4,
      interval: '5th'
    },
    {
      halfStepsFromRoot: 8,
      noteLettersFromRoot: 5,
      interval: 'Minor 6th'
    },
    {
      halfStepsFromRoot: 10,
      noteLettersFromRoot: 6,
      interval: 'Minor 7th'
    },
  ]
}

export const MINOR_PENTATONIC = {
  id: 'Minor Pentatonic',
  triadsScaleType: {
    id: MINOR.id,
    excludeHalfStepsFromRoot: [2, 8]
  },
  intervals: [
    {
      halfStepsFromRoot: 0,
      interval: 'Root',
      noteLettersFromRoot: 0,
    },
    {
      halfStepsFromRoot: 3,
      noteLettersFromRoot: 2,
      interval: 'Minor 3rd'
    },
    {
      halfStepsFromRoot: 5,
      noteLettersFromRoot: 3,
      interval: '4th'
    },
    {
      halfStepsFromRoot: 7,
      noteLettersFromRoot: 4,
      interval: '5th'
    },
    {
      halfStepsFromRoot: 10,
      noteLettersFromRoot: 6,
      interval: 'Minor 7th'
    },
  ]
}

export const BLUES = {
  id: 'Blues',
  triadsScaleType: {
    id: MINOR.id,
    excludeHalfStepsFromRoot: [2, 8]
  },
  intervals: [
    {
      halfStepsFromRoot: 0,
      noteLettersFromRoot: 0,
      interval: 'Root'
    },
    {
      halfStepsFromRoot: 3,
      noteLettersFromRoot: 2,
      interval: 'Minor 3rd'
    },
    {
      halfStepsFromRoot: 5,
      noteLettersFromRoot: 3,
      interval: '4th'
    },
    {
      halfStepsFromRoot: 6,
      noteLettersFromRoot: 4,
      interval: 'diminished 5th'
    },
    {
      halfStepsFromRoot: 7,
      noteLettersFromRoot: 4,
      interval: '5th'
    },
    {
      halfStepsFromRoot: 10,
      noteLettersFromRoot: 6,
      interval: 'Minor 7th'
    },
  ]
}

export const HARMONIC_MINOR = {
  id: 'Harmonic Minor',
  intervals: [
    {
      halfStepsFromRoot: 0,
      noteLettersFromRoot: 0,
      interval: 'Root'
    },
    {
      halfStepsFromRoot: 2,
      noteLettersFromRoot: 1,
      interval: '2nd'
    },
    {
      halfStepsFromRoot: 3,
      noteLettersFromRoot: 2,
      interval: 'Minor 3rd'
    },
    {
      halfStepsFromRoot: 5,
      noteLettersFromRoot: 3,
      interval: '4th'
    },
    {
      halfStepsFromRoot: 7,
      noteLettersFromRoot: 4,
      interval: '5th'
    },
    {
      halfStepsFromRoot: 8,
      noteLettersFromRoot: 5,
      interval: 'Minor 6th'
    },
    {
      halfStepsFromRoot: 11,
      noteLettersFromRoot: 6,
      interval: '7th'
    },
  ]
}

export const TYPES = [
  MAJOR, MAJOR_PENTATONIC, MINOR, MINOR_PENTATONIC,
  BLUES, HARMONIC_MINOR
]
