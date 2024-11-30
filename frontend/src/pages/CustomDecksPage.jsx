import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEdit, FaTrash, FaPlay } from 'react-icons/fa';
import BackgroundAnim from "../components/BackgroundAnim"
import GoogleIcon from "../components/GoogleIcon"
import './CustomDecksPage.css';

const CustomDecksPage = () => {
  const navigate = useNavigate();
  const [customDecks, setCustomDecks] = useState([]);

  // Load custom decks from localStorage
  const loadCustomDecks = () => {
    const savedDecks = JSON.parse(localStorage.getItem('customDecks') || '[]');
    setCustomDecks(savedDecks);
  };

  // Initial load and set up storage event listener
  useEffect(() => {
    // Load decks initially
    loadCustomDecks();

    // Listen for storage changes (useful for cross-tab synchronization)
    const handleStorageChange = (e) => {
      if (e.key === 'customDecks') {
        loadCustomDecks();
      }
    };

    // Add event listener for storage changes
    window.addEventListener('storage', handleStorageChange);

    // Cleanup listener
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  // Create a new deck
  const handleCreateNewDeck = () => {
    const newDeck = {
      id: Date.now(), // Use timestamp as unique ID
      name: `Custom Deck ${customDecks.length + 1}`,
      cards: [
        {
          Question: 'Initial Question',
          Answer: 'Initial Answer',
          Transliteration: 'Initial Transliteration'
        }
      ]
    };

    const updatedDecks = [...customDecks, newDeck];
    localStorage.setItem('customDecks', JSON.stringify(updatedDecks));
    setCustomDecks(updatedDecks);
    
    // Navigate to edit the new deck
    navigate(`/edit-deck/${newDeck.id}`);
  };

  // Edit an existing deck
  const handleEditDeck = (deckId) => {
    navigate(`/edit-deck/${deckId}`);
  };

  // Practice a deck
  const handlePracticeDeck = (deckId) => {
    navigate(`/practice-deck/${deckId}`);
  };

  // Delete a deck
  const handleDeleteDeck = (deckIdToDelete) => {
    const updatedDecks = customDecks.filter(deck => deck.id !== deckIdToDelete);
    localStorage.setItem('customDecks', JSON.stringify(updatedDecks));
    setCustomDecks(updatedDecks);
  };

  return (
    <BackgroundAnim color="green" outlineColor="yellow" title="Custom Decks">
      <div className="custom-decks-container">
        <h1>My Custom Decks</h1>
        
        <button 
          className="create-deck-btn" 
          onClick={handleCreateNewDeck}
        >
          Create New Deck <GoogleIcon icon="add" size="32px"/>
        </button>

        {customDecks.length === 0 ? (
          <div className="no-decks-message">
            <p>You haven't created any custom decks yet.</p>
            <p>Click "Create New Deck" to get started!</p>
          </div>
        ) : (
          <div className="decks-grid">
            {customDecks.map((deck) => (
              <div key={deck.id} className="deck-card">
                <h2>{deck.name}</h2>
                <p>{deck.cards ? deck.cards.length : 0} Cards</p>
                <div className="deck-actions">
                  <button 
                    className="practice-btn" 
                    onClick={() => handlePracticeDeck(deck.id)}
                    disabled={!deck.cards || deck.cards.length === 0}
                  >
                    <FaPlay /> Practice
                  </button>
                  <button 
                    className="edit-btn" 
                    onClick={() => handleEditDeck(deck.id)}
                  >
                    <FaEdit /> Edit
                  </button>
                  <button 
                    className="delete-btn" 
                    onClick={() => handleDeleteDeck(deck.id)}
                  >
                    <FaTrash /> Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </BackgroundAnim>
  );
};

export default CustomDecksPage;
