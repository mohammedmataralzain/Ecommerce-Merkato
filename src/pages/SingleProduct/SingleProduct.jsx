import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useProductContext from "../../hooks/useProductContext";
import Loading from "../../components/Loading/Loading";
import PageNavigation from "../../components/PageNavigation/PageNavigation";
import FormatPrice from "../../Helpers/FormatPrice";
import { TbReplace, TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { StyleSingleProduct } from "./styled";
import MyImgs from "../../components/MyImge/MyImgs";
import {Button} from "../../styles/Button"

// import {getSingleProductData} from "../../context"
const SingleProduct = () => {
  const { getSingleProductData, singleProduct, loadingSingleProduct } =
    useProductContext();
  const { id } = useParams();
  const {
    id: alias,
    name,
    company,
    price,
    description,
    category,
    stock,
    stars,
    reviews,
    image,
  } = singleProduct;

  useEffect(() => {
    getSingleProductData(id);
  }, []);

 
  
  return (
    <StyleSingleProduct>
      {loadingSingleProduct ? (
        <div className="loading">
          <Loading />
        </div>
      ) : (
        <div>
          <PageNavigation title={name} />
          <div className="container">
            <div className="grid grid-two-column">
              <div className="singleproduct-images">
                <MyImgs imgs={image}/>
              </div>
           <div className="singleproduct-information">
                <h2>{name}--{category}</h2>
                <p>{stars}</p>
                <p>{reviews}</p>
                <p className="product-data-price">
              MRP:
              <del>
              <FormatPrice price={price + 250000} />
              </del>
            </p>
            <p className="product-data-price product-data-real-price">
              Deal of the Day:  <FormatPrice price={price} />
            </p>
                <p>{description}</p>
                <div className="product-data-warranty">
                  <div className="product-warranty-data">
                    <TbTruckDelivery className="warranty-icon" />
                    <p>Free Delivery</p>
                  </div>

                  <div className="product-warranty-data">
                    <TbReplace className="warranty-icon" />
                    <p>30 Days Replacement</p>
                  </div>

                  <div className="product-warranty-data">
                    <TbTruckDelivery className="warranty-icon" />
                    <p>Thapa Delivered </p>
                  </div>

                  <div className="product-warranty-data">
                    <MdSecurity className="warranty-icon" />
                    <p>2 Year Warranty </p>
                  </div>
                </div>
                <p>
                  Available :{" "}
                  <span>{stock > 0 ? "In Stock" : "Not Available"}</span>
                </p>
                <p>
                  ID : <span>{id}</span>
                </p>
                <p>
                  Brand : <span>{company}</span>
                </p>
                <hr/>
              <Button>Add To Cart</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </StyleSingleProduct>
  );
};

export default SingleProduct;
