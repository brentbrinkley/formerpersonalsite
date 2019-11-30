import React from 'react'
import Card from './Card'
import NavBar from './NavBar'
import './layout.scss'

const Layout = props => {
  return (
    <div className="main">
      <Card>
        <NavBar route={props.route} title={props.navTitle} />
        {props.children}
      </Card>
    </div>
  )
}

export default Layout
