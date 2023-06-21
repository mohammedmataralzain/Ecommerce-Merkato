import Filters from "../../components/Filters/Filters"
import ProductsList from "../../components/ProductsList/ProductsList"
import Sort from "../../components/Sort/Sort"
import { Wrapper } from "./Products.styles"

const Products = () => {
  return (
    <Wrapper>
      <div className="filter-products-grid">

        <div>
          <Filters />
        </div>

        <div className="sort-productsList-grid">
          <div className="sort"><Sort /></div>
          <div className="productsList"><ProductsList /></div>
        </div>

      </div>
    </Wrapper>
  )
}

export default Products