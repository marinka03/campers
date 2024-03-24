import styled from "styled-components";
import { theme } from "../../vars";

export const TabWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 24px;
  padding-top: 44px;
`;

export const UsersReviewsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const UserInfoWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
`;

export const StyledAvatarCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  background-color: ${theme.color.block_features};
  font-weight: 600;
  font-size: 24px;
  color: ${theme.color.button};
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
