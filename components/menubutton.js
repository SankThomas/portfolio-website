import React from "react"
import { FaBars } from "react-icons/fa"
import { GrClose } from "react-icons/gr"

const menubutton = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <div>
        {isOpen ? (
          <button
            onClick={() => setIsOpen(false)}
            className="shadow-md text-3xl p-2 rounded"
          >
            <GrClose />
          </button>
        ) : (
          <button
            onClick={() => setIsOpen(true)}
            className="shadow-md text-3xl p-2 rounded"
          >
            <FaBars />
          </button>
        )}
      </div>
    </>
  )
}

export default menubutton
