import CircleContainer from "../components/CircleContainer"
import BoxContainer from "../components/BoxContainer"
import './FeedPage.css'
import {CircleFlag} from 'react-circle-flags'
import { useState} from "react"
import BackgroundAnim from "../components/BackgroundAnim"
import ProfileCard from "../components/ProfileCard"
import { useNavigate } from 'react-router-dom'

const FeedPage = () => {

  const navigate = useNavigate();

  const [openOptions, setOpenOptions] = useState(false);

  const handleProfileClick = () => {
    setOpenOptions(!openOptions);
  }
  return (
    <>
    
    <BackgroundAnim color="blue" title="Feed" showTitle={false}>
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
            <ProfileCard size="130px"/>
          </button>
          <div className={`profile-options ${openOptions ? 'open' : ''}`}>
            <div>About</div>
            <div>Options</div>
            <div>Stats</div>
            <div onClick ={() => navigate('/')}>Logout</div>
          </div>
        </div>
        
      </header>
      <main>
        <div className="left">
          <BoxContainer className="leaderboard">
              Leaderboard
          </BoxContainer>
          <BoxContainer className="continue-learning">
            <div>Continue Learning</div>
            <div>Deck Name</div>
          </BoxContainer>
        </div>
        <div className="right">
          <BoxContainer style={{height: '100%'}}>
            <div>Daily Double</div>
            <div>Theme</div>
            <div>Difficulty</div>
          </BoxContainer>
        </div>
      </main>
      <footer>
        <BoxContainer onClick={() => navigate('/share')}> Share </BoxContainer>
        <BoxContainer onClick={() => navigate('/decks')}> Decks </BoxContainer>
        <BoxContainer onClick={() => navigate('/friends')}> Friends </BoxContainer>
      </footer>
    </div>
    </BackgroundAnim>
    </>
  )
}

export default FeedPage