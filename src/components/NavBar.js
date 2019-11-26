import React from "react"
import { Link } from "gatsby"
import "./Navbar.scss"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <nav>
          <Link className="title" to="/">
            start
          </Link>
          {/*<ul className="navlinks">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="">Blog</Link>
            </li>
          </ul> */}
        </nav>
      </div>
    </div>
  )
}

export default Navbar
