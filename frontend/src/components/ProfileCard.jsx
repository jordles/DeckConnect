import './ProfileCard.css'

const ProfileCard = ({children,shape="circle", size="100px", cardStyle="square", color, style}) => {
  return (
    <div className={`profile-card ${cardStyle}`} style={{...style, backgroundColor: `var(--${color})`}}>
      <img src="https://avatar.iran.liara.run/public" className={shape} style={{width: size, height: size}}/>
      {children}
    </div>
  )
}

export default ProfileCard