import React from "react";
import { theme } from "../../vars";
import Button from "../Button";
import {
  FormWrap,
  StyledFormInput,
  StyledCommentTextarea,
} from "./Form.styled";

function Form() {
  return (
    <FormWrap>
      <form>
        <p>Book your campervan now</p>
        <p style={{ marginBottom: "24px" }}>
          Stay connected! We are always ready to help you.
        </p>
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "14px",
            marginBottom: "24px",
          }}
        >
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
              cols="30"
              rows="10 "
              placeholder="Comment"
            ></StyledCommentTextarea>
          </li>
        </ul>
        <Button text="Send" />
      </form>
    </FormWrap>
  );
}

export default Form;
