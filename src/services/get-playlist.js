import axios from "axios";

const getPlaylist = async (id, setPlaylist) => {
  try {
    const { status, data } = await axios.get(`/playlists/${id}`);
    if (status === 200) {
      console.log(data);
      setPlaylist(data)
    }
  } catch (e) {
    console.error(e);
  }
};

export default getPlaylist