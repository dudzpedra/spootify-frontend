import axios from "axios";

const getCategories = async (setData) => {
  try {
    const { status, data } = await axios.get('/browse/categories')
    if (status === 200) {
      setData(data)
    }
  } catch (e) {
    console.error(e);
  }
}

export default getCategories