/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useContext } from "react";
import { createContext } from "react";
import { useReducer } from "react";
import { useEffect } from "react";
import reducer from "../reducer/filterReducer"
import useProductContext from "../hooks/useProductContext";

const FilterContext = createContext();

const initialState = {
    filter_products: [],
    all_products: []
}

export const FilterContextProvider = ({children}) => {
    const { products } = useProductContext();
    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {
        dispatch({type: "LOAD_FILTER_PRODUCTS", payload: products})
    }, [products])

    return (
        <FilterContext.Provider value={{...state}}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilterContext = () => {
    return useContext(FilterContext);
}