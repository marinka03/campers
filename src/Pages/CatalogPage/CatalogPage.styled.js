import styled from "styled-components";
import { theme } from "../../vars";

export const StyledContentWrap = styled.section`
  display: flex;
  gap: 64px;
  margin-top: 164px;
  margin-bottom: 100px;
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
  width: 112px;
  height: 95px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border: ${theme.border.grey2};
  border-radius: 10px;
  cursor: pointer;
  padding: 8px 12px;

  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  text-align: center;

  &:hover,
  &:focus {
    border: ${theme.border.oranage};
  }
`;
