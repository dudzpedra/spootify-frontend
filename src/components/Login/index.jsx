import SpotifyButton from "../ui/SpotifyButton";
import "./styles.sass";

const LOGIN_URI = process.env.NODE_ENV !== 'production' ? 'http://localhost:8888/login' : 'https://spootify-fullstack.herokuapp.com/login'

const Login = () => {
  return (
    <div className="login-container">
      <h1>React Spotify App</h1>
      <SpotifyButton>
        <a href={LOGIN_URI}>Login to Spotify</a>
      </SpotifyButton>
    </div>
  );
};

export default Login;
