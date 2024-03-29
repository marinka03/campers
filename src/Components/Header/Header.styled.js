import styled from "styled-components";
import { theme } from "../../vars";
import { NavLink } from "react-router-dom";

export const StyledHeader = styled.header`
  background-color: #2f4858;
  position: fixed;
  width: 100vw;
  height: 64px;
  z-index: 99;
  top: 0;

`;

export const StyledContentWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  font-size: 20px;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 24px;
  font-weight: 600;

`;

export const StyledNavLink = styled(NavLink)`
  color: ${theme.color.light};
  font-size: 20px;
  @media (min-width: ${theme.breakpoint.md}){
    font-size: 25px;
  }
`;
