import React, { Component } from 'react'
import NECK from '../constants/neck.js'
import neck from '../functions/neck.js'
import FingerboardDefs from './NeckSvg/FingerboardDefs'
import FingerboardG from './NeckSvg/FingerboardG'
import FretDefs from './NeckSvg/FretDefs'
import FretsG from './NeckSvg/FretsG'
import InlayDefs from './NeckSvg/InlayDefs'
import InlaysG from './NeckSvg/InlaysG'
import StringDefs from './NeckSvg/StringDefs'
import StringsG from './NeckSvg/StringsG'

const scaleUnit = 'mm'
const scaleLength = 648
const fretCount = 24
const nutThickness = 5
const fretThickness = 1
const neckWidth = 44
const fingerboardMargin = 4
const fingerboardLength = neck.distanceFromFretToNut(scaleLength, fretCount)
                            + fingerboardMargin
const inlays = {
  [`${NECK.INLAY_LOCATION.MIDDLE}`]: [3, 5, 7, 9, 15, 17, 19, 21],
  [`${NECK.INLAY_LOCATION.LOW}`]: [12, 24],
  [`${NECK.INLAY_LOCATION.HIGH}`]: [12, 24],
}

const strings = [
  { number: 6, gaugeWidth: 1, windingWidth: 0.6 },
  { number: 5, gaugeWidth: 0.85, windingWidth: 0.7 },
  { number: 4, gaugeWidth: 0.7, windingWidth: 0.8 },
  { number: 3, gaugeWidth: 0.5, },
  { number: 2, gaugeWidth: 0.3, },
  { number: 1, gaugeWidth: 0.2, },
]

const neckSpace = {
  north: 0,
  south: 0,
  east: 0,
  west: 0
}
const orientation = NECK.ORIENTATION.VERTICAL // HORIZONTAL VERTICAL
const handedness = NECK.HANDEDNESS.RIGHT // RIGHT LEFT

const svgWidth = ((orientation === NECK.ORIENTATION.VERTICAL)
  ? neckWidth : fingerboardLength + nutThickness) + neckSpace.east + neckSpace.west
const svgHeight = ((orientation == NECK.ORIENTATION.VERTICAL) ? fingerboardLength + nutThickness : neckWidth) + neckSpace.north + neckSpace.south

const fingerboardProps = {
  orientation, handedness, neckWidth, fingerboardLength, nutThickness, neckSpace,
  fretThickness, scaleLength, fretCount, inlays, strings
}

class NeckSvg extends Component {
  render() {

    return (<div>
      <svg width={`${svgWidth}${scaleUnit}`}
           height={`${svgHeight}${scaleUnit}`}
           viewBox={`0, 0, ${svgWidth}, ${svgHeight}`}>

        <FingerboardDefs {...fingerboardProps} />
        <FingerboardG {...fingerboardProps} />

        <FretDefs {...fingerboardProps} />
        <FretsG {...fingerboardProps} />

        <InlayDefs {...fingerboardProps} />
        <InlaysG {...fingerboardProps} />

        <StringDefs {...fingerboardProps} />
        <StringsG {...fingerboardProps} />
      </svg>
    </div>)
  }
}

export default NeckSvg
