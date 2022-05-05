import "./styles.sass";
import { useEffect, useState } from "react";
import getNewReleases from "../../services/get-new-releases";

const NewReleases = ({ amount }) => {
  const [data, setData] = useState();

  useEffect(() => {
    getNewReleases(setData);
  }, []);

  return (
    <div className="new-releases-container">
      <div className="new-releases-header">
        <h1>
          {!amount && <a href="/">Home</a>}
          {! amount && ' | '}
          <a href="/new-releases">New Releases</a>
        </h1>
        {amount && (
          <a href="/new-releases">
            <h3>SEE ALL</h3>
          </a>
        )}
      </div>
      <div className="new-releases-grid">
        {data &&
          data.albums.items.slice(0, amount).map((item) => (
            <div key={item.id} className='new-releases-item'>
              <img src={item.images[1].url} alt="" />
              {!amount && <p>{item.release_date}</p>}
              <p>
                {item.artists[0].name} - {item.name}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default NewReleases;
