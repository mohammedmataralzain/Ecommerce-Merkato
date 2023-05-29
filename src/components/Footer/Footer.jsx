import { Button } from "../../styles/Button";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { StyledFooter } from "./Styled";
const Footer = () => {
  return (
    <StyledFooter>

      <section className="contact-short">
        <div className="grid grid-two-column">
          <div>
            <h3>Ready to get started?</h3>
            <h3>Talk to us today</h3>
          </div>

          <div>
            <Button>
              <NavLink to="/Contact"> Get Started </NavLink>
            </Button>
          </div>
        </div>
      </section>

      <footer>
        <div className="container grid grid-four-column">
          <div className="footer-title">
            <h3>Mercato Store</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
          </div>
          <div className="footer-subscribe">
            <h3>Subscribe to get important updates</h3>
            <form action="#">
              <input type="email" name="email" placeholder="YOUR E-MAIL" />
              <Button>SUBSCRIBE</Button>
            </form>
          </div>
          <div className="footer-social">
            <h3>Follow Us</h3>
            <div className="footer-social--icons">
              <div>
                <FaDiscord className="icons" />
              </div>
              <div>
                <FaInstagram className="icons" />
              </div>
              <div>
                <FaYoutube className="icons" />
              </div>
            </div>
          </div>
          <div className="footer-contact">
            <h3>Call Us</h3>
            <a href="tel:12345678978">
              <h3>+91 12345678978</h3>
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <hr />
          <div className="container grid grid-two-column">
            <p>@{new Date().getFullYear()} By Mohammed Matar & Oday Telbany</p>
            <div>
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
          </div>
        </div>
      </footer>
    </StyledFooter>
  );
};

export default Footer;

