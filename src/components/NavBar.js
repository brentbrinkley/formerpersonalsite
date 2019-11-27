import React from "react"
import { Link } from "gatsby"
import "./Navbar.scss"

const Navbar = props => {
  return (
    <div className="navbar">
      <div className="container">
        <nav>
          <Link className="title" to={props.route}>
            {props.title}
          </Link>
          <Link className="title hidden" to={props.route}>
            {props.title}
          </Link>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
