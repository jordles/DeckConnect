import './BoxContainer.css'

const BoxContainer = ({className = 'box-container', children, style}) => {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  )
}

export default BoxContainer