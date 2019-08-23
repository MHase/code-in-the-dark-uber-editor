import React, { useCallback, useContext } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { navigate, RouteComponentProps } from '@reach/router';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

import { StorageContext } from '../../context/storage';

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

const WelcomeForm: React.SFC<RouteComponentProps> = () => {
  const { state, dispatch } = useContext(StorageContext);
  const { name, url } = state;

  const initialValues = {
    name,
    url,
  };

  const handleSubmit = useCallback((values: FormValues, { setSubmitting }: { setSubmitting: Function }) => {
    dispatch({ type: 'updateName', payload: values.name });
    dispatch({ type: 'updateUrl', payload: values.url });

    setSubmitting(false);
    navigate('/editor');
  }, []);

  return (
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
                className="Welcome__btn"
                variant="contained"
                color="secondary"
                type="submit"
                disabled={isSubmitting}
                size="large"
              >
                Start
              </Button>
            </Form>
          );
        }}
      </Formik>
    </Container>
  );
};

export default WelcomeForm;
