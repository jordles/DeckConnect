import { useNavigate } from 'react-router-dom';
import Button from './Button';
import './NavBar.css';

function NavBar() {
  const navigate = useNavigate();

  const navButtonStyle = {
    backgroundColor: 'transparent',
    padding: '0.8em 1.5em',
    margin: '0 10px'
  };

  return (
    <nav className="navbar">
      <Button 
        style={navButtonStyle} 
        onClick={() => navigate('/share')}
      >
        Share
      </Button>
      <Button 
        style={navButtonStyle} 
        onClick={() => navigate('/decks')}
      >
        Decks
      </Button>
      <Button 
        style={navButtonStyle} 
        onClick={() => navigate('/friends')}
      >
        Friends
      </Button>
    </nav>
  );
}

export default NavBar;
