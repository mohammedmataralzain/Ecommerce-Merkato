import { NavLink } from "react-router-dom"
import styled from "styled-components"
import logo from "../../assets/logo.png";
import Nav from "../Nav/Nav";

function Header() {
  return (
    <MainHeader>
        <NavLink to='/'>
            <img className="logo" src={logo} alt="logo" />
        </NavLink>
        <Nav/>
    </MainHeader>
  )
}

const MainHeader = styled.header`
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

export default Header