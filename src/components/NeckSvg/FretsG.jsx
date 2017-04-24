import React from 'react'
import FretwireRect from './FretwireRect'

export default ({ id = 'frets', ...props }) => {

  const fretNumbers = []
  for (let fretNumber = 1; fretNumber <= props.fretCount; ++fretNumber) {
    fretNumbers[fretNumber] = fretNumber
  }

  return (
    <g id={id}>
      { fretNumbers.map((fretNumber) =>
        <FretwireRect fretNumber={fretNumber}
          id={`fret_number_${fretNumber}`} key={`fret_contour_${fretNumber}`}
          fill="url(#fretwire_contour)" {...props} />
      )}
    </g>
  )
}