import React, { useCallback } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

import { FormValues } from './types';

import './index.scss';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  url: Yup.string()
    .url('Invalid ')
    .required('Required'),
});

const initialValues = {
  name: window.localStorage.getItem('name') || '',
  url: window.localStorage.getItem('url') || '',
};

const WelcomeForm = ({ ...props }) => {
  const handleSubmit = useCallback((values: FormValues, { setSubmitting }: { setSubmitting: Function }) => {
    window.localStorage.setItem('name', values.name);
    window.localStorage.setItem('url', values.url);
    setSubmitting(false);
    props.history.push('/editor');
  }, []);

  return (
    <React.Fragment>
      <Container maxWidth="sm" className="Welcome__container">
        <Formik initialValues={initialValues} validationSchema={SignupSchema} onSubmit={handleSubmit}>
          {({ values: { name, url }, errors, touched, isSubmitting, handleBlur, handleChange }) => {
            return (
              <Form>
                <TextField
                  type="text"
                  name="name"
                  label="Name"
                  value={name}
                  error={touched.name && Boolean(errors.name)}
                  helperText={touched.name && errors.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  type="url"
                  name="url"
                  label="Url"
                  value={url}
                  error={touched.url && Boolean(errors.url)}
                  helperText={touched.url && errors.url}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  fullWidth
                  margin="normal"
                />

                <Button
                  variant="contained"
                  color="secondary"
                  type="submit"
                  disabled={isSubmitting}
                  size="large"
                  className="Welcome__btn"
                >
                  Start
                </Button>
              </Form>
            );
          }}
        </Formik>
      </Container>
    </React.Fragment>
  );
};

export default WelcomeForm;
