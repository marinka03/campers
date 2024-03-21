import styled from "styled-components";
import { theme } from "../../vars";

export const StyledItem = styled.li`
  display: flex;
  gap: 24px;
  border: ${theme.border.grey2};
  border-radius: 20px;
  padding: 24px;
  width: 888px;
  height: 358px;
`;

export const WrapTitleCard = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 24px;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const ReviewLocationWrap = styled.div`
  display: flex;
  gap: 16px;
`;

export const ReviewWrap = styled.div`
  display: flex;
`;

export const ShortDescription = styled.p`
  margin-bottom: 24px;
`;

export const PriceWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;