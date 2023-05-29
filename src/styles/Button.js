import styled from "styled-components";

export const Button = styled.button`
  background-color: rgb(98 84 243);
  color: white;
  text-decoration: none;
  max-width: auto;
  padding: 1.4rem 2.4rem;
  border: none;
  text-transform: uppercase;
  cursor: pointer;

  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;

  &:hover,
  &:active {
    box-shadow: 0 2rem 2rem 0 rgb(132 144 255 / 30%);
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: scale(0.96);
  }

  a {
    text-decoration: none;
    /* color: white; */
    font-size: 1.8rem;
  }
`;