import styled from "styled-components";

export const Wrapper = styled.section`
    display: flex;
    justify-content: space-between;
    max-width: 120rem;

    .grid-list-toggle{
        display: flex;
        gap: 2rem;


        .view_btn{
            padding: 0.7rem 1rem;
            background-color: ${({theme}) => theme.colors.bg};
            border: none;
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;

        }
        .icon{
            font-size: 1.6rem;
        }
        
        .active{
            background-color: ${({theme}) => theme.colors.black};
            color: white;
        }
        
    }

    .product-info{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.2rem;
    }
    
    .sort-selection select{
        padding: 0.6rem 0;
        outline: none;
        border: 1px solid ${({theme}) => theme.colors.border};

        option{
            cursor: pointer;
            padding: 5rem 0 !important;
            height: 2rem;
            /* padding: 10px; */

        }
    }
`