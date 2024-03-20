import styled from "styled-components";
import { theme } from "../../vars";
import { NavLink } from "react-router-dom";

export const StyledHeader = styled.header`
  background-color: ${theme.color.button};
`;

export const StyledContentWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
  height: 64px;
  font-weight: 600;
`;
 
export const StyledNavLink = styled(NavLink)`
color: ${theme.color.white};
`
