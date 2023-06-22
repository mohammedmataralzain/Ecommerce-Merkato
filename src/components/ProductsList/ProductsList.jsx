/* eslint-disable react/prop-types */
import Product from "../Product/Product"
import { Wrapper } from "./ProductsList.styles"

const ProductsList = ({products, classname}) => { 
  return (
    <Wrapper>
      <div className={`container ${classname ? "grid grid-three-column" : ""} `}>
        {
          products.map((product) => (
           <Product key={product.id} {...product}/> 
          ))
        }
      </div>
    </Wrapper>
  )
}

export default ProductsList