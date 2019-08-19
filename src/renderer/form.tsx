import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    btn: {
      marginTop: theme.spacing(2),
    },
  }),
);

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

const initialValues = {
  name: window.localStorage.getItem('name') || '',
  url: window.localStorage.getItem('url') || '',
};

const handleSubmit = (values: FormValues, { setSubmitting }: { setSubmitting: Function }) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
  }, 400);
  window.localStorage.setItem('name', values.name);
  window.localStorage.setItem('url', values.url);
};

const WelcomeForm = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container maxWidth="sm" className={classes.container}>
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
                  className={classes.btn}
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
