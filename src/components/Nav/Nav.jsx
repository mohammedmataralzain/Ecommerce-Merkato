import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi"
import { CgMenu, CgClose } from "react-icons/cg";
import { useState } from "react";
import { Navbar } from "./Nav.styles";

function Nav() {
  const [menuIcon, setMenuIcon] = useState(false);

  return (
    <Navbar>
      <div className={menuIcon ? "navbar active" : "navbar"}>
        <ul className="navbar-lists">
          <li>
            <NavLink to="/" className="navbar-link ome-link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/About" className="navbar-link ">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/Products" className="navbar-link ">
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="navbar-link ">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" className="navbar-link cart-trolley--link">
              <FiShoppingCart className="cart-trolley" />
              {/* This is static just for testing  */}
              <span className="cart-total--item">8</span>
            </NavLink>
          </li>
        </ul>

        {/* Toggle the mobile menu  */}
        <div className="mobile-navbar-btn">
          <CgMenu 
            name="menu-outline" 
            className="mobile-nav-icon" 
            onClick={() => setMenuIcon(true)}
            />
          <CgClose
            name="close-outline"
            className="mobile-nav-icon close-outline"
            onClick={() => setMenuIcon(false)}
            />
        </div>
      </div>
    </Navbar>
  );
}




export default Nav