import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  url: Yup.string()
    .url('Invalid ')
    .required('Required'),
});

const WelcomeForm = () => (
  <div>
    <h1>Hello!</h1>
    <Formik
      initialValues={{ name: '', url: '' }}
      validationSchema={SignupSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        errors,
        touched,
        isSubmitting,
        /* and other goodies */
      }) => (
        <Form>
          <Field type="text" name="name" />
          {errors.name && touched.name ? <div>{errors.name}</div> : null}
          <Field type="url" name="url" />
          {errors.url && touched.url ? <div>{errors.url}</div> : null}
          <button type="submit" disabled={isSubmitting}>
            Start
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default WelcomeForm;
