import { useContext } from "react";
import { AppContext } from "../context/productcontext";

const useProductContext = () => {
  return useContext(AppContext);
};

export default useProductContext;
