const SquareContainer = ({children, style}) => {
  return (
    <div className="box-container" style={style}>
      {children}
    </div>
  )
}

export default SquareContainer