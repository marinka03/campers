import styled from "styled-components";
import { theme } from "../../vars";

export const TabWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 24px;
`;

export const TabContentWrap = styled.div`
  width: 430px;
  height: 530px;
`;

export const DetailsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const DetailsItem = styled.li`
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  font-size: 18px;
  color: ${theme.color.main};
`;

export const DetailsTitle = styled.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 120%;
  color: ${theme.color.main};
  padding-bottom: 24px;
  margin-bottom: 24px;
  border-bottom: ${theme.border.grey2};
`;
