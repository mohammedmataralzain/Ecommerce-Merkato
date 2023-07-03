/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom"
import { Wrapper } from "./AddToCart.styles"
import { Button } from "../../styles/Button"
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import CartAmountToggle from "../CartAmountToggle/CartAmountToggle";
import useCartContext from "../../hooks/useCartContext";

const AddToCart = ({product}) => {
  const {id, colors, stock} = product;
  // Color
  const [color, setColor] = useState(colors[0]);

  // Amount and its functions
  const [amount, setAmount] = useState(1);
  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1)
  }
  const setIncrease = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock)
  }

  //cart context
  const {addToCart} = useCartContext();

  return (
    <Wrapper>
      <div className="colors">
        <p>
          color: {
            colors.map((item, index) => (
              <button
              key={index}
              className={color === item ? "btnStyle active" : "btnStyle"}
              style={{backgroundColor: item}}
              onClick={() => setColor(item)}
              >
                {color === item ? <FaCheck className="checkStyle" /> : null}
              </button>
            ))
          }
        </p> 
      </div>

      <CartAmountToggle 
        amount={amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />

      <NavLink to="/cart" onClick={() => addToCart(id, color, amount, product)}>
        <Button className="btn">
          Add To Cart
        </Button>
      </NavLink>
    </Wrapper>
  )
}

export default AddToCart