import { CHANNEL_SELECTED } from '../actions'

export default function(state, action) {
  if(state === undefined) {
    return [];
  }

  switch (action.type) {
    case CHANNEL_SELECTED:
      return action.payload
    default:
      return state;
  }
}
