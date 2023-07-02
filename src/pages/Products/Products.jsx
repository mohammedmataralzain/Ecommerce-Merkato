import Filters from "../../components/Filters/Filters";
import Loading from "../../components/Loading/Loading";
import ProductsList from "../../components/ProductsList/ProductsList";
import Sort from "../../components/Sort/Sort";
import useFilterContext from "../../hooks/useFilterContext";
import useProductContext from "../../hooks/useProductContext";
import { Wrapper } from "./Products.styles";

const Products = () => {
  const { filter_products, grid_view } = useFilterContext();
  const { inLoading } = useProductContext();

  return (
    <Wrapper>
      <div className="filter-products-grid">
        <div>
          <Filters />
        </div>

        <div className="sort-productsList-grid">
          <div className="sort">
            <Sort />
          </div>
          <div className="productsList">
            {inLoading ? (
              <div className="loading">
                <Loading />
              </div>
            ) : (
              <ProductsList view={grid_view} products={filter_products} />
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Products;
