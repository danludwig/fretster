import { createReducer } from 'redux-act'
import { changeScale, changeTonic } from '../actions/scales'

const defaultState = {
  tonicNoteId: '1.0', // C
  scale: 'Major'
}

const scales = createReducer({
  [changeTonic]: (state, tonicNoteId) => {
    return {
      ...state, tonicNoteId,
    }
  },
  [changeScale]: (state, scale) => {
    return {
      ...state, scale,
    }
  },
}, defaultState);

export default scales;
