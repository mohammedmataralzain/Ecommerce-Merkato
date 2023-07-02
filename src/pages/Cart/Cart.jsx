import CartIteam from "../../components/CartItem/CartIteam";
import useCartContext from "../../hooks/useCartContext"
import { Wrapper } from "./Cart.styles"

const Cart = () => {
  const {cart} = useCartContext();
  console.log(cart);

  return (
    <Wrapper>
      <div className="container">
        <div className="cart-heading grid grid-five-column">
          <p>Item</p>
          <p className="cart-hidden">Price</p>
          <p>Quantity</p>
          <p className="cart-hidden">Subtotal</p>
          <p>Remove</p>
        </div>

        <hr />
        <div className="cart-item">
          {
            cart.map((element) => {
              return <CartIteam key={element.id} {...element}/>
            })
          }
        </div>
      </div>
    </Wrapper>
  )
}

export default Cart