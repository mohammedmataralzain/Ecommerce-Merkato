/* eslint-disable react/prop-types */
import { useReducer } from "react";
import { createContext } from "react";
import reducer from "../reducer/cartReducer";
// import { useEffect } from "react";
export const CartContext = createContext();

const intialState = {
    cart: [],
    total_item: "",
    total_amount: "",
    shipping_fee: 50000,
}


const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, intialState)
    
    const addToCart = (id, color, amount, product) => {
        dispatch({type: "ADD_TO_CART", payload: {id, color, amount, product}})
    }

    // Testing
    // useEffect(()=> {
    //     console.log(state);
    // }, [state])

    const setDecrease = (id) => {
        dispatch({type: "SET_DECREASE", payload: id});
    }

    const setIncrease = (id) => {
        dispatch({type: "SET_INCREASE", payload: id});
    }

    return <CartContext.Provider value={{...state, addToCart, setDecrease, setIncrease}}>
        {children}
    </CartContext.Provider>
}


export {CartProvider};