import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BackgroundAnim from '../components/BackgroundAnim';
import './PracticeDeckPage.css';

const PracticeDeckPage = () => {
  const { deckId } = useParams();
  const navigate = useNavigate();

  // State for deck and practice session
  const [deck, setDeck] = useState(null);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [shuffledCards, setShuffledCards] = useState([]);

  // Load deck from localStorage
  useEffect(() => {
    const savedDecks = JSON.parse(localStorage.getItem('customDecks') || '[]');
    const foundDeck = savedDecks.find(d => d.id === parseInt(deckId));
    
    if (foundDeck && foundDeck.cards && foundDeck.cards.length > 0) {
      setDeck(foundDeck);
      
      // Shuffle cards for practice
      const shuffled = [...foundDeck.cards].sort(() => 0.5 - Math.random());
      setShuffledCards(shuffled);
    } else {
      // Redirect if no deck or no cards
      navigate('/custom-decks');
    }
  }, [deckId, navigate]);

  // Render media preview
  const renderMediaPreview = (media) => {
    if (!media) return null;

    const { type, src, name } = media;

    return (
      <div className="card-media-preview">
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

  // Handle card flip
  const handleCardFlip = () => {
    setIsFlipped(!isFlipped);
  };

  // Handle moving to next card
  const handleNextCard = () => {
    setIsFlipped(false);
    if (currentCardIndex < shuffledCards.length - 1) {
      setCurrentCardIndex(prev => prev + 1);
    } else {
      // End of deck, return to custom decks
      navigate('/custom-decks');
    }
  };

  // Render loading state
  if (!deck) return <div>Loading...</div>;

  const currentCard = shuffledCards[currentCardIndex];

  return (
    <BackgroundAnim color="green" outlineColor="yellow" title="Practice Deck">
      <div className="practice-deck-container">
        <div className="practice-navigation">
          <button onClick={() => navigate('/custom-decks')}>Back to Decks</button>
          <div className="card-progress">
            Card {currentCardIndex + 1} of {shuffledCards.length}
          </div>
        </div>

        <div 
          className={`practice-card ${isFlipped ? 'flipped' : ''}`}
          onClick={handleCardFlip}
        >
          <div className="card-inner">
            <div className="card-front">
              <div className="card-content">
                <h2>Question</h2>
                {renderMediaPreview(currentCard.Media)}
                <p>{currentCard.Question}</p>
                {currentCard.Transliteration && (
                  <p className="transliteration">{currentCard.Transliteration}</p>
                )}
              </div>
              <div className="card-hint">
                <p>Tap to flip</p>
              </div>
            </div>
            
            <div className="card-back">
              <div className="card-content">
                <h2>Answer</h2>
                {renderMediaPreview(currentCard.Media)}
                <p>{currentCard.Answer}</p>
              </div>
              <div className="card-actions">
                <button 
                  className="next-card-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNextCard();
                  }}
                >
                  Next Card
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BackgroundAnim>
  );
};

export default PracticeDeckPage;
