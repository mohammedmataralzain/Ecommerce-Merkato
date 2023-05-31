import styled from "styled-components";

export const Wrapper = styled.section`

  h2 {
    margin-top: 6rem;
    text-align: center;
  }

  .contact-form {
    max-width: 50rem;
    margin: 2rem auto;
    display: flex;
    flex-direction: column;
    padding: 0 2rem;

    input,
    textarea {
      width: 100%;
      margin-top: 2rem;
    }

    textarea {
      resize: vertical;
    }

    button,
    input,
    textarea {
      margin-top: 2rem;
    }

    button {
      margin-bottom: 2rem;
    }
  }
`;
