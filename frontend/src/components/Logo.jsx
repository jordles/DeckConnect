import './Logo.css'
import { Link } from 'react-router-dom'

const Logo = ({style}) => {
  return (
    <Link to="/feed" style={{ textDecoration: 'none' }}>
      <div className="logo" style={style}>
        <div className="back"></div>
        <div className="front">Deck <br/> Connect</div>
      </div>
    </Link>
  )
}

export default Logo