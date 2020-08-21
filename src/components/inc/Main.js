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
        style={{ marginLeft: isOpen ? "290px" : "0px", padding: "10px 20px" }}
      >
        <div className='mt-20'>{children}</div>
      </div>
    </>
  )
}

export default Main