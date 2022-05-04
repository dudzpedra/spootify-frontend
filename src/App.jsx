import { useEffect, useState } from "react";
import { accessToken } from "./services/spotify";
import "./App.css";
import NewReleases from "./components/NewReleases";
import FeaturedPlaylists from "./components/FeaturedPlaylists";
import UserProfile from "./components/UserProfile";
import Login from "./components/Login";

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(accessToken);
  }, []);

  return (
    <div className="App">
      {!token ? (
        <Login />
      ) : (
        <>
          <UserProfile />
          <NewReleases amount={4} />
          <FeaturedPlaylists amount={4} />
        </>
      )}
    </div>
  );
}

export default App;
