/**
 *
 * Community Deck Section where users can find import and export a deck
 * Lists of all decks will be shown
 *
 */

import "./CommunityBoard.css";

function CommunityBoardPage() {
  return (
    <div className="community-board-section">
      <div className="community">
        <h1>Community Feed</h1>
        <p>Search and vote for your favorite deck</p>
        <button id="share-button">Share Deck</button>
        <button id="export-button">Export Deck</button>
      </div>
      <div className="search-deck-section">
        <input id="search-bar" type="text" placeholder="Search Decks" />
        <div id="deck-info">
          <button className="deck-btn-group">Deck Name</button>
          <button className="deck-btn-group">Time Stamp</button>
          <button className="deck-btn-group">Rating</button>
        </div>
        {/* placeholder for the search deck contents */}
        <div className="search-deck-contents"></div>
      </div>
      <div className="decks"></div>
    </div>
  );
}

export default CommunityBoardPage;
