import React from "react";
import Button from "../Button";
import {
  ErrorMsg,
  FormWrap,
  BookingForm,
  FormTitle,
  FormField,
  CommentTextarea,
} from "./Form.styled";
import { Formik } from "formik";
import * as Yup from "yup";

const BookingSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  date: Yup.date().required("Required"),
  comment: Yup.string(),
});

function Form() {
  return (
    <FormWrap>
      <div>
        <Formik
          initialValues={{
            name: "",
            email: "",
            date: "",
            comment: "",
          }}
          validationSchema={BookingSchema}
          onSubmit={async (values, actions) => {
            console.log(values);
            actions.resetForm();
          }}
        >
          <BookingForm>
            <FormTitle>Book your campervan now</FormTitle>
            <p style={{ marginBottom: "24px" }}>
              Stay connected! We are always ready to help you.
            </p>
            <label style={{ position: "relative" }}>
              <FormField id="name" name="name" placeholder="Name" />
              <ErrorMsg name="name" component="span" />
            </label>

            <label style={{ position: "relative" }}>
              <FormField
                id="email"
                name="email"
                placeholder="Email"
                type="email"
              />
              <ErrorMsg name="email" component="span" />
            </label>

            <label style={{ position: "relative" }}>
              <FormField
                id="date"
                name="date"
                placeholder="Booking date"
                type="date"
              />
              <ErrorMsg name="date" component="span" />
            </label>

            <CommentTextarea
              id="comment"
              component="textarea"
              name="comment"
              placeholder="Comment"
            />

            <Button text="Send" />
          </BookingForm>
        </Formik>
      </div>
    </FormWrap>
  );
}

export default Form;
