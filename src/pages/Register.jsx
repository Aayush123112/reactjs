import React from 'react'
import { Formik,Form,Field,ErrorMessage } from 'formik'
import * as yup from 'yup'

const Register = () => {
  return (
    <>
      <Formik
        initialValues={{
          firstname: "",
          lastname: "",
          email: "",
          password: "",
          cpassword: "",
        }}
        validationSchema={yup.object({
          firstname: yup
            .string()
            .required("First Name is mandatory")
            .max(20, "must be of 20 characters or less"),
          lastname: yup
            .string()
            .required("last Name is mandatory")
            .max(20, "must be of 20 characters or less"),
          email: yup
            .string()
            .email("invalid email format")
            .required("email is mandatory"),
          cpassword: yup
            .string()
            .required("Confirm password is mandatory")
            .oneOf([yup.ref('password'),null],'password and confirm password doesnot match')
            
        })}
      >
        <div className="container my-4">
          <div className="row d-flex justify-content-center">
            <div className="col-md-5 shadow-lg">
              <Form>
                <div className="mb-2">
                  <label htmlFor="firstname">FirstName</label>
                  <Field
                    type="text"
                    name="firstname"
                    id="firstname"
                    className="form-control"
                  />
                  <ErrorMessage name="firstname">
                    {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                  </ErrorMessage>
                </div>
                <div className="mb-2">
                  <label htmlFor="lastname">LastName</label>
                  <Field
                    type="text"
                    name="lastname"
                    id="lastname"
                    className="form-control"
                  />
                  <ErrorMessage name="lastname">
                    {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                  </ErrorMessage>
                </div>
                <div className="mb-2">
                  <label htmlFor="email">Email</label>
                  <Field
                    type="text"
                    name="email"
                    id="email"
                    className="form-control"
                  />
                  <ErrorMessage name="email">
                    {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                  </ErrorMessage>
                </div>
                <div className="mb-2">
                  <label htmlFor="password">Password</label>
                  <Field
                    type="text"
                    name="password"
                    id="password"
                    className="form-control"
                  />
                  <ErrorMessage name="password">
                    {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                  </ErrorMessage>
                </div>
                <div className="mb-2">
                  <label htmlFor="cpassword">Confirm Password</label>
                  <Field
                    type="text"
                    name="cpassword"
                    id="cpassword"
                    className="form-control"
                  />
                  <ErrorMessage name="cpassword">
                    {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                  </ErrorMessage>
                </div>
                <button className="btn btn-primary">Register</button>
              </Form>
            </div>
          </div>
        </div>
      </Formik>
    </>
  );
}

export default Register