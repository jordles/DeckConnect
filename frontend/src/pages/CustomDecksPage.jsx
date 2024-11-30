import { useState } from 'react'
import BackgroundAnim from "../components/BackgroundAnim"
import './CustomDecksPage.css'
import GoogleIcon from "../components/GoogleIcon"

const CustomDecksPage = () => {
  const [decks, setDecks] = useState([]);
  const [showNewDeckForm, setShowNewDeckForm] = useState(false);
  const [newDeckName, setNewDeckName] = useState('');
  const [newDeckLanguage, setNewDeckLanguage] = useState('');

  const handleCreateDeck = (e) => {
    e.preventDefault();
    if (newDeckName && newDeckLanguage) {
      setDecks([...decks, {
        id: Date.now(),
        name: newDeckName,
        language: newDeckLanguage,
        cards: []
      }]);
      setNewDeckName('');
      setNewDeckLanguage('');
      setShowNewDeckForm(false);
    }
  };

  return (
    <BackgroundAnim color="green" outlineColor="yellow" title="Custom Decks">
      <div className="custom-decks-page">
        <header>
          <button 
            className="create-deck-btn"
            onClick={() => setShowNewDeckForm(true)}
          >
            Create New Deck <GoogleIcon icon="add" size="32px"/>
          </button>
        </header>

        {showNewDeckForm && (
          <div className="new-deck-form">
            <form onSubmit={handleCreateDeck}>
              <input
                type="text"
                placeholder="Deck Name"
                value={newDeckName}
                onChange={(e) => setNewDeckName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Language"
                value={newDeckLanguage}
                onChange={(e) => setNewDeckLanguage(e.target.value)}
              />
              <div className="form-buttons">
                <button type="submit">Create</button>
                <button 
                  type="button" 
                  onClick={() => setShowNewDeckForm(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        <main>
          <div className="decks-grid">
            {decks.map(deck => (
              <div key={deck.id} className="deck-card">
                <h3>{deck.name}</h3>
                <p>{deck.language}</p>
                <p>{deck.cards.length} cards</p>
                <div className="deck-actions">
                  <button>Edit Cards</button>
                  <button>Practice</button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </BackgroundAnim>
  )
}

export default CustomDecksPage
