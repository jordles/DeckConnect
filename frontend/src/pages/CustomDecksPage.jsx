import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import BackgroundAnim from "../components/BackgroundAnim"
import './CustomDecksPage.css'
import GoogleIcon from "../components/GoogleIcon"

const CustomDecksPage = () => {
  const navigate = useNavigate();
  const [decks, setDecks] = useState(() => {
    // Initialize from localStorage, or empty array if no decks exist
    const savedDecks = localStorage.getItem('customDecks');
    return savedDecks ? JSON.parse(savedDecks) : [];
  });
  const [showNewDeckForm, setShowNewDeckForm] = useState(false);
  const [newDeckName, setNewDeckName] = useState('');
  const [newDeckLanguage, setNewDeckLanguage] = useState('');

  // Save decks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('customDecks', JSON.stringify(decks));
  }, [decks]);

  const handleCreateDeck = (e) => {
    e.preventDefault();
    if (newDeckName && newDeckLanguage) {
      const newDeck = {
        id: Date.now(),
        name: newDeckName,
        language: newDeckLanguage,
        cards: []
      };
      setDecks(prevDecks => [...prevDecks, newDeck]);
      setNewDeckName('');
      setNewDeckLanguage('');
      setShowNewDeckForm(false);
    }
  };

  const handleEditDeck = (deckId) => {
    navigate(`/edit-deck/${deckId}`);
  };

  const handlePracticeDeck = (deckId) => {
    navigate(`/practice-deck/${deckId}`);
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
                required
              />
              <input
                type="text"
                placeholder="Language"
                value={newDeckLanguage}
                onChange={(e) => setNewDeckLanguage(e.target.value)}
                required
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
                <p>{deck.cards ? deck.cards.length : 0} cards</p>
                <div className="deck-actions">
                  <button onClick={() => handleEditDeck(deck.id)}>Edit Cards</button>
                  <button 
                    onClick={() => handlePracticeDeck(deck.id)}
                    disabled={deck.cards.length === 0}
                  >
                    Practice
                  </button>
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
