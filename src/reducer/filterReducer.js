/* eslint-disable no-case-declarations */

const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      const arrPrice = action.payload.map((element) => Number(+element.price));
      const maxPrice = Math.max(...arrPrice);
      const minPrice = Math.min(...arrPrice);
      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
        filters: {
          ...state.filters,
          maxPrice: maxPrice,
          price: maxPrice,
          minPrice: minPrice,
        },
      };
    case "SET_GRID_VIEW":
      return {
        ...state,
        grid_view: true,
      };

    case "SET_LIST_VIEW":
      return {
        ...state,
        grid_view: false,
      };

    case "GET_SORT_VALUE":
      return {
        ...state,
        sorting_value: action.payload,
      };

    case "SORTING_PRODUCTS":
      let newSortData;
      const { filter_products, sorting_value } = state;
      const tempSortProduct = [...filter_products];

      const sortingProducts = (a, b) => {
        if (sorting_value === "lowest") {
          return a.price - b.price;
        }
        if (sorting_value === "highest") {
          return b.price - a.price;
        }
        if (sorting_value === "a-z") {
          return a.name.localeCompare(b.name);
        }
        if (sorting_value === "z-a") {
          return b.name.localeCompare(a.name);
        }
      };

      newSortData = tempSortProduct.sort(sortingProducts);
      return {
        ...state,
        filter_products: newSortData,
      };

    case "UPDATE_FILTER_VALUE":
      const { name, value } = action.payload;
      return {
        ...state,
        filters: { ...state.filters, [name]: value },
      };

    case "FILTER_PRODUCTS":
      const { all_products } = state;
      const { text, category, company, price, color } = state.filters;
      let tempFilterProducts = all_products;
      if (text) {
        tempFilterProducts = tempFilterProducts.filter((product) =>
          product.name.toLowerCase().includes(text)
        );
      }

      if (category !== "all") {
        tempFilterProducts = tempFilterProducts.filter(
          (product) => product.category == category
        );
      }

      if (company !== "all") {
        tempFilterProducts = tempFilterProducts.filter(
          (product) => product.company.toLowerCase() == company.toLowerCase()
        );
      }
      if (price) {
        tempFilterProducts = tempFilterProducts.filter(
          (product) => product.price <= price
        );
      }

      if (color) {
        tempFilterProducts = tempFilterProducts.filter((product) =>
          product.colors.includes(color)
        );
      }
      return {
        ...state,
        filter_products: tempFilterProducts,
      };
    case "CLEAR_FILTERS":
      return {
        ...state,
        grid_view: true,
        sorting_value: "lowest",
        filters: {
          text: "",
          category: "all",
          company: "all",
          maxPrice: state.filters.maxPrice,
          minPrice: state.filters.maxPrice,
          price: state.filters.maxPrice,
        },
      };
    default:
      return state;
  }
};

export default filterReducer;
