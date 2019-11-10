import React, { Component } from 'react';
import { Container, Row, Col,Form, FormControl, Button } from 'react-bootstrap';
import styled, { css } from 'styled-components';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const CONTAINER = styled.div`
  -webkit-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);

  label {
    color: #20FC8F;
    font-size: 1em;
    font-weight: 400;
  }

  .error {
    border: 2px solid #D81E5B;
  }

  .error-message {
    color: #D81E5B;
    padding: .5em .2em;
    height: 1em;
    position: absolute;
    font-size: .8em;
  }
  h1 {
    color: #20FC8F;
    padding-top: .5em;
  }
  .form-group {
    margin-bottom: 2.5em;
  }
`;

const MYFORM = styled(Form)`
  padding-top: 2em;
  padding-bottom: 2em;
  @media(min-width: 786px) {
    width: 50%;
  }
`;

const BUTTON = styled(Button)`
  background: #1863AB;
  border: none;
  font-size: 1.2em;
  font-weight: 400;
  &:hover {
    background: #1D3461;
  }
`;

// RegEx for phone number validation
const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/

// Schema for yup
const validationSchema = Yup.object().shape({
  name: Yup.string()
  .min(2, "*Names must have at least 2 characters")
  .max(100, "*Names can't be longer than 100 characters")
  .required("*Name is required"),
  email: Yup.string()
  .email("*Must be a valid email address")
  .max(100, "*Email must be less than 100 characters")
  .required("*Email is required"),
  message: Yup.string()
  .min(10, "*Message is too short")
  .max(300, "*Message is too long")
  .required("*Message is required")
});

const ContactForm = () => {
  return(
    <CONTAINER>
    <Formik
      initialValues={{ name:"", email:"", message: ""}}
      validationSchema={validationSchema}
      onSubmit={(values, {setSubmitting, resetForm}) => {
          // When button submits form and form is in the process of submitting, submit button is disabled
          setSubmitting(true);

          // Simulate submitting to database, shows us values submitted, resets form
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            resetForm();
            setSubmitting(false);
          }, 500);
      }}
    >
      {( {values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting }) => (
        <MYFORM onSubmit={handleSubmit} className="mx-auto">
          <Form.Group controlId="formName">
            <Form.Label>Name :</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              className={touched.name && errors.name ? "has-error" : null}
              />
              {touched.name && errors.name ? (
                <div className="error-message">{errors.name}</div>
              ): null}
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Email :</Form.Label>
            <Form.Control
              type="text"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              className={touched.email && errors.email ? "has-error" : null}
               />
               {touched.email && errors.email ? (
                 <div className="error-message">{errors.email}</div>
               ): null}
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message : </Form.Label>
            <Form.Control 
                as="textarea" 
                rows="6"
                name="message" 
                placeholder="Your Message"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message} 
                className={touched.message && errors.message ? "has-error" : null}
               />
               {touched.message && errors.message ? (
                 <div className="error-message">{errors.message}</div>
               ): null}
          </Form.Group>
          {/*Submit button that is disabled after button is clicked/form is in the process of submitting*/}
          <BUTTON variant="primary" type="submit" disabled={isSubmitting}>
            Submit
          </BUTTON>
        </MYFORM>
      )}
    </Formik>
    </CONTAINER>
  );
}

export default ContactForm;