import React from "react";
// import logo from 'src/assets/logo/logo.png'
import {
  StyledHeader,
  NavList,
  StyledNavLink,
  StyledContentWrap,
} from "./Header.styled.js";
import { Link } from "react-router-dom";

function Header() {
  return (
    <StyledHeader>
      <div className="container">
        <StyledContentWrap className="content">
          <Link to={"/"}>
            <span>Logo</span>
          </Link>

          <nav>
            <NavList>
              <li key={1}>
                <StyledNavLink to={"/"}>Home</StyledNavLink>
              </li>
              <li key={2}>
                <StyledNavLink to={"/catalog"}>Catalog</StyledNavLink>
              </li>
              <li key={3}>
                <StyledNavLink to={"/favorites"}>Favorites</StyledNavLink>
              </li>
            </NavList>
          </nav>
        </StyledContentWrap>
      </div>
    </StyledHeader>
  );
}

export default Header;
