import { NavLink } from "react-router-dom";
import { PageNavigationStyle } from "./Styled";

// eslint-disable-next-line react/prop-types
const PageNavigation = ({ title }) => {
  return (
    <PageNavigationStyle>
      <NavLink to="/">Home /&nbsp;</NavLink>
      <span> {title}</span>
    </PageNavigationStyle>
  );
};

export default PageNavigation;
