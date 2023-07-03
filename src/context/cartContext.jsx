/* eslint-disable react/prop-types */
import { useEffect, useReducer } from "react";
import { createContext } from "react";
import reducer from "../reducer/cartReducer";
// import { useEffect } from "react";
export const CartContext = createContext();

const intialState = {
  cart: [],
  total_item: "",
  total_amount: 0,
  shipping_fee: 50000,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialState);

  const addToCart = (id, color, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
  };

  // Testing
  // useEffect(()=> {
  //     console.log(state);
  // }, [state])

  const setDecrease = (id) => {
    dispatch({ type: "SET_DECREASE", payload: id });
  };

  const setIncrease = (id) => {
    dispatch({ type: "SET_INCREASE", payload: id });
  };
  const removeProduct = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };
  useEffect(() => {
    dispatch({ type: "TOTAL_CART" });
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        setDecrease,
        setIncrease,
        removeProduct,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider };