import { NavLink } from "react-router-dom"
import { Wrapper } from "./Product.styles"

// eslint-disable-next-line react/prop-types
function Product({name, image, price, category,id}) {
  return (
    <NavLink to={`/SingleProduct/${id}`}>
        <Wrapper className="card">
            <figure>
              <img src={image} alt={name} />
              <figcaption className="caption">{category}</figcaption>
            </figure>
    
            <div className="card-data">
                <h3>{name}</h3>
                <p className="card-data--price">USD {(price.toString().slice(0,4) / 4).toFixed(2)}</p>
            </div>
        </Wrapper>
    </NavLink>
  )
}

export default Product