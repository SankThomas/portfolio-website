import Link from "next/link"
import React, { useState } from "react"
import { navbar } from "../data/navbar"

const Navbar = () => {
  const [items, setItems] = useState(navbar)
  return (
    <>
      <ul className="flex items-center">
        {items.map((item) => {
          const { id, title, path } = item
          return (
            <li
              key={id}
              className="py-1 px-4 m-1 bg-gray-100 border-2 border-gray-100 shadow-sm hover:bg-gray-300 transition-all duration-500 hover:border-gray-300"
            >
              <Link href={path}>
                <a>{title}</a>
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default Navbar
