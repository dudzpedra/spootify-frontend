import axios from "axios";

const getFeaturedPlaylists = async (setData) => {
  try {
    const { data, status } = await axios.get('/browse/featured-playlists');
    if (status === 200) {
      setData(data);
      console.log(data);
    }
  } catch (error) {
    console.error(error);
  }
};

export default getFeaturedPlaylists;
