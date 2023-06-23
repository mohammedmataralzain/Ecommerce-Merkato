/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext } from "react";
import { useReducer } from "react";
import { useEffect } from "react";
import reducer from "../reducer/filterReducer"
import useProductContext from "../hooks/useProductContext";

export const FilterContext = createContext();

const initialState = {
    filter_products: [],
    all_products: [], 
    grid_view: true,
    sorting_value: "lowest"
}

export const FilterContextProvider = ({children}) => {
    const { products } = useProductContext();
    const [state, dispatch] = useReducer(reducer, initialState);

    // to set grid view 
    const setGridView = () => {
        return dispatch({type: "SET_GRID_VIEW"})
    }
    const setListView = () => {
        return dispatch({type: "SET_LIST_VIEW"})
    }

    // For the dropDown sorting
    const sorting = (event) => {
        const sortValue = event.target.value;
        return dispatch({type: "GET_SORT_VALUE", payload: sortValue});
    }

    useEffect(() => {
        dispatch({type: "LOAD_FILTER_PRODUCTS", payload: products})
        dispatch({type: "SORTING_PRODUCTS"})
    }, [products, state.sorting_value])

    return (
        <FilterContext.Provider value={{...state, setGridView, setListView, sorting}}>
            {children}
        </FilterContext.Provider>
    )
}

