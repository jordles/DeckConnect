import './BackgroundAnim.css'

const BackgroundAnim = ({className = 'background-anim', children, color, outlineColor, title, showTitle = true, size}) => {
  return (
    <div className={className}>
      <div className="background-elements">
        {showTitle && (
          <div className="title" style={{backgroundColor: `var(--${color})`, width: size, height: size}}>
            {title}
          </div>
        )}
        <div className="square-anim first" style={{ borderColor: `var(--${outlineColor ||color})`, width: size, height: size }}>
        </div>
        <div className="square-anim second" style={{ borderColor: `var(--${outlineColor ||color})`, width: size, height: size }}>
        </div>
      </div>
      <div className="content">
        {children}
      </div>
    </div>
  )
}

export default BackgroundAnim