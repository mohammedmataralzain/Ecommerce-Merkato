/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { FaTrash } from "react-icons/fa";
import FormatPrice from "../../Helpers/FormatPrice";
import CartAmountToggle from "../CartAmountToggle/CartAmountToggle";
import useCartContext from "../../hooks/useCartContext";

const CartIteam = ({ id, name, image, color, amount, max, price }) => {
    const {setDecrease, setIncrease} = useCartContext();


  return (
    <div className="cart-heading grid grid-five-column">
      <div className="cart-img-name">
        <div>
          <img src={image} alt="" className="cart-img" />
        </div>

        <div>
          <p>{name}</p>
          <div className="cart-color">
            <p>Color: </p>
            <div
              className="color-style"
              style={{ background: color, color: color }}
            ></div>
          </div>
        </div>
      </div>

      <div className="cart-price">
        <p>
            <FormatPrice price={price} />
        </p>
      </div>

      <CartAmountToggle 
        amount={amount}
        setDecrease={() => setDecrease(id)}
        setIncrease={() => setIncrease(id)}
      />

      <div className="cart-price">
        <p>
            <FormatPrice price={price * amount}/>
        </p>
      </div>

      <div className="cart-remove">
        <FaTrash className="remove-icon"/>
      </div>

    </div>
  );
};

export default CartIteam;
