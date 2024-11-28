import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import FeedPage from './pages/FeedPage'
import NavBar from './components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/feed" element={<FeedPage />} />
      </Routes>
      <NavBar />
    </>
  )
}

export default App
