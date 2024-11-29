import './BackgroundAnim.css'
import { LuUndo2 } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';

const BackgroundAnim = ({className = 'background-anim', children, color, outlineColor, title, showTitle = true, size}) => {
  const navigate = useNavigate();
  
  return (
    <div className={className}>
      <div className="background-elements">
        <div className="square-anim first" style={{ borderColor: `var(--${outlineColor ||color})`, width: size, height: size }}>
        </div>
        <div className="square-anim second" style={{ borderColor: `var(--${outlineColor ||color})`, width: size, height: size }}>
        </div>
      </div>
      <div className="content">
        {children}
        {showTitle && (
          <div className="title" style={{backgroundColor: `var(--${color})`, width: size, height: size}}>
            {title}
            <LuUndo2 
              className="undo-icon"
              size={50}
              onClick={() => navigate(-1)}
              style={{
                filter: `
                  drop-shadow(3px 0 0 var(--${color})) 
                  drop-shadow(0 3px 0 var(--${color})) 
                  drop-shadow(-3px 0 0 var(--${color})) 
                  drop-shadow(0 -3px 0 var(--${color}))
                  drop-shadow(3px 0 0 white) 
                  drop-shadow(0 3px 0 white) 
                  drop-shadow(-3px 0 0 white) 
                  drop-shadow(0 -3px 0 white)
                `
              }}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default BackgroundAnim