import React, { useState } from 'react'
import { Link } from 'gatsby'
import './navbar.scss'

const NavBar = props => {
  return (
    <div className="navbar">
      <div className="container">
        <nav>
          <Link className="circle one" activeClassName="toggled" to="/"></Link>

          <Link
            className="circle two"
            activeClassName="toggled"
            to="/blog"
          ></Link>
        </nav>
      </div>
    </div>
  )
}

export default NavBar
