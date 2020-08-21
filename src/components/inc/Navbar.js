import React, { useContext } from "react"

// Context
import LayoutContext from "../../context/layout/LayoutContext"

const Navbar = () => {
  const { isOpen, toggleSidebar } = useContext(LayoutContext)

  return (
    <nav
      className='bg-white border-b border-line w-full px-6 overflow-visible fixed'
      id='navbar'
    >
      <div
        className='flex h-20 justify-between items-center py-2 transition-all duration-200 ease-in'
        style={{ marginLeft: isOpen ? "290px" : "0px" }}
      >
        <span
          className='fas fa-bars cursor-pointer'
          onClick={() => toggleSidebar(!isOpen)}
        ></span>

        <ul className='flex'>
          <li className='ml-6'>
            <a href='#!'>English</a>
          </li>
          <li className='ml-6'>
            <a href='#!'>
              <span className='fas fa-bell relative'>
                <span
                  className='bg-red-700 rounded-full h-2 w-2 absolute bottom-0 right-0'
                  style={{ top: "-8px" }}
                ></span>
              </span>
            </a>
          </li>
          <li className='ml-6'>
            <div className='dropdown-profile relative'>
              <button
                type='button'
                className='border-none outline-none'
                style={{ outlineColor: "white" }}
              >
                John Doe
              </button>
              <div
                className='absolute flex flex-col justify-between items-center rounded bg-primary text-white p-6 h-64 w-64 transition duration-200 mt-3 dropdown-profile-box shadow-2xl'
                style={{ right: "0" }}
              >
                {/* User Photo Profile */}
                <span className='fas fa-user fa-6x text-white'></span>
                {/* Actions */}
                <div className='mr-2 w-full flex justify-between'>
                  <a
                    href='#!'
                    className='border p-2 transition duration-300 ease-in-out hover:text-primary hover:bg-white'
                  >
                    Profile
                  </a>
                  <a
                    href='#!'
                    className='border p-2 transition duration-300 ease-in-out hover:text-primary hover:bg-white'
                  >
                    Logout
                  </a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
