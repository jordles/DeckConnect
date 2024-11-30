import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './EditDeckPage.css';

const EditDeckPage = () => {
  const { deckId } = useParams();
  const navigate = useNavigate();

  // State for the entire deck and current card being edited
  const [deck, setDeck] = useState(null);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [editedCard, setEditedCard] = useState({
    Question: '',
    Answer: '',
    Transliteration: ''
  });
  const [savedCardAlert, setSavedCardAlert] = useState(false);

  // Load deck from localStorage on component mount
  useEffect(() => {
    const savedDecks = JSON.parse(localStorage.getItem('customDecks') || '[]');
    const foundDeck = savedDecks.find(d => d.id === parseInt(deckId));
    
    if (foundDeck) {
      // Ensure the deck has a cards array
      foundDeck.cards = foundDeck.cards || [];
      
      // If no cards, add a default card
      if (foundDeck.cards.length === 0) {
        foundDeck.cards.push({
          Question: 'Initial Question',
          Answer: 'Initial Answer',
          Transliteration: 'Initial Transliteration'
        });
      }
      
      setDeck(foundDeck);
      setEditedCard(foundDeck.cards[0]);
    } else {
      // Redirect if deck not found
      navigate('/custom-decks');
    }
  }, [deckId, navigate]);

  // Handle alert display
  useEffect(() => {
    if (savedCardAlert) {
      const timer = setTimeout(() => {
        setSavedCardAlert(false);
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, [savedCardAlert]);

  // Save changes to localStorage
  const saveDecksToLocalStorage = (updatedDecks) => {
    localStorage.setItem('customDecks', JSON.stringify(updatedDecks));
  };

  // Handle card navigation
  const handleNextCard = () => {
    if (deck && currentCardIndex < deck.cards.length - 1) {
      const newIndex = currentCardIndex + 1;
      setCurrentCardIndex(newIndex);
      setEditedCard(deck.cards[newIndex]);
    }
  };

  const handlePrevCard = () => {
    if (deck && currentCardIndex > 0) {
      const newIndex = currentCardIndex - 1;
      setCurrentCardIndex(newIndex);
      setEditedCard(deck.cards[newIndex]);
    }
  };

  // Update card in the deck
  const handleUpdateCard = () => {
    const savedDecks = JSON.parse(localStorage.getItem('customDecks') || '[]');
    const deckIndex = savedDecks.findIndex(d => d.id === deck.id);
    
    if (deckIndex !== -1) {
      // Update the specific card in the deck
      savedDecks[deckIndex].cards[currentCardIndex] = editedCard;
      
      // Save updated decks back to localStorage
      saveDecksToLocalStorage(savedDecks);
      
      // Update local state
      const updatedDeck = {...deck};
      updatedDeck.cards[currentCardIndex] = editedCard;
      setDeck(updatedDeck);

      // Show saved card alert
      setSavedCardAlert(true);
    }
  };

  // Add a new card to the deck
  const handleAddCard = () => {
    const newCard = {
      Question: 'New Question',
      Answer: 'New Answer',
      Transliteration: 'New Transliteration'
    };

    const savedDecks = JSON.parse(localStorage.getItem('customDecks') || '[]');
    const deckIndex = savedDecks.findIndex(d => d.id === deck.id);
    
    if (deckIndex !== -1) {
      // Add new card to the deck in localStorage
      savedDecks[deckIndex].cards.push(newCard);
      saveDecksToLocalStorage(savedDecks);
      
      // Update local state
      const updatedDeck = {...deck};
      updatedDeck.cards.push(newCard);
      setDeck(updatedDeck);
      setCurrentCardIndex(updatedDeck.cards.length - 1);
      setEditedCard(newCard);
    }
  };

  // Remove current card
  const handleRemoveCard = () => {
    if (deck.cards.length > 1) {
      const savedDecks = JSON.parse(localStorage.getItem('customDecks') || '[]');
      const deckIndex = savedDecks.findIndex(d => d.id === deck.id);
      
      if (deckIndex !== -1) {
        // Remove the card from the deck in localStorage
        savedDecks[deckIndex].cards.splice(currentCardIndex, 1);
        saveDecksToLocalStorage(savedDecks);
        
        // Update local state
        const updatedDeck = {...deck};
        updatedDeck.cards.splice(currentCardIndex, 1);
        
        // Adjust current card index
        const newIndex = Math.max(0, currentCardIndex - 1);
        setCurrentCardIndex(newIndex);
        setDeck(updatedDeck);
        setEditedCard(updatedDeck.cards[newIndex]);
      }
    }
  };

  // Handle input changes
  const handleInputChange = (field, value) => {
    setEditedCard(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Render loading state
  if (!deck) return <div>Loading...</div>;

  return (
    <div className="edit-deck-container">
      {/* Saved Card Alert */}
      {savedCardAlert && (
        <div className="saved-card-alert">
          Card Saved Successfully!
        </div>
      )}

      <div className="edit-deck-navigation">
        <button onClick={() => navigate('/custom-decks')}>Back to Decks</button>
        <div className="card-navigation">
          <button onClick={handlePrevCard} disabled={currentCardIndex === 0}>
            Previous Card
          </button>
          <span>Card {currentCardIndex + 1} of {deck.cards.length}</span>
          <button onClick={handleNextCard} disabled={currentCardIndex === deck.cards.length - 1}>
            Next Card
          </button>
        </div>
      </div>

      <div className="edit-deck-content">
        {/* Left Preview - Front of Card */}
        <div className="card-preview front-preview">
          <h3>Front of Card</h3>
          <div className="preview-content">
            <p>{editedCard.Question}</p>
            {editedCard.Transliteration && (
              <p className="transliteration">{editedCard.Transliteration}</p>
            )}
          </div>
        </div>

        {/* Middle - Text Editor */}
        <div className="card-editor">
          <h3>Edit Card</h3>
          <div className="editor-inputs">
            <label>
              Question:
              <textarea 
                value={editedCard.Question}
                onChange={(e) => handleInputChange('Question', e.target.value)}
                placeholder="Enter card question"
              />
            </label>
            <label>
              Transliteration:
              <textarea 
                value={editedCard.Transliteration}
                onChange={(e) => handleInputChange('Transliteration', e.target.value)}
                placeholder="Enter transliteration (optional)"
              />
            </label>
            <label>
              Answer:
              <textarea 
                value={editedCard.Answer}
                onChange={(e) => handleInputChange('Answer', e.target.value)}
                placeholder="Enter card answer"
              />
            </label>
          </div>
          <div className="editor-actions">
            <button onClick={handleUpdateCard}>Save Card</button>
            <button onClick={handleAddCard}>Add New Card</button>
            <button onClick={handleRemoveCard} disabled={deck.cards.length <= 1}>
              Remove Card
            </button>
          </div>
        </div>

        {/* Right Preview - Back of Card */}
        <div className="card-preview back-preview">
          <h3>Back of Card</h3>
          <div className="preview-content">
            <p>{editedCard.Answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditDeckPage;
