import React from "react";
import "./SignInModal.css";
import closeIcon from "../../assets/cancel.svg";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignInModal = ({ closeSignInModal, openSignUpModal }) => {
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Некорректный email")
      .required("Email обязателен"),
    password: Yup.string()
      .min(8, "Пароль должен быть не менее 8 символов")
      .required("Пароль обязателен"),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values, { setSubmitting }) => {
    console.log("Sign In Form submitted:", values);
    setSubmitting(false);
    closeSignInModal();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <img
          src={closeIcon}
          alt="Close Icon"
          className="modal-close-icon"
          onClick={closeSignInModal}
        />
        <h2 className="modal-title">Join Monocle</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="modal-form">
              <div className="input-wrapper">
                <Field
                  type="email"
                  name="email"
                  placeholder="email"
                  className="modal-input"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="error-message"
                />
              </div>
              <div className="input-wrapper">
                <Field
                  type="password"
                  name="password"
                  placeholder="password"
                  className="modal-input"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error-message"
                />
              </div>
              <button
                type="submit"
                className="modal-signin-btn"
                disabled={isSubmitting}
              >
                Sign In
              </button>
            </Form>
          )}
        </Formik>
        <div
          className="modal-signup-text"
          onClick={openSignUpModal}
          style={{ cursor: "pointer" }}
        >
          Sign Up
        </div>
      </div>
    </div>
  );
};

export default SignInModal;
