import React from "react";
import { v4 as uuid } from 'uuid';
import {
  StyledHeader,
  NavList,
  StyledNavLink,
  StyledContentWrap,
} from "./Header.styled.js";
import { Link } from "react-router-dom";
import sprite from "../../assets/camper.svg";
import { theme } from "../../vars.js";

function Header() {
  return (
    <StyledHeader>
      <div className="container">
        <StyledContentWrap className="content">
          <Link to={"/"}>
            <div>
          <svg width={60} height={45} stroke={theme.color.light}>
            <use href={`${sprite}#camper`} />
          </svg>
          </div>
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
