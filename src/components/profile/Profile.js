import React, { useEffect } from "react"

// Components
import Main from "../inc/Main"

// Components
import { CardHeader } from "../reuse/Card"
import EditProfileForm from "./EditProfileForm"
import ChangePasswordForm from "./ChangePasswordForm"

const Profile = () => {
  useEffect(() => {
    document.title = "Apotek Natsepa - Profile"
  }, [])

  return (
    <Main>
      {/* Header */}
      <CardHeader
        icon='user'
        title='Profile'
        desc='Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit'
      />

      {/* Edit Profile */}
      <EditProfileForm />

      {/* Change Password */}
      <ChangePasswordForm />
    </Main>
  )
}

export default Profile
