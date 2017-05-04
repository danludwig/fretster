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

export const changeScale = createAction(
  'scales.changeScale', (rootNoteId, scaleTypeId) => ({rootNoteId, scaleTypeId}))

export const showScaleTypesMenu = createAction(
  'scales.showScaleTypesMenu')

export const hideScaleTypesMenu = createAction(
  'scales.hideScaleTypesMenu')

export const toggleScaleTypesMenu = createAction(
  'scales.toggleScaleTypesMenu')

export const showScaleFinderMenu = createAction(
  'scales.showScaleFinderMenu')

export const hideScaleFinderMenu = createAction(
  'scales.hideScaleFinderMenu')

export const toggleScaleFinderMenu = createAction(
  'scales.toggleScaleFinderMenu')

export const selectScaleFinderEnharmonicId = createAction(
  'scales.selectScaleFinderEnharmonicId', enharmonicId => (enharmonicId))

export const deselectScaleFinderEnharmonicId = createAction(
  'scales.deselectScaleFinderEnharmonicId', enharmonicId => (enharmonicId))
