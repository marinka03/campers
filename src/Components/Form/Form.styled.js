import { Form, Field, ErrorMessage } from "formik";
import styled from "styled-components";
import { theme } from "../../vars";

export const ErrorMsg = styled(ErrorMessage)`
  color: red;
  font-size: 12px;
  font-weight: 600;
  position: absolute;
  bottom: 2px;
  left: 20px;
`;

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

export const BookingForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 24px;
`;

export const FormField = styled(Field)`
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
export const CommentTextarea = styled(Field)`
  /* width: 400px; */
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
