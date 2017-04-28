// sharp flat ♯ ♭

const buildNote = (enharmonicId, variationId, letter, accidentals = []) => {
  return {
    id: `${enharmonicId}.${variationId}`,
    enharmonicId,
    variationId,
    letter, accidentals,
  }
}

export const C          = buildNote( 1, 0, 'C')
export const C_SHARP    = buildNote( 2, 1, 'C', ['♯'])
export const D_FLAT     = buildNote( 2, 2, 'D', ['♭'])
export const D          = buildNote( 3, 0, 'D')
export const E_FLAT     = buildNote( 4, 0, 'E', ['♭'])
export const E          = buildNote( 5, 0, 'E')
export const F          = buildNote( 6, 0, 'F')
export const F_SHARP    = buildNote( 7, 1, 'F', ['♯'])
export const G_FLAT     = buildNote( 7, 2, 'G', ['♭'])
export const G          = buildNote( 8, 0, 'G')
export const A_FLAT     = buildNote( 9, 0, 'A', ['♭'])
export const A          = buildNote(10, 0, 'A')
export const B_FLAT     = buildNote(11, 0, 'B', ['♭'])
export const B          = buildNote(12, 0, 'B')
