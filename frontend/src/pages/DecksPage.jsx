import BackgroundAnim from "../components/BackgroundAnim"
import './DecksPage.css'  
import DeckList from "../components/DeckList"
import GoogleIcon from "../components/GoogleIcon"
const DecksPage = () => {
  return (
    <BackgroundAnim color="green" outlineColor="yellow" title="Decks">
      <div className="decks-page">
        <div className = "left">
          <div>Custom Decks <GoogleIcon icon = "add" size="32px"/></div>
          <div>Premade Decks <GoogleIcon icon = "add" size="32px"/></div>
          <div>Import Deck <GoogleIcon icon = "add" size="32px"/></div>
          <div>Create Deck <GoogleIcon icon = "add" size="32px"/></div>
          <div>Search Deck <GoogleIcon icon = "search" size="32px"/></div>
        </div>
        <div className = "right">
          <header>
            <div className="deck-selection">All Decks</div>
          </header>
          <main>
            <ul style = {{listStyleType: 'none'}}>
              <DeckList name="Deck 1" difficulty="Easy"/>
              <DeckList name="Deck 1" difficulty="Easy"/>
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
    </BackgroundAnim>
  )
}

export default DecksPage