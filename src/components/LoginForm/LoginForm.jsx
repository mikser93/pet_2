import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const schema = yup.object().shape({
  login: yup.string().required(),
  password: yup.string().min(6).max(16).required(),
});

const initialValues = {
  login: '123',
  password: 'qwe',
};

export const LoginForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    // console.log(actions);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
        <label>
          Login
          <Field type="text" name="login" />
          <ErrorMessage name="login" />
        </label>
        <label>
          Password
          <Field type="password" name="password" />
          <ErrorMessage name="password" />
        </label>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
