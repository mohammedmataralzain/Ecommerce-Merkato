import styled from "styled-components";

export const Wrapper = styled.section`
    padding: 9rem 0;
    background-color: ${({theme}) => theme.colors.bg};
    margin-bottom: 18rem;
    h3{
        text-align: center;
        color: ${({theme}) => theme.colors.text};
        font-weight: bold;
        font-size: 2rem;
        text-transform: capitalize;
    }

    .brands{
        margin-top: 3.2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    img{
        height: 10rem;
        min-width: 10rem;
    }

    // Responsive with mobile
    @media (max-width: ${({ theme }) => theme.media.mobile}) {
        .brands{
            flex-direction: column;
        }
    }
`