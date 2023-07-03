import styled from "styled-components";

export const Wrapper = styled.section`
  .cart-heading {
    margin-top: 3.2rem;
  }

  .cart-heading > p {
    text-align: center;
  }

  // For the item column
  .cart-img-name {
    display: flex;
    gap: 1rem;
    /* justify-content: center; */
    align-items: center;
  }

  .cart-color {
    display: flex;
    align-items: center;
    gap: 0.6rem;
  }
  .color-style {
    width: 15px;
    height: 15px;
    border-radius: 50%;
  }

  .cart-img {
    width: 60px;
  }

  // For the price column
  .cart-price > p {
    color: rgba(29, 29, 29, 0.8);
    font-size: 1.8rem;
    line-height: 3;
    font-weight: 400;
    text-align: center;
  }

  // For quantity column
  .cart-button {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .amount-toggle {
    width: 16rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;

    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }

    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }

  // For the remove column
  .cart-remove {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .remove-icon {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.red};
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      color: ${({ theme }) => theme.colors.redDark};
      font-size: 1.8rem;
    }
  }

  // Empty cart
  .cart-empty {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 9rem;
  }
  .cart-empty > div {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5rem;
    font-size: 3.2rem;
  }
  .cart-items {
    margin-bottom: 4rem;
  }
  .cart-btn {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .clear-btn {
    background-color: red;
  }
  .cart-total {
    display: flex;
    align-items: end;
    justify-content: end;
    margin-top: 6rem;
  }
  .cart-total-info {
    background-color: rgb(246, 248, 250);
    border-radius: 1rem;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    width: fit-content;
    padding: 4rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    
    
    }
`;