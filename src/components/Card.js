import React from "react"
import "./card.scss"
import { useSpring, animated } from "react-spring"

const Card = props => {
  // const fade = useSpring({
  //   config: { mass: 100, tension: 120, friction: 14, clamp: true },
  //   from: {
  //     boxShadow: "0px 0px 0px 0px rgba(0, 0, 0, 0.068)",
  //     backgroundColor: "#eae8e6",
  //     visibility: "hidden",
  //   },
  //   to: {
  //     boxShadow: "20px 30px 30px 30px rgba(0, 0, 0, 0.068)",
  //     backgroundColor: "white",
  //     visibility: "visible",
  //   },
  // })

  return <div className="card">{props.children}</div>
}

export default Card
