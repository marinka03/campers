import styled from "styled-components";
import { theme } from "../../vars";

export const StyledList = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`;

export const StyledItem = styled.li`
  width: fit-content;
  border-radius: 100px;
  padding: 12px 18px;
  height: 44px;
  background-color: ${theme.color.block_features};
`;
