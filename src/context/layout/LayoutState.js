import React, { useReducer } from "react"
import LayoutReducer from "./LayoutReducer"
import LayoutContext from "./LayoutContext"

import { TOGGLE_SIDEBAR } from "./LayoutType"

const LayoutState = ({ children }) => {
  const initialState = {
    isOpen: true
  }

  const [state, dispatch] = useReducer(LayoutReducer, initialState)

  const toggleSidebar = () => {
    dispatch({ type: TOGGLE_SIDEBAR })
  }

  const { isOpen } = state

  return (
    <LayoutContext.Provider value={{ isOpen, toggleSidebar }}>
      {children}
    </LayoutContext.Provider>
  )
}

export default LayoutState
