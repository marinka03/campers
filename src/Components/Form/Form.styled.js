import styled from "styled-components";
import { theme } from "../../vars";

export const FormWrap = styled.div`
  width: 448px;
  height: 542px;
  border: ${theme.border.grey2};
  padding: 24px;
  border-radius: 10px;
`;

export const StyledFormInput = styled.input`
  width: 100%;
  height: 56px;
  border: none;
  background-color: ${theme.color.inputs};
  padding: 18px;
  border-radius: 10px;
`;
export const StyledCommentTextarea = styled.textarea`
  width: 400px;
  height: 114px;
  border: none;
  background-color: ${theme.color.inputs};
  padding: 18px;
  border-radius: 10px;
`;
