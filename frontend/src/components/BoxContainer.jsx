import './BoxContainer.css'

const BoxContainer = ({className = 'box-container', children, style, onClick}) => {
  return (
    <div className={className} style={style} onClick={onClick}>
      {children}
    </div>
  )
}

export default BoxContainer