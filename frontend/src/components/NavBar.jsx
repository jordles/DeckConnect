import Logo from './Logo';
import './NavBar.css';
import { Link } from 'react-router-dom';
const NavBar = () => {

  return (
    <nav className = "navbar">
      <Link to = "/" style={{color: 'black', textDecoration: 'none'}}>
        <Logo />
      </Link>
      <Link to = "/feed" style={{color: 'black', textDecoration: 'none'}}>
        <div className="login">Login</div>
      </Link>
    </nav>
  )
}

export default NavBar;

  // const navButtonStyle = {
  //   backgroundColor: 'transparent',
  //   padding: '0.8em 1.5em',
  //   margin: '0 10px'
  // };

  // return (
  //   <nav className="navbar">
  //     <Button 
  //       style={navButtonStyle} 
  //       onClick={() => navigate('/share')}
  //     >
  //       Share
  //     </Button>
  //     <Button 
  //       style={navButtonStyle} 
  //       onClick={() => navigate('/decks')}
  //     >
  //       Decks
  //     </Button>
  //     <Button 
  //       style={navButtonStyle} 
  //       onClick={() => navigate('/friends')}
  //     >
  //       Friends
  //     </Button>
  //   </nav>
  // );