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

export const MAJOR = {
  id: 'Major',
  intervals: [
    {
      halfStepsFromRoot: 0,
      interval: 'Root'
    },
    {
      halfStepsFromRoot: 2,
      interval: '2nd'
    },
    {
      halfStepsFromRoot: 4,
      interval: '3rd'
    },
    {
      halfStepsFromRoot: 5,
      interval: '4th'
    },
    {
      halfStepsFromRoot: 7,
      interval: '5th'
    },
    {
      halfStepsFromRoot: 9,
      interval: '6th'
    },
    {
      halfStepsFromRoot: 11,
      interval: '7th'
    },
  ]
}

export const MINOR = {
  id: 'Minor',
  intervals: [
    {
      halfStepsFromRoot: 0,
      interval: 'Root'
    },
    {
      halfStepsFromRoot: 2,
      interval: '2nd'
    },
    {
      halfStepsFromRoot: 3,
      interval: 'Minor 3rd'
    },
    {
      halfStepsFromRoot: 5,
      interval: '4th'
    },
    {
      halfStepsFromRoot: 7,
      interval: '5th'
    },
    {
      halfStepsFromRoot: 8,
      interval: 'Minor 6th'
    },
    {
      halfStepsFromRoot: 10,
      interval: 'Minor 7th'
    },
  ]
}

export const TYPES = [
  MAJOR, MINOR
]
