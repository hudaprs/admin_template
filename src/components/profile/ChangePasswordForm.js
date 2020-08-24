import React from "react"

// Components
import { CardContent } from "../reuse/Card"

const ChangePasswordForm = () => {
  return (
    <CardContent title='Change Password' className='mt-8'>
      <div className='form-group '>
        <label htmlFor='oldPassword' className='form-label'>
          Old Password
        </label>
        <input type='password' className='form-control' />
      </div>

      <div className='form-group '>
        <label htmlFor='newPassword' className='form-label'>
          New Password
        </label>
        <input type='password' className='form-control' />
      </div>

      <div className='form-group '>
        <label htmlFor='confirmNewPassword' className='form-label'>
          Confirm New Password
        </label>
        <input type='password' className='form-control' />
      </div>

      <div className='form-group'>
        <button className='btn btn-success' style={{ marginLeft: "25%" }}>
          <span className='fas fa-check text-white'></span> Update
        </button>
      </div>
    </CardContent>
  )
}

export default ChangePasswordForm
