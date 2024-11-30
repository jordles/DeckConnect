const GoogleIcon = ({icon, size = '24px', onClick, color }) => (<span className="material-symbols-rounded" style={{fontSize: size, backgroundColor: `var(--${color})`}} onClick={onClick}>{icon}</span>)

export default GoogleIcon