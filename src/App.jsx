import { ErrorBoundary } from "react-error-boundary";
import { useEffect, useState } from "react";
import { accessToken } from "./services/spotify";
import "./App.css";
import NewReleases from "./components/NewReleases";
import FeaturedPlaylists from "./components/FeaturedPlaylists";
import UserProfile from "./components/UserProfile";
import Login from "./components/Login";
import Categories from "./components/Categories";
import ErrorFallback from "./components/ErrorFallback";

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
          <Categories amount={4} />
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <FeaturedPlaylists amount={4} />
          </ErrorBoundary>
        </>
      )}
    </div>
  );
}

export default App;
