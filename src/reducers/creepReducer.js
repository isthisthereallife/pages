export const CREEP_EVENTS = {
  APPEAR: 'hello',
  PURGE: 'purge',
  UPDATE: 'update',
}

export function creepReducer(state, action) {
  let newState = state
  switch (action.type) {
    case CREEP_EVENTS.APPEAR: {
      newState = action.payload
      break
    }
    case CREEP_EVENTS.PURGE: {
      newState = null
      break
    }
    case CREEP_EVENTS.UPDATE: {
      newState = action.payload
      break
    }
    default:
      return {
        newState
      }
  }
  return newState
}
export default creepReducer