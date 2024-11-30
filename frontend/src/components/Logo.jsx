import './Logo.css'

const Logo = ({style}) => {
  return (
    <div className="logo" style={style}>
      <div className = "back"></div>
      <div className = "front">Deck <br/> Connect</div>
      
    </div>
  )
}

export default Logo