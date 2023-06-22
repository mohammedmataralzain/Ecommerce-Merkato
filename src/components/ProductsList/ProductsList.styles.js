import styled from "styled-components";

export const Wrapper = styled.section`
    padding: 9rem 0;

    .container{
        max-width: 120rem;
        
    }

    .grid{
        gap: 3.2rem;
    }

    

    .card{
        background-color: ${({ theme }) => theme.colors.bg};
    }

    
`