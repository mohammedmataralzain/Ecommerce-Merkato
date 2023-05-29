import { NavLink } from "react-router-dom"
import logo from "../../assets/logo.png";
import Nav from "../Nav/Nav";
import { MainHeader } from "./Header.styles";

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



export default Header