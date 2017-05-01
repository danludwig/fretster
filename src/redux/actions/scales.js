import { createAction } from 'redux-act'

export const changeScaleRoot = createAction(
  'scales.changeScaleRoot', rootNoteId => (rootNoteId))

export const showRootNotesMenu = createAction(
  'scales.showRootNotesMenu')

export const hideRootNotesMenu = createAction(
  'scales.hideRootNotesMenu')

export const toggleRootNotesMenu = createAction(
  'scales.toggleRootNotesMenu')

export const changeScaleType = createAction(
  'scales.changeScaleType', scaleTypeId => (scaleTypeId))

export const showScaleTypesMenu = createAction(
  'scales.showScaleTypesMenu')

export const hideScaleTypesMenu = createAction(
  'scales.hideScaleTypesMenu')

export const toggleScaleTypesMenu = createAction(
  'scales.toggleScaleTypesMenu')
