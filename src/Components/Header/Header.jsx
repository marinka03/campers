import React from "react";
import { v4 as uuid } from 'uuid';
import {
  StyledHeader,
  NavList,
  StyledNavLink,
  StyledContentWrap,
  Logo
} from "./Header.styled.js";
import { Link } from "react-router-dom";

function Header() {
  return (
    <StyledHeader>
      <div className="container">
        <StyledContentWrap className="content">
          <Link to={"/"}>
            <Logo></Logo>
          </Link>

          <nav>
            <NavList>
              <li key={uuid()}>
                <StyledNavLink to={"/"}>Home</StyledNavLink>
              </li>
              <li key={uuid()}>
                <StyledNavLink to={"/catalog"}>Catalog</StyledNavLink>
              </li>
              <li key={uuid()}>
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
