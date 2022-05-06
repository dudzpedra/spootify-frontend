import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getPlaylist from "../../services/get-playlist";
import "./styles.sass";

const Playlist = () => {
  const { id } = useParams();
  const [playlist, setPlaylist] = useState();

  useEffect(() => {
    getPlaylist(id, setPlaylist);
  }, [id]);

  return (
    <>
      {playlist && (
        <Box className="playlist-container">
          <Box className="playlist-header">
            <Box className="playlist-header-content">
              <img src={playlist.images[0].url} alt={playlist.name} />
              <Box className="playlist-header-info">
                <h1>{playlist.name}</h1>
                <p>{playlist.followers.total} Followers</p>
                <p>{playlist.tracks.total} Tracks</p>
              </Box>
            </Box>
          </Box>
          <Box className="playlist-tracks">
            {playlist.tracks.items.map((t, index) => (
              <Box key={t.track.id} className="playlist-tracks-item">
                <Box className="track-info">
                  <h4>{index + 1}</h4>
                  <img src={t.track.album ? t.track.album.images[2].url : ''} alt="" />
                  <Box className="track-artist-title">
                    <h4>{t.track.name}</h4>
                    <h5>{t.track.artists[0].name}</h5>
                  </Box>
                </Box>
                <h5>{t.track.album.name}</h5>
                <h6>
                  {new Date(t.track.duration_ms).getMinutes()}:
                  {new Date(t.track.duration_ms).getSeconds() < 10
                    ? "0" + new Date(t.track.duration_ms).getSeconds()
                    : new Date(t.track.duration_ms).getSeconds()}
                </h6>
              </Box>
            ))}
          </Box>
        </Box>
      )}
    </>
  );
};

export default Playlist;
