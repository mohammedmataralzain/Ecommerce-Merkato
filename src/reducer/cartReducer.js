/* eslint-disable no-case-declarations */

const cartReducer = (state, action) => {
    switch(action.type){
        case "ADD_TO_CART":
            let {id, color, amount, product} = action.payload;

            let cartProduct;

            cartProduct =  {
                id: id + color,
                name: product.name,
                color,
                amount,
                image: product.image[0].url,
                price:product.price,
                max: product.stock,
            }
            return {
                ...state,
                cart: [...state.cart, cartProduct]
            }
        default:
            return state
    }
}

export default cartReducer