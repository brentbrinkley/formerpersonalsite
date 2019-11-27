import React from "react"
import Card from "./Card"
import Navbar from "./Navbar"
import "./Layout.scss"

const Layout = props => {
  return (
    <div className="main">
      <Card>
        <Navbar route={props.route} title={props.navTitle} />
        {props.children}
      </Card>
    </div>
  )
}

export default Layout
