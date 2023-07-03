import { NavLink } from "react-router-dom";
import CartIteam from "../../components/CartItem/CartIteam";
import useCartContext from "../../hooks/useCartContext";
import { Button } from "../../styles/Button";
import { Wrapper } from "./Cart.styles";
import FormatPrice from "../../Helpers/FormatPrice";

const Cart = () => {
  const { shipping_fee, cart, clearCart, total_amount } = useCartContext();
  console.log(cart);

  return (
    <Wrapper>
      <div className="container">
        {cart.length == 0 ? (
          <div className="cart-empty">
            <div>No items to show, your cart is empty</div>
            <NavLink to="/Products">
              <Button>add items</Button>
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
            <div className="cart-items">
              {cart.map((element) => {
                return <CartIteam key={element.id} {...element} />;
              })}
            </div>
            <hr />

            <div className="cart-btn">
              <NavLink to="/Products" className="navbar-link ">
                <Button>CONTINUE SHOPPING</Button>
              </NavLink>

              <Button className="clear-btn" onClick={clearCart}>
                CLEAR CART
              </Button>
            </div>
            <div className="cart-total">
              <div className="cart-total-info">
                <p>
                  Subtotal:
                  <FormatPrice price={total_amount} />
                </p>
                <p>
                  shipping fee :<FormatPrice price={shipping_fee} />
                </p>
                <hr />

                <p>Order Total: <FormatPrice price={total_amount - shipping_fee}/></p>
              </div>
            </div>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default Cart;