import axios from "axios";

const getCategories = async (setData) => {
  try {
    const { status, data } = await axios.get('/browse/categories')
    if (status === 200) {
      setData(data)
      console.log(data.categories.items);
    }
  } catch (e) {
    console.error(e);
  }
}

export default getCategories