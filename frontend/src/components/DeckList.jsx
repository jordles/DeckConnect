import React from 'react'
import './DeckList.css'
import GoogleIcon from './GoogleIcon'
import { useState } from 'react'

const DeckList = ({name, difficulty}) => {
  const [openOptions, setOpenOptions] = useState(false);
  
  const handleOptions = () => {
    setOpenOptions(!openOptions);
  }

  return (
    <div className="deck-list">
      <li><span>{name}</span><span>{difficulty}</span></li>
      <div className = "progress"></div>
      <GoogleIcon icon = "settings" onClick={handleOptions} color= "green"/>
      <div className={`options ${openOptions ? 'open' : ''}`}>
        <GoogleIcon icon = "edit" onClick={() => console.log("edit")}/>
        <GoogleIcon icon = "delete" onClick={() => console.log("delete")}/>
      </div>
    </div>
  )
}

export default DeckList