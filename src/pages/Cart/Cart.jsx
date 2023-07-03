import { NavLink } from "react-router-dom";
import CartIteam from "../../components/CartItem/CartIteam";
import useCartContext from "../../hooks/useCartContext";
import { Button } from "../../styles/Button";
import { Wrapper } from "./Cart.styles";

const Cart = () => {
  const { cart } = useCartContext();
  console.log(cart);

  return (
    <Wrapper>
      <div className="container">
        {cart.length == 0 ? (
          <div className="cart-empty">
            <div>
              No items to show, your cart is empty 
            </div>
            <NavLink to="/Products">
              <Button>
                add items
              </Button>
            </NavLink>
          </div>

        ) : (
          <div className="cart-item">
            <div className="cart-heading grid grid-five-column">
              <p>Item</p>
              <p className="cart-hidden">Price</p>
              <p>Quantity</p>
              <p className="cart-hidden">Subtotal</p>
              <p>Remove</p>
            </div>
            <hr />
            {cart.map((element) => {
              return <CartIteam key={element.id} {...element} />;
            })}
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default Cart;
