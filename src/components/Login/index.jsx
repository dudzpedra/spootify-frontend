import { Typography } from "@mui/material";
import LoginModal from "../ui/LoginModal";
import SpotifyButton from "../ui/SpotifyButton";
import "./styles.sass";

const LOGIN_URI =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:8888/login"
    : "https://spootify-fullstack.herokuapp.com/login";

const Login = () => {
  return (
    <div className="login-container">
      <Typography variant="h2">React Spotify App</Typography>
      <LoginModal />
      <SpotifyButton>
        <a href={LOGIN_URI}>Login to Spotify</a>
      </SpotifyButton>
    </div>
  );
};

export default Login;
