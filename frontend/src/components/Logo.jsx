import './Logo.css'
import { useNavigate } from 'react-router-dom'

const Logo = ({style}) => {
  const navigate = useNavigate();

  return (
    <div className="logo" style={style} onClick={() => navigate('/decks')} role="button" tabIndex={0}>
      <div className = "back"></div>
      <div className = "front">Deck <br/> Connect</div>
    </div>
  )
}

export default Logo