import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import css from './LoginForm.module.css';

const schema = yup.object().shape({
  name: yup.string().required("Ім'я обов'язкове"),
  phoneNumber: yup
    .string()
    .matches(
      /^(\+?3?8)?(0\d{9})$/,
      'The number should look like this: +380XXXXXXXXX'
    )
    .required("Номер телефону обов'язковий"),
});

const initialValues = {
  name: '',
  phoneNumber: '',
};

class LoginForm extends Component {
  render() {
    return (
      <Formik
        initialValues={initialValues}
        onSubmit={this.props.onSubmit}
        validationSchema={schema}
      >
        <Form className={css.addContactForm} autoComplete="off">
          <label>
            Name
            <Field className={css.contactInput} type="text" name="name" />
            <ErrorMessage name="name" component="div" />
          </label>

          <label>
            Number
            <Field className={css.contactInput} type="tel" name="phoneNumber" />
            <ErrorMessage name="phoneNumber" component="div" />
          </label>
          <button className={css.submitButton} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    );
  }
}

export default LoginForm;

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.exact({
    name: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
  }),
};
