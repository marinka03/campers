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

export const StyledImg = styled.img`
  object-fit: cover;
  height: 310px;
`;

export const WrapTitleCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
  font-weight: 600;
  font-size: 24px;
  color: ${theme.color.main};
  & h3 {
    font-weight: 600;
    font-size: 24px;
    line-height: 125%;
  }
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

export const StyledLike = styled.svg`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
