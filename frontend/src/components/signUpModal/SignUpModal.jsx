import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./SignUpModal.css";
import closeIcon from "../../assets/cancel.svg";

const SignUpModal = ({ closeSignUpModal }) => {
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Некорректный email")
      .required("Email обязателен"),
    password: Yup.string()
      .min(8, "Пароль должен быть не менее 8 символов")
      .required("Пароль обязателен"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Пароли должны совпадать")
      .required("Подтверждение пароля обязательно"),
  });

  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  const handleSubmit = (values, { setSubmitting }) => {
    console.log("Sign Up Form submitted:", values);
    setSubmitting(false);
    closeSignUpModal();
  };

  return (
    <div className="signup-modal-overlay">
      <div className="signup-modal-content">
        <img
          src={closeIcon}
          alt="Close Icon"
          className="signup-modal-close-icon"
          onClick={closeSignUpModal}
        />
        <h2 className="signup-modal-title">Join Monocle</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="signup-modal-form">
              <div className="signup-input-wrapper">
                <Field
                  type="email"
                  name="email"
                  placeholder="email"
                  className="signup-modal-input"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="signup-error-message"
                />
              </div>
              <div className="signup-input-wrapper">
                <Field
                  type="password"
                  name="password"
                  placeholder="password"
                  className="signup-modal-input"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="signup-error-message"
                />
              </div>
              <div className="signup-input-wrapper">
                <Field
                  type="password"
                  name="confirmPassword"
                  placeholder="confirm password"
                  className="signup-modal-input"
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="signup-error-message"
                />
              </div>
              <button
                type="submit"
                className="signup-modal-signin-btn"
                disabled={isSubmitting}
              >
                Sign Up
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignUpModal;
