
import './CircleContainer.css'
const CircleContainer = ({className = 'circle-container',children, style, color}) => {
  return (
    <div className={className} style={{...style, backgroundColor:  `var(--${color})`}}>
      {children}
    </div>
  )
}

export default CircleContainer