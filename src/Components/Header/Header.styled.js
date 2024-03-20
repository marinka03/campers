import styled from "styled-components";
import { theme } from "../../vars";
import { NavLink } from "react-router-dom";

export const StyledHeader = styled.header`
  background-color: ${theme.color.button};
  position: fixed;
  width: 100vw;
  height: 64px;
  top: 0;
`;

export const StyledContentWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
  font-weight: 600;
`;

export const StyledNavLink = styled(NavLink)`
  color: ${theme.color.white};
`;
