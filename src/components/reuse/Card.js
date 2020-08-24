import React, { Fragment } from "react"

export const CardHeader = ({ icon, title, desc, className }) => {
  return (
    <div
      className={`flex flex-col xl:flex-row border border-line p-8 bg-white ${className} mb-8`}
    >
      {/* Icon & Text */}
      <div className='flex w-full xl:w-1/2'>
        <span
          className={`fas fa-${icon} fa-2x mr-4 bg-primary text-white rounded p-4`}
        ></span>
        <div className='flex flex-col justify-between'>
          <h3 className='font-bold text-2xl'>{title}</h3>
          <p className='hidden xl:block text-sm'>{desc}</p>
        </div>
      </div>

      {/* BreadCrumb */}
      <div className='flex w-full xl:w-1/2 justify-end items-end text-xs'>
        <span className='fas fa-home' style={{ marginBottom: "2px" }}></span>
        <p>{" / "}Icons </p>
        <p> / Font Awesome</p>
      </div>
    </div>
  )
}

export const CardContent = ({ title, className, children }) => {
  return (
    <Fragment>
      {/* Content */}
      <div className={`border border-line p-8 bg-white ${className}`}>
        {/* Content-Header */}
        <div className='font-bold text-2xl border-b border-gray-400 pb-4 w-full'>
          {title}
        </div>

        <div className='mt-8'>{children}</div>
      </div>
    </Fragment>
  )
}
