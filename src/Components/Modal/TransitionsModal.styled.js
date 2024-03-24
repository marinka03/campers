import styled from "styled-components";
import { theme } from "../../vars";

export const CardName = styled.p`
font-weight: 600;
font-size: 24px;
line-height: 125%;
color: ${theme.color.main}`

export const ReviewLocationWrap = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
`;

export const GallaryList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 16px;
`;

export const GallaryItem = styled.li`
  display: flex;
  border-radius: 20px;
  width: 290px;
  height: 310px;
  overflow: hidden;
`;

export const GallaryImg = styled.img`
  width: 290px;
  height: 310px;
  object-fit: none;
`;
export const StyledPrice = styled.span`
  display: block;
  font-weight: 600;
  font-size: 24px;
  line-height: 125%;
  margin-bottom: 24px;
  color: ${theme.color.main};
`;
