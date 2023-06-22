import Filters from "../../components/Filters/Filters"
import ProductsList from "../../components/ProductsList/ProductsList"
import Sort from "../../components/Sort/Sort"
import useFilterContext from "../../hooks/useFilterContext";
import { Wrapper } from "./Products.styles"

const Products = () => {
  const { filter_products, grid_view } = useFilterContext();
  
  return (
    <Wrapper>
      <div className="filter-products-grid">

        <div>
          <Filters />
        </div>

        <div className="sort-productsList-grid">
          <div className="sort"><Sort /></div>
          <div className="productsList">
            <ProductsList view={grid_view} products={filter_products} />
          </div>
        </div>

      </div>
    </Wrapper>
  )
}

export default Products