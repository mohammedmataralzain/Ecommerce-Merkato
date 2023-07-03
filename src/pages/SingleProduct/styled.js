import styled from "styled-components";

export const StyleSingleProduct = styled.section`
  
  .product-data-warranty {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
    margin-bottom: 1rem;

    .product-warranty-data {
      text-align: center;

      .warranty-icon {
        background-color: rgba(220, 220, 220, 0.5);
        border-radius: 50%;
        width: 4rem;
        height: 4rem;
        padding: 0.6rem;
      }
      p {
        font-size: 1.4rem;
        padding-top: 0.4rem;
      }
    }
  }
  span {
    color: ${({ theme }) => theme.colors.black};
    font-weight: bold;
  }

  hr {
    height: 0.5rem;
    background-color: ${({ theme }) => theme.colors.black};
    width: calc(100% - 5rem);
  }

  hr,
  p {
    margin: 2rem 0;
  }
  .product-data-price {
    font-weight: bold;
  }
  .product-data-real-price {
    color: ${({ theme }) => theme.colors.btn};
  }
  .singleproduct-images {
    display: flex;
    align-items: center;
  }
  .singleproduct-information .colors {
    display: flex;
    align-items: center;
    gap: 0.7rem;
  }
  
`;