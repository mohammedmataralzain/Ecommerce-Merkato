/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import { Wrapper } from "./Product.styles";
import { Button } from "../../styles/Button";

// eslint-disable-next-line react/prop-types
function Product({
  name,
  image,
  price,
  category,
  description,
  id,
  view = true,
}) {
  return (
    <NavLink to={`/SingleProduct/${id}`}>
      <Wrapper className="card">
        {view ? (

          <>
            <figure>
              <img src={image} alt={name} loading="lazy" />
              <figcaption className="caption">{category}</figcaption>
            </figure>

            <div className="card-data">
              <h3>{name}</h3>
              <p className="card-data-price">
                USD {(price.toString().slice(0, 4) / 5).toFixed(2)}
              </p>
            </div>
          </>

        ) : (

          <div className="card-list">

            <div className="card-img">
              <img src={image} alt={name} loading="lazy"/>
            </div>

            <div className="card-data">
              <h3>{name}</h3>
              <p className="card-data-price">
                USD {(price.toString().slice(0, 4) / 5).toFixed(2)}
              </p>
              <p>{description.slice(0, 90)}...</p>
              <NavLink to={`/SingleProduct/${id}`}>
                <Button>read more</Button>
              </NavLink>
            </div>

          </div>

        )}
      </Wrapper>
    </NavLink>
  );
}

export default Product;
