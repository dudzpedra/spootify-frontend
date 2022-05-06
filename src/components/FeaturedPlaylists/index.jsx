import "./styles.sass";
import { useEffect, useState } from "react";
import getFeaturedPlaylists from "../../services/get-featured-playlists";

const FeaturedPlaylists = ({ amount }) => {
  const [data, setData] = useState();
  useEffect(() => {
    getFeaturedPlaylists(setData);
  }, []);
  return (
    <div className="featured-playlists-container">
      <div className="featured-playlists-header">
        <h1>
          {!amount && <a href="/">Home</a>}
          {!amount && " | "}
          <a href="/featured-playlists">Featured Playlists</a>
        </h1>
        {amount && (
          <a href="/featured-playlists">
            <h3>SEE ALL</h3>
          </a>
        )}
      </div>
      <div className="featured-grid">
        {data &&
          data.playlists.items.slice(0, amount).map((item) => (
            <div key={item.id} className="featured-item">
              <a href={`/featured-playlists/${item.id}`}>
                <img src={item.images[0].url} alt={item.name} />
                <h4>{item.name}</h4>
                {!amount && <p>{item.description}</p>}
              </a>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FeaturedPlaylists;
