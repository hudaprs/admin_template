import React, { useContext } from "react"

// Context
import LayoutContext from "../../context/layout/LayoutContext"

// Components
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"

const Main = ({ children }) => {
  const { isOpen } = useContext(LayoutContext)

  return (
    <>
      <Navbar />
      <Sidebar />

      <div
        className='overflow-hidden overflow-y-hidden transition-all duration-200 ease-in'
        style={{ marginLeft: isOpen ? "290px" : "0px" }}
      >
        <div className='mt-20 p-8'>{children}</div>
      </div>
    </>
  )
}

export default Main
