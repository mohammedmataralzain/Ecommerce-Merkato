import styled from "styled-components";

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 0.4fr 1fr;
  gap: 1rem;

  .grid {
    gap: 1rem;

    img {

      transition: scale 400ms;
      max-width: 100%;
      height: 100%;
      object-fit: cover;
      cursor: pointer;
      box-shadow: ${({ theme }) => theme.colors.shadow};

      &:hover {
        scale: 105%;
      }

    }
  }

  .main-screen {
    display: grid;
    place-items: center;
    transition: scale 400ms;
    img {
      max-width: 100%;
      height: auto;
      box-shadow: ${({ theme }) => theme.colors.shadow};
    }
    &:hover {
      scale: 102%;
    }
  }
  .grid-four-column {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    display: flex;
    flex-direction: column;
   

    .grid-four-column {
      grid-template-rows: 1fr;
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;
