import { createContext, useEffect, useReducer } from "react";

import useGetProducts from "../hooks/useGetProducts";

import reducer, { initialState } from "../reducer/productReducer";

const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const AppProvider = ({ children }) => {
    
    const[state,dispatch] = useReducer(reducer,initialState);

     const getData = async () => {
        dispatch({type:"SET_LOADING"});
        try {
            const products = await useGetProducts(API);
            dispatch({type:"SET_API_DATA",payload:products});
        } catch (err) {
            dispatch({type:"SET_ERROR"});
        }
     }

    useEffect(() => {
        getData();
    },[])
    
  return (
    <AppContext.Provider value={{...state}}>
      {children}
    </AppContext.Provider>

  );
};

export { AppContext, AppProvider };
