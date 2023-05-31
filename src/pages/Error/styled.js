import styled from "styled-components";

export const StyleError = styled.section`
  width: 50%;
  margin: 10% auto;
  text-align: center;
  section {
    font-size: 106px;
    font-family: "Catamaran", sans-serif;
    font-weight: 800;
    margin: 70px 15px;
    span {
      display: inline-block;
      position: relative;
    }
    span.four {
      width: 136px;
      height: 43px;
      border-radius: 999px;
      margin: 0 1rem;
      background: linear-gradient(
          140deg,
          ${({ theme }) => theme.colors.border} 0%,
          ${({ theme }) => theme.colors.border} 43%,
          transparent 44%,
          transparent 100%
        ),
        linear-gradient(
          105deg,
          transparent 0%,
          transparent 40%,
          ${({ theme }) => theme.colors.helper} 41%,
          ${({ theme }) => theme.colors.helper} 76%,
          transparent 77%,
          transparent 100%
        ),
        linear-gradient(
          to right,
          ${({ theme }) => theme.colors.helper},
          ${({ theme }) => theme.colors.helper}
        );
    }
    span.four:before,
    span.four:after {
      content: "";
      display: block;
      position: absolute;
      border-radius: 999px;
    }
    span.four:before {
      width: 43px;
      height: 156px;
      left: 60px;
      bottom: -43px;
      background: linear-gradient(
          128deg,
          ${({ theme }) => theme.colors.btn} 0%,
          ${({ theme }) => theme.colors.btn} 40%,
          transparent 41%,
          transparent 100%
        ),
        linear-gradient(
          116deg,
          ${({ theme }) => theme.colors.btn} 0%,
          ${({ theme }) => theme.colors.btn} 50%,
          transparent 51%,
          transparent 100%
        ),
        linear-gradient(
          to top,
          ${({ theme }) => theme.colors.btn},
          ${({ theme }) => theme.colors.btn},
          ${({ theme }) => theme.colors.btn},
          ${({ theme }) => theme.colors.btn},
          ${({ theme }) => theme.colors.btn}
        );
    }
    span.four:after {
      width: 137px;
      height: 43px;
      transform: rotate(-49.5deg);
      left: -18px;
      bottom: 36px;
      background: linear-gradient(
        to right,
        ${({ theme }) => theme.colors.btn},
        ${({ theme }) => theme.colors.btn},
        ${({ theme }) => theme.colors.btn},
        ${({ theme }) => theme.colors.btn},
        ${({ theme }) => theme.colors.btn}
      );
    }

    span.zero {
      vertical-align: text-top;
      width: 156px;
      height: 156px;
      border-radius: 999px;
      background: linear-gradient(
          -45deg,
          transparent 0%,
          rgba(0, 0, 0, 0.06) 50%,
          transparent 51%,
          transparent 100%
        ),
        linear-gradient(
          to top right,
          ${({ theme }) => theme.colors.btn},
          ${({ theme }) => theme.colors.btn},
          ${({ theme }) => theme.colors.btn},
          ${({ theme }) => theme.colors.btn},
          ${({ theme }) => theme.colors.btn},
          ${({ theme }) => theme.colors.btn},
          ${({ theme }) => theme.colors.btn}
        );
      overflow: hidden;
      animation: bgShadow 5s infinite;
      @media (max-width : 676px) {
      margin:  1.7rem 0;
        
      }
    }
    span.zero:before {
      content: "";
      display: block;
      position: absolute;
      transform: rotate(45deg);
      width: 90px;
      height: 90px;
      background-color: transparent;
      left: 0px;
      bottom: 0px;
      background: linear-gradient(
          95deg,
          transparent 0%,
          transparent 8%,
          rgba(0, 0, 0, 0.07) 9%,
          transparent 50%,
          transparent 100%
        ),
        linear-gradient(
          85deg,
          transparent 0%,
          transparent 19%,
          rgba(0, 0, 0, 0.05) 20%,
          rgba(0, 0, 0, 0.07) 91%,
          transparent 92%,
          transparent 100%
        );
    }
    span.zero:after {
      content: "";
      display: block;
      position: absolute;
      border-radius: 999px;
      width: 70px;
      height: 70px;
      left: 43px;
      bottom: 43px;
      background: #fdfaf5;
      box-shadow: -2px 2px 2px 0px rgba(0, 0, 0, 0.1);
    }
  }

  .screen-reader-text {
    position: absolute;
    top: -9999em;
    left: -9999em;
  }

  @keyframes bgShadow {
    0% {
      box-shadow: inset -160px 160px 0px 5px rgba(0, 0, 0, 0.4);
    }
    45% {
      box-shadow: inset 0px 0px 0px 0px rgba(0, 0, 0, 0.1);
    }
    55% {
      box-shadow: inset 0px 0px 0px 0px rgba(0, 0, 0, 0.1);
    }
    100% {
      box-shadow: inset 160px -160px 0px 5px rgba(0, 0, 0, 0.4);
    }
  }
`;
