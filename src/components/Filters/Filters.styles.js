import styled from "styled-components";

export const Wrapper = styled.section`
    padding: 0 5rem;
    .filter-search{
        position: relative;
    }
    .filter-search form input{
        padding: 0.7rem;
    }

    .icon{
        font-size: 2rem;
        position: absolute;
        right: 1rem;
        top: 50%;
        transform: translateY(-50%);
        color: ${({theme}) => theme.colors.border}
    }
`