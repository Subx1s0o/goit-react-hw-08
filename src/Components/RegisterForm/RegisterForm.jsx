import { Field, Form, Formik, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { register } from "../../redux/auth/operations";
import { form, button, label } from "./registerForm.module.css";
export default function RegisterForm() {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(15, "Too Long!")
      .required("Required")
      .matches(/^[A-Za-z\s]+$/, "Name can only contain english letters"),
    email: Yup.string()
      .min(4, "Too short!")
      .max(30, "Too Long!")
      .required("Required")
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Enter a valid email"
      ),
    password: Yup.string()
      .min(7, "Type more than 7 symbols!")
      .max(20, "Too Long!")
      .required("Required"),
  });

  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(register(values));
  };

  return (
    <div>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isValid, values }) => (
          <Form className={form}>
            <label className={label} htmlFor="username">
              Name
              <Field id="username" type="text" name="name" />
              <ErrorMessage name="name" component="div" />
            </label>

            <label className={label} htmlFor="email">
              Email
              <Field id="email" type="text" name="email" />
              <ErrorMessage name="email" component="div" />
            </label>

            <label className={label} htmlFor="password">
              Password
              <Field id="password" type="password" name="password" />
              <ErrorMessage name="password" component="div" />
            </label>

            <button
              className={button}
              type="submit"
              disabled={
                !isValid || !values.name || !values.email || !values.password
              }
            >
              Sign Up
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
