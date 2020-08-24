import React from "react"
import { Switch, Route } from "react-router-dom"

// Components
import Profile from "../profile/Profile"

const ProfileRoute = () => {
  return (
    <Switch>
      <Route exact path='/profile' component={Profile} />
    </Switch>
  )
}

export default ProfileRoute
