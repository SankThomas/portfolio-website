import React, { useState } from "react"
import Layout from "./layout"
import Logo from "./logo"
import Navbar from "./navbar"
import Menubutton from "./menubutton"

const header = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Layout>
      <header className="flex items-center justify-between p-5 shadow-md">
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
    </Layout>
  )
}

export default header
