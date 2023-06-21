import Filters from "../../components/Filters/Filters"
import ProductsList from "../../components/ProductsList/ProductsList"
import Sort from "../../components/Sort/Sort"
import { useFilterContext } from "../../context/filterContext"
import { Wrapper } from "./Products.styles"
import Product from "../../components/Product/Product"

const Products = () => {
  const { filter_products } = useFilterContext();
  console.log(filter_products);

  return (
    <Wrapper>
      <div className="filter-products-grid">

        <div>
          <Filters />
        </div>

        <div className="sort-productsList-grid">
          <div className="sort"><Sort /></div>
          <div className="productsList">
            <ProductsList />
          </div>
        </div>

      </div>
    </Wrapper>
  )
}

export default Products