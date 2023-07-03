import styled from "styled-components";

export const Wrapper = styled.section`
    .cart-heading{
        margin-top: 3.2rem;
    }

    .cart-heading > p{
        text-align: center;
    }

    .cart-img-name{
        display: flex;
        gap: 1rem;
        /* justify-content: center; */
        align-items: center;
    }
    
    .cart-color{
        display: flex;
        align-items: center;
        gap: 0.6rem;

    }
    .color-style{
        width: 15px;
        height: 15px;
        border-radius: 50%;
    }

    .cart-img{
        width: 60px;
    }

    .cart-price > p{
        color: rgba(29, 29, 29, 0.8);
        font-size: 1.65rem;
        line-height: 3;
        font-weight: 400;
        text-align: center;
    }

    .cart-button{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .amount-toggle {
        width: 16rem;
        display: flex;
        justify-content: space-around;
        /* gap: 5rem; */
        
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

    .cart-remove{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .remove-icon{
        font-size: 1.6rem;
        color: ${({theme}) => theme.colors.red};
    }
`