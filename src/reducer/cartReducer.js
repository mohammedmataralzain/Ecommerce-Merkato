/* eslint-disable no-case-declarations */

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      let { id, color, amount, product } = action.payload;

      let cartProduct;

      cartProduct = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.image[0].url,
        price: product.price,
        max: product.stock,
      };
      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };

    case "SET_DECREASE":
      let updatedProduct = state.cart.map((element) => {
        if (element.id == action.payload) {
          let newAmount = element.amount - 1;
          if (newAmount <= 1) {
            newAmount = 1;
          }

          return {
            ...element,
            amount: newAmount,
          };
        } else {
          return element;
        }
      });

      return {
        ...state,
        cart: updatedProduct,
      };

    case "SET_INCREASE":
      let updatedProductTwo = state.cart.map((element) => {
        if (element.id == action.payload) {
          let newAmount = element.amount + 1;
          if (newAmount >= element.max) {
            newAmount = element.max;
          }

          return {
            ...element,
            amount: newAmount,
          };
        } else {
          return element;
        }
      });

      return {
        ...state,
        cart: updatedProductTwo,
      };


    case "REMOVE_ITEM":
      let unRemovedProducts = state.cart.filter((element) => {
        return element.id != action.payload
      })
      return {
        ...state,
        cart: unRemovedProducts
      }
    
      case "CLEAR_ALL":
        return {
          ...state,
          cart: []
        }
    default:
      return state;
  }
};

export default cartReducer;
