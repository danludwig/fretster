import React from 'react'
import HtmlElement from '../Common/HtmlElement'

const NoteCircleSvg = ({ size = 24, note, text = 'X',
  circleFill = '#999', circleRadius = 50, textFill = "#fff", ...props }) => {

  return (
    <HtmlElement element="svg"
      width={`${size}px`} height={`${size}px`} viewBox="0, 0, 100, 100"
      {...props}>
      <g>
        <circle cx="50" cy="50" r={circleRadius} fill={circleFill} />
        { note || text ?
          <text x="50" y="50" fill={textFill} textAnchor="middle"
            dominantBaseline="central" fontSize="60px"
            fontFamily="Arial" fontWeight="normal" cursor="default">
            { note ?
              <tspan>
                { note.letter }
                { note.accidentals.length ?
                  <tspan baselineShift="super" dy="20" fontSize="50px">
                    { note.accidentals.map(x => x)}
                  </tspan>
                  : undefined
                }
              </tspan>
            :
            <tspan>
              { text }
            </tspan>
            }
          </text>
        : undefined}
      </g>
    </HtmlElement>
  )
}

export default NoteCircleSvg