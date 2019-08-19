import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  url: Yup.string()
    .url('Invalid ')
    .required('Required'),
});

interface FormValues {
  name: string;
  url: string;
}

const handleSubmit = (values: FormValues, { setSubmitting } : { setSubmitting: Function }) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
  }, 400);
};

const WelcomeForm = () => (
  <React.Fragment>
    <Container maxWidth="sm">
      <Formik initialValues={{ name: '', url: '' }} validationSchema={SignupSchema} onSubmit={handleSubmit}>
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

              <Button variant="contained" color="secondary" type="submit" disabled={isSubmitting}>
                Start
              </Button>
            </Form>
          );
        }}
      </Formik>
    </Container>
  </React.Fragment>
);

export default WelcomeForm;
