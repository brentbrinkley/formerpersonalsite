import React, { useState } from 'react'
import { Link } from 'gatsby'
import { useSpring, animated } from 'react-spring'
import './navbar.scss'

const NavBar = props => {
  const fillIn = useSpring({
    from: { opacity: 1 },
    to: { opacity: 0.2 },
  })

  return (
    <div className="navbar">
      <div className="container">
        <nav>
          <Link
            className="circle one"
            style={fillIn}
            activeClassName="toggled"
            to="/"
          />

          <Link className="circle two" activeClassName="toggled" to="/blog" />
        </nav>
      </div>
    </div>
  )
}

export default NavBar
