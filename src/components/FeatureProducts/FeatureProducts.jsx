import useProductContext from "../../hooks/useProductContext"
import Product from "../Product/Product";
import { Wrapper } from "./FeatureProducts.styles";

function FeatureProducts() {
  const {inLoading, featuredProducts} = useProductContext();

  if (inLoading){
    return <div>Loading...</div>
  }


  return (
    <Wrapper>
        <div className="container">
            <div className="intro-data">Check Now!</div>
            <div className="common-heading">Our Feature Services</div>
            <div className="grid grid-three-column">
                {
                    featuredProducts.map((product) => {
                        return <Product key={product.id} {...product}/>
                    })
                }
            </div>
        </div>
    </Wrapper>
  )
}

export default FeatureProducts