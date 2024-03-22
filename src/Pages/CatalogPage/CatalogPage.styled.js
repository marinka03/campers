import styled from "styled-components";
import { theme } from "../../vars";

export const StyledContentWrap = styled.div`
  display: flex;
  gap: 64px;
  margin-top: 164px;
`;
// SIDEBAR
export const StyledSideBar = styled.aside`
  width: 360px;
  height: 740px;
`;

export const FilterLocation = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LocationInput = styled.input`
  position: relative;
  width: 360px;
  height: 56px;
  border-radius: 10px;
  padding: 18px 218px 18px 18px;
  background-color: ${theme.color.inputs};
  border: none;
`;

export const FilterWrapCategory = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
`;

export const FilterTitleCategory = styled.h3`
  padding-bottom: 24px;
  border-bottom: ${theme.border.grey2};
  margin-bottom: 24px;
`;

export const EquipmentList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
`;

export const EquipmentItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${theme.border.grey2};
  border-radius: 10px;
  width: 112px;
  height: 95px;
`;
