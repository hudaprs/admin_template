import React from "react"
import { Switch, Route } from "react-router-dom"

// Components
import Home from "../home/Home"

const HomeRoute = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
    </Switch>
  )
}

export default HomeRoute
