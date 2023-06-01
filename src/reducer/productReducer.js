
export const initialState = {
    inLoading:false,
    isError: false,
    products:[],
    featuredProducts:[],
}

const productReducer = (state, action) => {
  switch (action.type) {

    case "SET_LOADING":

      return { ...state, isLoading: true };

    case "SET_API_DATA":
      // eslint-disable-next-line no-case-declarations
      const featuredProducts = action.payload.filter((item) =>  item.featured === true);

      return {
        ...state,
        products: action.payload,
        featuredProducts: featuredProducts,
      };

    case "SET_ERROR":
        
      return { ...state, isLoading: false, isError: true };

    default:
      return state;
  }
};

export default productReducer;
