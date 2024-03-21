import styled from "styled-components";
import { theme } from "../../vars";

export const StyledContentWrap = styled.div`
  display: flex;
  /* align-items: center; */
  gap: 64px;
  margin-top: 164px;
`;
// SIDEBAR
export const StyledSideBar = styled.aside`
  border: ${theme.border.oranage};
  width: 360px;
  height: 740px;
`;

export const FilterLocation = styled.div`
  display: flex;
  flex-direction: column;
`

export const LocationInput = styled.input`
width: 360px;
height: 56px;
border-radius: 10px;
padding: 18px 218px 18px 18px;
background-color: ${theme.color.inputs};
border: none;
`