import { TOGGLE_SIDEBAR } from "./LayoutType"

export default (state, { type, payload }) => {
  switch (type) {
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        isOpen: !state.isOpen
      }
    default:
      return state
  }
}
