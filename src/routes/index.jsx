import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import App from "../App";
import NewReleases from "../components/NewReleases";
import FeaturedPlaylists from "../components/FeaturedPlaylists";
import { useEffect } from "react";
import Categories from "../components/Categories";

const AppRoutes = () => {
  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/new-releases" element={<NewReleases />} />
        <Route path="/featured-playlists" element={<FeaturedPlaylists />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
