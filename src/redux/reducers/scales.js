import { createReducer } from 'redux-act'
import * as actions from '../actions/scales'

const defaultState = {
  rootNoteId: '1.0', // C
  scaleTypeId: 'Major',
  isRootNotesMenuOpen: false,
}

const scales = createReducer({
  [actions.changeScaleRoot]: (state, rootNoteId) => ({
    ...state, rootNoteId,
  }),
  [actions.changeScaleType]: (state, scaleTypeId) => ({
    ...state, scaleTypeId,
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
}, defaultState);

export default scales;
