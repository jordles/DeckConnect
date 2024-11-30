import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BackgroundAnim from "../components/BackgroundAnim"
import './DecksPage.css'  
import DeckList from "../components/DeckList"
import GoogleIcon from "../components/GoogleIcon"
import SearchModal from "../components/SearchModal"

const DecksPage = () => {
  const navigate = useNavigate();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearch = (searchTerm, searchType) => {
    console.log(`Searching for ${searchTerm} in ${searchType}`);
    // TODO: Implement search functionality
    setIsSearchOpen(false);
  };

  return (
    <BackgroundAnim color="green" outlineColor="yellow" title="Decks">
      <div className="decks-page">
        <div className="left">
          <div onClick={() => navigate('/custom-decks')}>
            Custom Decks <GoogleIcon icon="add" size="32px"/>
          </div>
          <div>Premade Decks <GoogleIcon icon="add" size="32px"/></div>
          <div>Import Deck <GoogleIcon icon="add" size="32px"/></div>
          <div>Create Deck <GoogleIcon icon="add" size="32px"/></div>
          <div onClick={() => setIsSearchOpen(true)}>
            Search Deck <GoogleIcon icon="search" size="32px"/>
          </div>
        </div>
        <div className="right">
          <header>
            <div className="deck-selection">All Decks</div>
          </header>
          <main>
            <ul style={{ listStyleType: 'none' }}>
              <DeckList name="Deck 1" difficulty="Easy"/>
              <DeckList name="Deck 1" difficulty="Easy"/>
              <DeckList name="Deck 1" difficulty="Easy"/>
              <DeckList name="Deck 1" difficulty="Easy"/>
              <DeckList name="Deck 1" difficulty="Easy"/>
              <DeckList name="Deck 1" difficulty="Easy"/>
              <DeckList name="Deck 1" difficulty="Easy"/>
              <DeckList name="Deck 1" difficulty="Easy"/>
              <DeckList name="Deck 1" difficulty="Easy"/>
            </ul>
          </main>
        </div>
      </div>
      <SearchModal 
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSearch={handleSearch}
      />
    </BackgroundAnim>
  )
}

export default DecksPage