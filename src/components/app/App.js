import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import "../../assets/styles/tailwind.css"

// States
import LayoutState from "../../context/layout/LayoutState"

// Routes
import HomeRoute from "../routes/HomeRoute"

const App = () => {
  return (
    <LayoutState>
      <Router>
        <Route exact component={HomeRoute} />
      </Router>
    </LayoutState>
  )
}

export default App
