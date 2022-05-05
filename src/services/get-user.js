import axios from "axios";

const getUser = async (setUser) => {
  try {
    const { data, status } = await axios.get("/me");
    if (status === 200) {
      setUser(data);
    }
  } catch (e) {
    console.error(e);
  }
};

export default getUser;
