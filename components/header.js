import React, { useState } from "react"
import Logo from "./logo"
import Navbar from "./navbar"
import Menubutton from "./menubutton"

const header = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <header className="flex items-center justify-between p-7 shadow-md">
        {!isOpen && <Logo />}

        {isOpen && (
          <nav>
            <Navbar />
          </nav>
        )}

        <div>
          <Menubutton isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </header>
    </>
  )
}

export default header
