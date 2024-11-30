import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaImage, FaMusic, FaVideo, FaTimes } from 'react-icons/fa';
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
    Transliteration: '',
    Media: null
  });
  const [savedCardAlert, setSavedCardAlert] = useState(false);

  // Refs for file inputs
  const imageInputRef = useRef(null);
  const audioInputRef = useRef(null);
  const videoInputRef = useRef(null);

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
          Transliteration: 'Initial Transliteration',
          Media: null
        });
      }
      
      setDeck(foundDeck);
      setEditedCard(foundDeck.cards[0]);
    } else {
      // Redirect if deck not found
      navigate('/custom-decks');
    }
  }, [deckId, navigate]);

  // Handle media file upload
  const handleMediaUpload = (e, mediaType) => {
    const file = e.target.files[0];
    if (file) {
      // Create a FileReader to convert file to base64
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditedCard(prev => ({
          ...prev,
          Media: {
            type: mediaType,
            src: reader.result,
            name: file.name
          }
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Remove media from card
  const handleRemoveMedia = () => {
    setEditedCard(prev => ({
      ...prev,
      Media: null
    }));
  };

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
      Transliteration: 'New Transliteration',
      Media: null
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

  // Render media preview
  const renderMediaPreview = () => {
    if (!editedCard.Media) return null;

    const { type, src, name } = editedCard.Media;

    return (
      <div className="media-preview">
        <button 
          className="remove-media-btn" 
          onClick={handleRemoveMedia}
        >
          <FaTimes />
        </button>
        {type === 'image' && (
          <img src={src} alt={name} className="media-preview-img" />
        )}
        {type === 'audio' && (
          <audio controls src={src} className="media-preview-audio">
            Your browser does not support the audio element.
          </audio>
        )}
        {type === 'video' && (
          <video controls src={src} className="media-preview-video">
            Your browser does not support the video element.
          </video>
        )}
      </div>
    );
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
            {renderMediaPreview()}
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

          {/* Media Upload Buttons */}
          <div className="media-upload-section">
            <input 
              type="file" 
              ref={imageInputRef}
              accept="image/*"
              style={{ display: 'none' }}
              onChange={(e) => handleMediaUpload(e, 'image')}
            />
            <input 
              type="file" 
              ref={audioInputRef}
              accept="audio/*"
              style={{ display: 'none' }}
              onChange={(e) => handleMediaUpload(e, 'audio')}
            />
            <input 
              type="file" 
              ref={videoInputRef}
              accept="video/*"
              style={{ display: 'none' }}
              onChange={(e) => handleMediaUpload(e, 'video')}
            />
            <div className="media-upload-buttons">
              <button 
                onClick={() => imageInputRef.current.click()}
                className="upload-image-btn"
              >
                <FaImage /> Upload Image
              </button>
              <button 
                onClick={() => audioInputRef.current.click()}
                className="upload-audio-btn"
              >
                <FaMusic /> Upload Audio
              </button>
              <button 
                onClick={() => videoInputRef.current.click()}
                className="upload-video-btn"
              >
                <FaVideo /> Upload Video
              </button>
            </div>
          </div>
        </div>

        {/* Right Preview - Back of Card */}
        <div className="card-preview back-preview">
          <h3>Back of Card</h3>
          <div className="preview-content">
            {renderMediaPreview()}
            <p>{editedCard.Answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditDeckPage;
