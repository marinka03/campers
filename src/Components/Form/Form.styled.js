import styled from "styled-components";
import { theme } from "../../vars";

export const FormWrap = styled.div`
  width: 448px;
  height: 542px;
  border: ${theme.border.grey2};
  padding: 24px;
  border-radius: 10px;
`;

export const FormTitle = styled.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 120%;
  margin-bottom: 8px;
`;
export const FormSubTitle = styled.p`
  margin-bottom: 24px;
`;

export const FormList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 24px;
`;

export const StyledFormInput = styled.input`
  width: 100%;
  height: 56px;
  border: none;
  background-color: ${theme.color.inputs};
  padding: 18px;
  border-radius: 10px;
  &:hover,
  &:focus {
    outline: none;
    border: 2px solid ${theme.color.button};
  }
`;
export const StyledCommentTextarea = styled.textarea`
  width: 400px;
  height: 114px;
  border: none;
  background-color: ${theme.color.inputs};
  padding: 18px;
  border-radius: 10px;
  &:hover,
  &:focus {
    outline: none;
    border: 2px solid ${theme.color.button};
  }
`;
