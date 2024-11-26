import React from 'react'
import './CircleContainer.css'
const CircleContainer = ({children, style}) => {
  return (
    <div className="circle-container" style={style}>
      {children}
    </div>
  )
}

export default CircleContainer