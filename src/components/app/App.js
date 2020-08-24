import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import "../../assets/styles/tailwind.css"

// States
import LayoutState from "../../context/layout/LayoutState"

// Routes
import HomeRoute from "../routes/HomeRoute"
import ProfileRoute from "../routes/ProfileRoute"

const App = () => {
  return (
    <LayoutState>
      <Router>
        <Route exact component={HomeRoute} />
        <Route exact component={ProfileRoute} />
      </Router>
    </LayoutState>
  )
}

export default App
