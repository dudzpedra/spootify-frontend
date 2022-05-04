import axios from "axios";

const getNewReleases = async (setData) => {
  try {
    const { data, status } = await axios.get('/browse/new-releases');
    if (status === 200) {
      console.log(data);
      setData(data);
    }
  } catch (error) {
    console.error(error);
  }
};

export default getNewReleases;
