import { useContext } from "react";
import { CartContext } from "../context/cartContext";

const useCartContext = () => {
    return useContext(CartContext);
}

export default useCartContext;