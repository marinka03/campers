import styled from "styled-components";
import { theme } from "../../vars";

export const StyledButton = styled.button`
  width: 173px;
  height: 56px;
  border: none;
  border-radius: 200px;
  padding: 0;
  background-color: ${theme.color.button};
  color: ${theme.color.white};
  cursor: pointer;
`;
