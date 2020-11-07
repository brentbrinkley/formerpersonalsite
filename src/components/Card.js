import React from 'react'
import './card.scss'
import { useSpring, animated } from 'react-spring'

const Card = props => {
    return <div className="card">{props.children}</div>
}

export default Card
