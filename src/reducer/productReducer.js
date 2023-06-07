export const initialState = {
  inLoading: false,
  isError: false,
  products: [],
  featuredProducts: [],
  loadingSingleProduct: false,
  singleProduct: {},
  errorSingleProduct: false,
};

const productReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING_OFF":
      return { ...state, inLoading: true };

    case "SET_LOADING_SINGLE_PRODUCT_OFF":
      return { ...state, loadingSingleProduct: true };

    case "SET_API_DATA":
      // eslint-disable-next-line no-case-declarations
      const featuredProducts = action.payload.filter(
        (item) => item.featured === true
      );

      return {
        ...state,
        products: action.payload,
        featuredProducts: featuredProducts,
      };

    case "SET_SINGLE_PRODUCT_DATA":
      return {
        ...state,
        singleProduct: action.payload,
      };

    case "SET_ERROR":
      return { ...state, inLoading: false, isError: true };

    case "SET_SINGLE_PRODUCT_ERROR":
      return {
        ...state,
        loadingSingleProduct: false,
        errorSingleProduct: true,
      };

    case "SET_LOADING_ON":
      return { ...state, inLoading: false };

    case "SET_LOADING_SINGLE_PRODUCT_ON":
      return { ...state, loadingSingleProduct: false };

    default:
      return state;
  }
};

export default productReducer;
