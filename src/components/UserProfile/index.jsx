import { useEffect, useState } from "react";
import getUser from "../../services/get-user";
import { logout } from "../../services/spotify";
import SpotifyButton from "../ui/SpotifyButton";
import './styles.sass'
const UserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser(setUser);
  }, []);
  return (
    <div className="user-profile-container">
      {user && (
        <div className="user-profile-area">
          <img src={user.images[0].url} alt={user.display_name} />
          <div className="user-profile-info">
            <h5>PROFILE</h5>
            <h1>{user.display_name}</h1>
            <p>{user.followers.total} followers</p>
            <SpotifyButton onClick={logout}>Logout</SpotifyButton>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
