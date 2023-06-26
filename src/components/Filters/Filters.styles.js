import styled from "styled-components";

export const Wrapper = styled.section`
    padding: 0 5rem;

    // Search styles
    .filter-search{
        position: relative;
    }
    .filter-search form input{
        padding: 0.7rem;
        width: 100%;
    }
    .icon{
        font-size: 2rem;
        position: absolute;
        right: 1rem;
        top: 50%;
        transform: translateY(-50%);
        color: ${({theme}) => theme.colors.border}
    }

    // Filter styles
    h3 {
       padding: 5rem 0 2rem;
       /* font-weight: bold; */
       font-weight: 600;

    }

    .filter-category {
      div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 1.4rem;

        button {
          border: none;
          background-color: ${({ theme }) => theme.colors.white};
          text-transform: capitalize;
          cursor: pointer;

          &:hover {
            color: ${({ theme }) => theme.colors.btn};
          }
        }

        .active {
          border-bottom: 1px solid ${({theme}) => theme.colors.btn};
          color: ${({ theme }) => theme.colors.btn};
        }
      }
    }

    // Companies style
    .filter-company-select{
      padding: 0.3rem 1rem;
      font-size: 1.6rem;
      text-transform: capitalize;
      outline: none;
    }
`