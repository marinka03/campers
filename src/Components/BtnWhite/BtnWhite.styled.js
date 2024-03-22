import styled from "styled-components";
import { theme } from "../../vars";

export const StyledBtnWhite = styled.button`
width: 173px;
  height: 56px;
  border: ${theme.border.grey2};
  border-radius: 200px;
  margin-top: 50px;
  padding: 0;

  color: ${theme.color.main};
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    border: ${theme.border.oranage };
  }
`