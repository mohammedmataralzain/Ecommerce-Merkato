/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import { Wrapper } from "./HeroSection.styles";
import { Button } from "../../styles/Button";
import PropTypes from 'prop-types';

function HeroSection({ data }) {
  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-data">
            <p className="intro">Welcom to</p>
            <h1>{data.name}</h1>
            <p>
             {data.heroBody}
            </p>
            <NavLink>
              <Button>
                {data.btnTitle}
              </Button>
            </NavLink>
          </div>

          <div className="hero-img">
            <img className="img-style" src={data.img} alt="hero-photo" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}


HeroSection.proptypes = {
  name: PropTypes.node,
};

export default HeroSection;
