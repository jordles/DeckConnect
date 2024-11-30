import { useState } from 'react';
import BackgroundAnim from "../components/BackgroundAnim";
import { russianDeck } from '../data/russianDeck';
import GoogleIcon from "../components/GoogleIcon";
import './PremadeDecksPage.css';

const PremadeDecksPage = () => {
  const [selectedDeck, setSelectedDeck] = useState(null);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const premadeDecks = [
    { name: "Russian Basics", deck: russianDeck, difficulty: "Beginner", language: "Russian" },
    // Add more premade decks here
  ];

  const handleDeckSelect = (deck) => {
    setSelectedDeck(deck);
    setCurrentCardIndex(0);
    setIsFlipped(false);
  };

  const handleNextCard = () => {
    if (selectedDeck && currentCardIndex < selectedDeck.deck.length - 1) {
      setCurrentCardIndex(prev => prev + 1);
      setIsFlipped(false);
    }
  };

  const handlePrevCard = () => {
    if (selectedDeck && currentCardIndex > 0) {
      setCurrentCardIndex(prev => prev - 1);
      setIsFlipped(false);
    }
  };

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <BackgroundAnim color="blue" outlineColor="yellow" title="Premade Decks">
      <div className="premade-decks-page">
        {!selectedDeck ? (
          <div className="deck-list">
            <h2>Select a Deck to Practice</h2>
            <div className="deck-grid">
              {premadeDecks.map((deck, index) => (
                <div
                  key={index}
                  className="deck-card"
                  onClick={() => handleDeckSelect(deck)}
                >
                  <h3>{deck.name}</h3>
                  <p>Language: {deck.language}</p>
                  <p>Difficulty: {deck.difficulty}</p>
                  <p>Cards: {deck.deck.length}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="practice-area">
            <div className="practice-header">
              <button className="back-button" onClick={() => setSelectedDeck(null)}>
                <GoogleIcon icon="arrow_back" /> Back to Decks
              </button>
              <h2>{selectedDeck.name}</h2>
              <div className="card-counter">
                Card {currentCardIndex + 1} of {selectedDeck.deck.length}
              </div>
            </div>
            
            <div className={`flashcard ${isFlipped ? 'flipped' : ''}`} onClick={handleCardFlip}>
              <div className="card-inner">
                <div className="card-front">
                  {selectedDeck.deck[currentCardIndex].Question}
                </div>
                <div className="card-back">
                  {selectedDeck.deck[currentCardIndex].Answer}
                </div>
              </div>
            </div>

            <div className="practice-controls">
              <button 
                className="control-button"
                onClick={handlePrevCard}
                disabled={currentCardIndex === 0}
              >
                <GoogleIcon icon="arrow_back" /> Previous
              </button>
              <button 
                className="control-button flip-button"
                onClick={handleCardFlip}
              >
                <GoogleIcon icon="flip" /> Flip Card
              </button>
              <button 
                className="control-button"
                onClick={handleNextCard}
                disabled={currentCardIndex === selectedDeck.deck.length - 1}
              >
                Next <GoogleIcon icon="arrow_forward" />
              </button>
            </div>
          </div>
        )}
      </div>
    </BackgroundAnim>
  );
};

export default PremadeDecksPage;