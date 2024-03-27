import styled from "styled-components";
import { theme } from "../../vars";
import { NavLink } from "react-router-dom";

export const FooterContent = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 72px;
  width: 100%;
  height: 200px;
  padding-top: 40px;
  border-top: 2px solid ${theme.color.main};
`;

export const FooterLink = styled(NavLink)`
  font-size: 22px;
  font-weight: 600;
  color: ${theme.color.main};
  &:active {
    text-decoration: underline;
  }
`;
