import React from 'react'
import { Link } from 'gatsby'
import HomeIcon from './../../content/assets/home.svg'
import './navbar.scss'

const NavBar = props => {
  return (
    <div className="navbar">
      <div className="container">
        <nav>
          <Link className="title" to={props.route}>
            home
          </Link>
        </nav>
      </div>
    </div>
  )
}

export default NavBar
