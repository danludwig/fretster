// sharp flat ♯ ♭

const buildNote = (enharmonicId, variationId, letter, accidentals = []) => {
  return {
    id: `${enharmonicId}.${variationId}`,
    enharmonicId,
    variationId,
    letter, accidentals,
  }
}

export const LETTERS = ['C', 'D', 'E', 'F', 'G', 'A', 'B']

export const C          = buildNote( 1, 1, 'C')
export const B_SHARP    = buildNote( 1, 2, 'B', ['♯'])

export const C_SHARP    = buildNote( 2, 1, 'C', ['♯'])
export const D_FLAT     = buildNote( 2, 2, 'D', ['♭'])

export const D          = buildNote( 3, 1, 'D')

export const D_SHARP    = buildNote( 4, 2, 'D', ['♯'])
export const E_FLAT     = buildNote( 4, 1, 'E', ['♭'])

export const E          = buildNote( 5, 1, 'E')

export const F          = buildNote( 6, 1, 'F')
export const E_SHARP    = buildNote( 6, 2, 'E', ['♯'])

export const F_SHARP    = buildNote( 7, 1, 'F', ['♯'])
export const G_FLAT     = buildNote( 7, 2, 'G', ['♭'])

export const G          = buildNote( 8, 1, 'G')

export const G_SHARP    = buildNote( 9, 2, 'G', ['♯'])
export const A_FLAT     = buildNote( 9, 1, 'A', ['♭'])

export const A          = buildNote(10, 1, 'A')

export const A_SHARP    = buildNote(11, 2, 'A', ['♯'])
export const B_FLAT     = buildNote(11, 1, 'B', ['♭'])

export const B          = buildNote(12, 1, 'B')
export const C_FLAT     = buildNote(12, 2, 'C', ['♭'])

export const TONES = [
  C, B_SHARP,
  C_SHARP, D_FLAT,
  D,
  D_SHARP, E_FLAT,
  E,
  F, E_SHARP,
  F_SHARP, G_FLAT,
  G,
  A_FLAT, G_SHARP,
  A,
  B_FLAT, A_SHARP,
  B, C_FLAT,
]
