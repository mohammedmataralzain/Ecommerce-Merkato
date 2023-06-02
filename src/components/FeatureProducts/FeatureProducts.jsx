import useProductContext from "../../hooks/useProductContext";
import Loading from "../Loading/Loading";
import Product from "../Product/Product";
import { Wrapper } from "./FeatureProducts.styles";

function FeatureProducts() {
  const { featuredProducts, inLoading } = useProductContext();

  return (
    <Wrapper>
      <div className="container">
        <div className="intro-data">Check Now!</div>
        <div className="common-heading">Our Feature Services</div>
        <div className="grid grid-three-column">
          {inLoading ? (
            <Loading />
          ) : (
            featuredProducts.map((product) => {
              return <Product key={product.id} {...product} />;
            })
          )}
        </div>
      </div>
    </Wrapper>
  );
}

export default FeatureProducts;
