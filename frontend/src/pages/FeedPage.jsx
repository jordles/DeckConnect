import CircleContainer from "../components/CircleContainer"
import BoxContainer from "../components/BoxContainer"
import './FeedPage.css'
import { US, ES } from 'country-flag-icons/react/3x2'
const FeedPage = () => {
  return (
    <div className="feed-page">
      <h1>Feed</h1>
      <header>
        <div className="languages">
          <CircleContainer>
            <div className="flag-circle">
              <US />  
            </div>
          </CircleContainer>
          <CircleContainer>
            <div className="flag-circle">
              <ES />
            </div>
          </CircleContainer>
        </div>
        <div className="updates">
          <BoxContainer>
            Day 2 Streak
          </BoxContainer>
        </div>
      </header>
      <main>

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