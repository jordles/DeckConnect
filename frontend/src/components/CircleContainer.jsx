
import './CircleContainer.css'
const CircleContainer = ({className = 'circle-container',children, style}) => {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  )
}

export default CircleContainer