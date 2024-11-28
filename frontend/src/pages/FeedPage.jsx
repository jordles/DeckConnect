import CircleContainer from "../components/CircleContainer"
import BoxContainer from "../components/BoxContainer"
import './FeedPage.css'
import {CircleFlag} from 'react-circle-flags'
import { useState } from "react"
const FeedPage = () => {

  const [openOptions, setOpenOptions] = useState(false);

  const handleProfileClick = () => {
    setOpenOptions(!openOptions);
  }
  return (
    <div className="feed-page">
      <header>
        <div className="languages">
          <CircleContainer>
            <CircleFlag countryCode="us" height="100%"/>
          </CircleContainer>
          <CircleContainer>
            <CircleFlag countryCode="es" height="100%"/>
          </CircleContainer>
        </div>
        <BoxContainer className="box-container updates" style={{padding: '10px'}}>
          🔥 Day 2 Streak 🔥
        </BoxContainer>
        <div className="profile-container">
          <button className="profile" onClick={handleProfileClick}>
            <CircleContainer style={{width: '126px', height: '126px'}}>
              <img src="https://via.placeholder.com/126" alt="Profile" />
            </CircleContainer>
          </button>
          <div className={`profile-options ${openOptions ? 'open' : ''}`}>
            <div>About</div>
            <div>Options</div>
            <div>Stats</div>
            <div>Logout</div>
          </div>
        </div>
        
      </header>
      <main>
        <div className="left">
          <div className="leaderboard">
              Leaderboard
          </div>
          <div className="continue-learning">
            <div>Continue Learning</div>
            <div>Deck Name</div>
          </div>
        </div>
        <div className="right">
          <BoxContainer>
            <div>Daily Double</div>
            <div>Theme</div>
            <div>Difficulty</div>
          </BoxContainer>
        </div>
      </main>
      <footer>
        <BoxContainer> Share </BoxContainer>
        <BoxContainer> Decks </BoxContainer>
        <BoxContainer> Friends </BoxContainer>
      </footer>
  </div>

  )
}

export default FeedPage