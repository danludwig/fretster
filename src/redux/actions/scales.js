import { createAction } from 'redux-act'

export const changeScaleRoot = createAction(
  'scales.changeScaleRoot', rootNoteId => (rootNoteId))

export const changeScaleType = createAction(
  'scales.changeScaleType', scaleTypeId => (scaleTypeId))

export const showRootNotesMenu = createAction(
  'scales.showRootNotesMenu')

export const hideRootNotesMenu = createAction(
  'scales.hideRootNotesMenu')

export const toggleRootNotesMenu = createAction(
  'scales.toggleRootNotesMenu')
