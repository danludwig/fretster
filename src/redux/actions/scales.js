import { createAction } from 'redux-act'

export const changeTonic = createAction('scales.changeTonic', tonicNoteId => (tonicNoteId))

export const changeScale = createAction('scales.changeScale', scale => (scale))
