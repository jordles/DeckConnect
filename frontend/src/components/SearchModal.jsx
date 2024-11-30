import { useState } from 'react'
import './SearchModal.css'
import GoogleIcon from './GoogleIcon'

const SearchModal = ({ isOpen, onClose, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState('name'); // name, language, difficulty

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm, searchType);
  };

  return (
    <div className="search-modal">
      <div className="search-modal-content">
        <div className="search-modal-header">
          <h2>Search Decks</h2>
          <button className="close-button" onClick={onClose}>
            <GoogleIcon icon="close" size="32px"/>
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="search-input-container">
            <GoogleIcon icon="search" size="32px"/>
            <input
              type="text"
              placeholder="Search your decks..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              autoFocus
            />
          </div>
          <div className="search-filters">
            <label className={`filter-option ${searchType === 'name' ? 'active' : ''}`}>
              <input
                type="radio"
                name="searchType"
                value="name"
                checked={searchType === 'name'}
                onChange={(e) => setSearchType(e.target.value)}
              />
              Deck Name
            </label>
            <label className={`filter-option ${searchType === 'language' ? 'active' : ''}`}>
              <input
                type="radio"
                name="searchType"
                value="language"
                checked={searchType === 'language'}
                onChange={(e) => setSearchType(e.target.value)}
              />
              Language
            </label>
            <label className={`filter-option ${searchType === 'difficulty' ? 'active' : ''}`}>
              <input
                type="radio"
                name="searchType"
                value="difficulty"
                checked={searchType === 'difficulty'}
                onChange={(e) => setSearchType(e.target.value)}
              />
              Difficulty
            </label>
          </div>
          <button type="submit" className="search-button">
            Search <GoogleIcon icon="search" size="24px"/>
          </button>
        </form>
      </div>
    </div>
  )
}

export default SearchModal
