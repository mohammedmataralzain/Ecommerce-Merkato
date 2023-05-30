import styled from "styled-components";

export const StyledFooter = styled.footer`
  height: fit-content;
  background-color: ${({ theme }) => theme.colors.footer_bg};
  margin-top: 9rem;
  .contact-short {
    max-width: 75vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(-55%);

    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }
  footer {

    input {
      margin-bottom: 2rem;
    }

    h3 {
      margin-bottom: 2.8rem;
      color: ${({ theme }) => theme.colors.hr};
    }

    .footer-social--icons {
      display: flex;
      gap: 1.8rem;
    }

    .footer-social--icons div {
      padding: 0.9rem;
      border-radius: 50%;
      border: 2px solid ${({ theme }) => theme.colors.white};
      transition: 0.6s;
    }

    .footer-social--icons div .icons {
      color: ${({ theme }) => theme.colors.white};
      font-size: 2rem;
      cursor: pointer;
      transition: 0.6s;
    }

    .footer-social--icons div:hover,
    .footer-social--icons div .icons:hover {
      color: ${({ theme }) => theme.colors.btn};
      border-color: ${({ theme }) => theme.colors.btn};
    }

    p {
      color: ${({ theme }) => theme.colors.white};
    }

    .footer-bottom {
      padding-top: 9rem;
      padding-bottom: 2rem;

      hr {
        margin-bottom: 2rem;
        color: ${({ theme }) => theme.colors.hr};
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    margin-top: 20rem;

    .contact-short {
      max-width: 80vw;
      transform: translateY(-50%);
      text-align: center;

      .grid div:last-child {
        justify-self: center;
      }
    }
  }
`;

