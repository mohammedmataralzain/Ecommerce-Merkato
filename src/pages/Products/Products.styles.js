import styled from "styled-components";

export const Wrapper = styled.section`
    .filter-products-grid{
        display: grid;
        grid-template-columns: 0.2fr 1fr;
    }
    @media(max-width: ${({theme}) => theme.media.mobile}){
        .filter-products-grid{
            grid-template-columns: 1fr;
        }
    }

`