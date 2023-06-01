import axios from "axios";

const useGetProducts = async (url) => {
  const res = await axios.get(url)
  const products = await res.data;
  return products;
};

export default useGetProducts;
