// sharp flat ♯ ♭

export const SCALE_TONICS = [
  {
    id: '1.0',
    enharmonicId: '1',
    variationId: '0',
    letter: 'C',
    accidentals: [],
  },
  {
    id: '2.1',
    enharmonicId: '2',
    variationId: '1',
    letter: 'C',
    accidentals: ['♯'],
  },
  {
    id: '2.2',
    enharmonicId: '2',
    variationId: '2',
    letter: 'D',
    accidentals: ['♭'],
  },
  {
    id: '3.0',
    enharmonicId: '3',
    variationId: '0',
    letter: 'D',
    accidentals: [],
  },
  {
    id: '4.0',
    enharmonicId: '4',
    variationId: '0',
    letter: 'E',
    accidentals: ['♭'],
  },
  {
    id: '5.0',
    enharmonicId: '5',
    variationId: '0',
    letter: 'E',
    accidentals: [],
  },
  {
    id: '6.0',
    enharmonicId: '6',
    variationId: '0',
    letter: 'F',
    accidentals: [],
  },
  {
    id: '7.1',
    enharmonicId: '7',
    variationId: '1',
    letter: 'F',
    accidentals: ['♯'],
  },
  {
    id: '7.2',
    enharmonicId: '7',
    variationId: '2',
    letter: 'G',
    accidentals: ['♭'],
  },
  {
    id: '8.0',
    enharmonicId: '8',
    variationId: '0',
    letter: 'G',
    accidentals: [],
  },
  {
    id: '9.0',
    enharmonicId: '9',
    variationId: '0',
    letter: 'A',
    accidentals: ['♭'],
  },
  {
    id: '10.0',
    enharmonicId: '10',
    variationId: '0',
    letter: 'A',
    accidentals: [],
  },
  {
    id: '11.0',
    enharmonicId: '11',
    variationId: '0',
    letter: 'B',
    accidentals: ['♭'],
  },
  {
    id: '12.0',
    enharmonicId: '12',
    variationId: '0',
    letter: 'B',
    accidentals: [],
  },
]

export const ENHARMONIC_IDS = SCALE_TONICS.map(x => x.enharmonicId)
  .filter((value, index, self) => self.indexOf(value) === index)

