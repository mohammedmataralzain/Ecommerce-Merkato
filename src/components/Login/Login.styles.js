import styled from "styled-components";

export const Wrapper = styled.section`
    background:linear-gradient(to right, #8490ff 0%, #8490ff 50%, #0a1435 50%, #0a1435 100%);
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    
    .login-form {
      background-color: #fff;
      padding: 2.6rem;
      border-radius: 5px;
      box-shadow: 0 0 1rem rgba(0, 0, 0, 0.3);
    }
    
    .login-form h2 {
      text-align: center;
      color: #0a1435;
      font-weight: bold;
      margin-bottom: 1rem;
    }
    
    .login-form input[type="text"],
    .login-form input[type="password"] {
      font-size: 1.6rem;
      width: 100%;
      padding: 1rem;
      margin-bottom: 1rem;
      border: none;
      border-radius: 3px;
    }

    .toSignUp{
      margin: -0.2rem 0 1rem 1rem;
    }
    .toSignUp span:first-child{
      color: grey;
      font-size: 1.2rem;
    }
    .toSignUp span:last-child{
      color: #0a1435;
      font-size: 1.4rem;
      font-weight: bold;
      cursor: pointer;
    }
    
    .login-form button[type="submit"] {
      width: 100%;
      padding: 1rem;
      border: none;
      border-radius: 3px;
      background-color: #8490ff;
      color: #fff;
      font-weight: bold;
      cursor: pointer;
    }

    .login-form .break {
      width: 100%;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .login-form .break > span{
      font-size: 2rem;
      display: block;
      width: fit-content;
      margin-left: auto;
      margin-right: auto;
      text-align: center;
      color: #0a1435;
      font-weight: bold;
      position: relative;
      margin: 1rem 0;
    }

    .login-form .break > span::after{
        content: "";
        background-color: #0a1435;
        width: 60px;
        height: 1px;
        position: absolute;
        top: 60%;
        left:-61px;
      }
      
      
      .login-form .break > span::before{
        content: "";
        background-color: #0a1435;
        width: 60px;
        height: 1px;
        position: absolute;
        top: 60%;
        right: -61px;
    }


    .signInWithGoogle{
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        background: white !important;
        color: black !important;
        color: ${({ theme }) => theme.colors.black};
        padding: 1rem;
        border: 1px solid ${({ theme }) => theme.colors.border};
        box-shadow: ${({ theme }) => theme.colors.shadowSupport};
        border-radius: 3px;
        cursor: pointer;
    }

    .signInWithGoogle > img {
        width:25px;
        height:25px;
        margin-right: 1rem;
    } 
`