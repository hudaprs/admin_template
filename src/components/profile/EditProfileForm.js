import React, { useState, useRef } from "react"

// Components
import { CardContent } from "../reuse/Card"

// Icons
import UserIcon from "../../assets/img/user.svg"

const EditProfileForm = () => {
  const [image, setImage] = useState(null)
  const imageInputRef = useRef()

  const onChooseImage = (e) => {
    e.preventDefault()
    imageInputRef.current.click()
  }

  const onImageChange = (e) => {
    if (imageInputRef.current.files[0]) {
      let reader = new FileReader()

      reader.onload = (e) => {
        setImage(e.target.result)
      }
      reader.readAsDataURL(imageInputRef.current.files[0])
    }
  }

  return (
    <CardContent title='Edit Profile'>
      <form action='#'>
        <div className='form-group'>
          <label htmlFor='name' className='form-label'>
            Name
          </label>
          <input type='text' className='form-control' />
        </div>

        <div className='form-group'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input type='email' className='form-control' />
        </div>

        <div className='form-group'>
          <label htmlFor='address' className='form-label'>
            Address
          </label>
          <textarea
            className='form-control'
            style={{ height: "128px" }}
          ></textarea>
        </div>

        <div className='form-group'>
          <label htmlFor='phone' className='form-label'>
            Phone
          </label>
          <input type='text' className='form-control' />
        </div>

        <div className='form-group'>
          <label htmlFor='image' className='form-label'>
            Image
          </label>

          {/* Image Box */}
          <div>
            <div className='image-box'>
              <img
                src={image ? image : UserIcon}
                className='text-center'
                alt='Default display from flaticon'
              ></img>
            </div>
            <input
              ref={imageInputRef}
              type='file'
              className='hidden'
              onChange={onImageChange}
            />

            <button type='button' className='btn mt-4' onClick={onChooseImage}>
              Choose Image
            </button>
          </div>
        </div>

        <div className='form-group'>
          <button className='btn btn-success parallel'>
            <span className='fas fa-check text-white'></span> Update
          </button>
        </div>
      </form>
    </CardContent>
  )
}

export default EditProfileForm
