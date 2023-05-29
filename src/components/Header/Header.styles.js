import styled from "styled-components";

export const MainHeader = styled.header`
background-color: ${({theme}) => theme.colors.bg};
height: 10rem;
padding: 0 4.8rem;
display: flex;
justify-content: space-between;
align-items: center;
position: relative;

.logo{
    height: 5rem;
}
`