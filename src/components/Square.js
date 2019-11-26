import React from "react"

const Square = props => (
  <div style={{ ...props.mystyle, position: "fixed", zIndex: -1000 }}></div>
)

export default Square
