import { createReducer } from 'redux-act'
import * as actions from '../actions/scales'

const defaultState = {
  rootNoteId: '1.1', // C
  scaleTypeId: 'Major',
  isRootNotesMenuOpen: false,
  isScaleTypesMenuOpen: false,
  isScaleFinderMenuOpen: true,
}

const scales = createReducer({
  [actions.changeScaleRoot]: (state, rootNoteId) => ({
    ...state, rootNoteId,
  }),
  [actions.showRootNotesMenu]: (state) => ({
    ...state, isRootNotesMenuOpen: true,
  }),
  [actions.hideRootNotesMenu]: (state) => ({
    ...state, isRootNotesMenuOpen: false,
  }),
  [actions.toggleRootNotesMenu]: (state) => ({
    ...state, isRootNotesMenuOpen: !state.isRootNotesMenuOpen,
  }),
  [actions.changeScaleType]: (state, scaleTypeId) => ({
    ...state, scaleTypeId,
  }),
  [actions.showScaleTypesMenu]: (state) => ({
    ...state, isScaleTypesMenuOpen: true,
  }),
  [actions.hideScaleTypesMenu]: (state) => ({
    ...state, isScaleTypesMenuOpen: false,
  }),
  [actions.toggleScaleTypesMenu]: (state) => ({
    ...state, isScaleTypesMenuOpen: !state.isScaleTypesMenuOpen,
  }),
}, defaultState)

export default scales
