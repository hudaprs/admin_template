import React, { useContext } from "react"

// Context
import LayoutContext from "../../context/layout/LayoutContext"

const Sidebar = () => {
  const { isOpen, toggleSidebar } = useContext(LayoutContext)

  return (
    <div
      className={`fixed bg-white top-0 left-0 border-r border-line h-full ${
        isOpen ? "w-full" : "w-0"
      } ${
        isOpen ? "md:w-sidebar" : "md:w-0"
      } overflow-auto border-b-0 z-10 transition-all duration-300 ease-in`}
    >
      {/* Sidebar Header */}
      <div className='bg-primary h-20 w-full flex justify-between md:justify-center px-6 items-center border-none relative'>
        <h3 className='text-xl text-center uppercase text-white font-bold'>
          Apotek Natsepa
        </h3>
        <span
          className='fas fa-times sm:block md:hidden cursor-pointer'
          style={{ color: "#fff" }}
          onClick={() => toggleSidebar(!isOpen)}
        ></span>
      </div>

      {/* Sidebar Content */}
      <ul className='m-6' id='sidebar'>
        <li className='sidebar-item'>
          <span className='sidebar-item-icon fas fa-chart-line'></span>
          <a href='#!'>Dashboard</a>
        </li>
        <li className='sidebar-item'>
          <div>
            <span className='sidebar-item-icon fas fa-edit'></span>
            <a href='#!'>Appointment</a>
          </div>
          <span className='fas fa-times'></span>
        </li>
        <li className='sidebar-item'>
          <span className='sidebar-item-icon fas fa-stethoscope'></span>
          <a href='#!'>Prescription</a>
        </li>
        <li className='sidebar-item'>
          <span className='sidebar-item-icon fas fa-users'></span>
          <a href='#!'>Patient</a>
        </li>
        <li className='sidebar-item'>
          <span className='sidebar-item-icon fas fa-bed'></span>
          <a href='#!'>Bed Allotment</a>
        </li>
        <li className='sidebar-item'>
          <span className='sidebar-item-icon fas fa-tint'></span>

          <a href='#!'>Blood Bank</a>
        </li>
        <li className='sidebar-item'>
          <span className='sidebar-item-icon fas fa-clipboard'></span>
          <a href='#!'>Report</a>
        </li>
        <li className='sidebar-item'>
          <span className='sidebar-item-icon fas fa-credit-card'></span>

          <a href='#!'>Payroll</a>
        </li>
        <li className='sidebar-item'>
          <span className='sidebar-item-icon fas fa-comments'></span>
          <a href='#!'>Message</a>
        </li>
        <li className='sidebar-item'>
          <span className='sidebar-item-icon fas fa-user'></span>
          <a href='#!'>Profile</a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
