import './styles.sass'

const SpotifyButton = ({ children, onClick }) => {
  return (
    <button className="spotify-btn" onClick={onClick}>
      {children}
    </button>
  )
}

export default SpotifyButton