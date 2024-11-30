import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import FeedPage from './pages/FeedPage'
import NavBar from './components/NavBar'
import DecksPage from './pages/DecksPage'
import FriendsPage from './pages/FriendsPage'
import CommunityPage from './pages/CommunityPage'
import LandingPage from './pages/LandingPage'
import CustomDecksPage from './pages/CustomDecksPage'
import PremadeDecksPage from './pages/PremadeDecksPage'
import EditDeckPage from './pages/EditDeckPage'
import PracticeDeckPage from './pages/PracticeDeckPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/decks" element={<DecksPage />} />
        <Route path="/custom-decks" element={<CustomDecksPage />} />
        <Route path="/edit-deck/:deckId" element={<EditDeckPage />} />
        <Route path="/premade-decks" element={<PremadeDecksPage />} />
        <Route path="/friends" element={<FriendsPage />} />
        <Route path="/practice-deck/:deckId" element={<PracticeDeckPage />} />
      </Routes>
      {/* <NavBar />  general navbar with conditional for home landing page */}
    </>
  )
}

export default App
