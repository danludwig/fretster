import { createReducer } from 'redux-act'
import * as actions from '../actions/scales'

const defaultState = {
  rootNoteId: '1.1', // C
  scaleTypeId: 'Major',
  isRootNotesMenuOpen: false,
  isScaleTypesMenuOpen: false,
  isScaleFinderMenuOpen: false,
  scaleFinderSelectedEnharmonicIds: [],
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
  [actions.changeScale]: (state, { rootNoteId, scaleTypeId }) => ({
    ...state, rootNoteId, scaleTypeId
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
  [actions.showScaleFinderMenu]: (state) => ({
    ...state, isScaleFinderMenuOpen: true,
  }),
  [actions.hideScaleFinderMenu]: (state) => ({
    ...state, isScaleFinderMenuOpen: false,
  }),
  [actions.toggleScaleFinderMenu]: (state) => ({
    ...state, isScaleFinderMenuOpen: !state.isScaleFinderMenuOpen,
  }),
  [actions.selectScaleFinderEnharmonicId]: (state, enharmonicId) => {
    const last = state.scaleFinderSelectedEnharmonicIds
    last.push(enharmonicId)
    const scaleFinderSelectedEnharmonicIds = last
      .filter((value, index, self) => self.indexOf(value) === index)
      .sort()
    return {
      ...state,
      scaleFinderSelectedEnharmonicIds
    }
  },
  [actions.deselectScaleFinderEnharmonicId]: (state, enharmonicId) => {
    const last = state.scaleFinderSelectedEnharmonicIds
    const scaleFinderSelectedEnharmonicIds = []
    for (let id of last) {
      if (id !== enharmonicId) scaleFinderSelectedEnharmonicIds.push(id)
    }
    scaleFinderSelectedEnharmonicIds.sort()
    return {
      ...state,
      scaleFinderSelectedEnharmonicIds
    }
  },
}, defaultState)

export default scales
