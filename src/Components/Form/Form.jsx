import React from "react";
import Button from "../Button";
import {
  FormWrap,
  FormList,
  FormTitle,
  StyledFormInput,
  StyledCommentTextarea,
} from "./Form.styled";

function Form() {
  return (
    <FormWrap>
      <form>
        <FormTitle>Book your campervan now</FormTitle>
        <p style={{ marginBottom: "24px" }}>
          Stay connected! We are always ready to help you.
        </p>
        <FormList>
          <li>
            <StyledFormInput
              type="text"
              name="name"
              id="name"
              required
              placeholder="Name"
            />
          </li>
          <li>
            <StyledFormInput
              type="email"
              name="email"
              id="email"
              required
              placeholder="Email"
            />
          </li>
          <li>
            <StyledFormInput
              type="date"
              name="date"
              id="date"
              required
              placeholder="Booking date"
            />
          </li>
          <li>
            <StyledCommentTextarea
              name="comment"
              id="comment"
              required
              placeholder="Comment"
            ></StyledCommentTextarea>
          </li>
        </FormList>
        <Button text="Send" />
      </form>
    </FormWrap>
  );
}

export default Form;
