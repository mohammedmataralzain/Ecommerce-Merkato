import styled from "styled-components";

export const Wrapper = styled.section`
    display: flex;
    justify-content: space-between;
    max-width: 120rem;

    .grid-list-toggle{
        display: flex;
        gap: 2rem;


        .view_btn{
            padding: 0.8rem 1rem;
            background-color: ${({theme}) => theme.colors.main};
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
        background-color: ${({theme}) => theme.colors.main};
        padding: 0.5rem 0;
        outline: none;

        option{
            cursor: pointer;
            padding: 0.5rem 0;
            height: 2rem;
            /* padding: 10px; */
        }
    }
`