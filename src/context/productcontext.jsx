import { createContext, useEffect, useReducer } from "react";

import useGetProducts from "../hooks/useGetProducts";

import reducer, { initialState } from "../reducer/productReducer";

const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

// eslint-disable-next-line react/prop-types
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getData = async () => {
    dispatch({ type: "SET_LOADING_OFF" });
    try {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const products = await useGetProducts(API);
      dispatch({ type: "SET_API_DATA", payload: products });
    } catch (err) {
      dispatch({ type: "SET_ERROR" });
    }
    dispatch({ type: "SET_LOADING_ON" });

  };
  const getSingleProductData = async (id) => {
    dispatch({ type: "SET_LOADING_SINGLE_PRODUCT_OFF" });
    try {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const singleProduct = await useGetProducts(`${API}/${id}`);

      dispatch({ type: "SET_SINGLE_PRODUCT_DATA", payload: singleProduct });
    } catch (err) {
      dispatch({ type: "SET_SINGLE_PRODUCT_ERROR" });
    }
    dispatch({ type: "SET_LOADING_SINGLE_PRODUCT_ON" });

  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <AppContext.Provider value={{ ...state ,getSingleProductData}}>{children}</AppContext.Provider>
  );
};

export { AppContext, AppProvider };
