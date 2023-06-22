import styled from "styled-components";

export const Wrapper = styled.section`
    padding: 9rem 0;

    .container{
        max-width: 120rem;
        
    }

    .card{
        background-color: ${({ theme }) => theme.colors.bg};
    }

    /* for the grid view  */
    .grid{
        gap: 3.2rem;
    }


    /* for the list view  */
    .flex{
        display: flex;
        flex-direction: column;
        gap: 3.2rem;


    }
    

   

    
`