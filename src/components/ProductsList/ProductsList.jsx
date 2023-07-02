/* eslint-disable react/prop-types */
import Product from "../Product/Product"
import { Wrapper } from "./ProductsList.styles"

const ProductsList = ({products, view}) => { 
  console.log(products);
  return (
    <Wrapper>
      <div className={`container ${view ? "grid grid-three-column" : "flex"} `}>
        {
          products.map((product) => (
           <Product key={product.id} {...product} view={view}/> 
          )) 
        }
      </div>
    </Wrapper>
  )
}

export default ProductsList