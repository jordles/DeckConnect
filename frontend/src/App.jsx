import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import FeedPage from './pages/FeedPage'
import NavBar from './components/NavBar'
import DecksPage from './pages/DecksPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/feed" element={<FeedPage />} />
        <Route path='/decks' element={<DecksPage />} />
      </Routes>
      {/* <NavBar />  general navbar with conditional for home landing page */}
    </>
  )
}

export default App
