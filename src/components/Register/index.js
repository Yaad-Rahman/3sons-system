import React from 'react'
import "./register.css";
import { Formik, Field } from 'formik';
import {Link} from 'react-router-dom';
import Footer from '../Footer';

class Register extends React.Component {
  render () {

    return (
      <div className="container-fluid register h-100" style={{marginTop: "10vh"}} >
        <div className="row">
          <div className="col-md-3 register-left">
            <img
              src="https://image.ibb.co/n7oTvU/logo_white.png"
              alt />
            <h3>Welcome</h3>
            <p>
              You are 30 seconds away from earning your own money!
            </p>
            <input type="submit" name defaultValue="Login" />
            <br />
          </div>
          <div className="col-md-9 register-right">

            <h1 style={{fontWeight: "bold", marginTop: "20px"}}>Register</h1>

            <Formik
            initialValues ={{
              username: '',
              email: '',
              password: '',
              confirm_password: '',
              gender: 'Male',
              address: '',
            }}

            validate={ values => {
              const errors ={};

              if(values.username.length < 2){
                errors.username = "Too Short";
              } else if (values.username.length > 10){
                errors.username = "Too Long";
              }

              if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
                errors.email = "Invalid email address";
              }

              if(values.password.length < 5){
                errors.password = "Password too short";
              } else if (values.password.length > 10){
                errors.password = "Password too Long";
              }

              if(values.confirm_password != values.password){
                errors.confirm_password = "Password not matched !";
              }

              return errors;

            }}

            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
            >

              {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                      /* and other goodies */
                    }) => (
                      <form onSubmit={handleSubmit} className="p-5">

                        <div className="form-group">
                          <label for="username">Username</label>
                          <input
                            className="form-control"
                            type="text"
                            name="username"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.username}
                          />
                          <small className="form-text text-danger">{errors.username && touched.username && errors.username}</small> 
                        </div>

                        <div className="form-group">
                        <label for="email">Email</label>
                          <input
                            className="form-control"
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                          />
                          <small className="form-text text-danger">{errors.email && touched.email && errors.email}</small> 
                        </div>

                        <div className="form-group">
                        <label for="password">Password</label>
                          <input
                            className="form-control"
                            type="password"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                          />
                          <small className="form-text text-danger">{errors.password && touched.password && errors.password}</small> 
                        </div>


                        <div className="form-group">
                        <label for="confirm_password">Confirm Password</label>
                          <input
                            className="form-control"
                            type="password"
                            name="confirm_password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.confirm_password}
                          />
                         <small className="form-text text-danger">{errors.confirm_password && touched.confirm_password && errors.confirm_password}</small> 
                        </div>

                        <div role="group" aria-labelledby="my-radio-group">
                          <label>
                            <Field type="radio" name="gender" value="Male" />
                            Male
                          </label>
                          <label>
                            <Field type="radio" name="gender" value="Female" />
                            Female
                          </label>
                          
                        </div>

                        <div className="form-group flex">
                        <label for="address">Address</label>
                          <input
                            className="form-control"
                            type="textarea"
                            name="address"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.address}
                          />
                        </div>

                        <Link to="/" className="btn btn-danger mr-3">Cancel</Link>
                        <button className="btn btn-primary " type="submit" disabled={isSubmitting}>
                          Submit
                        </button>
                      </form>
                    )}
                  </Formik>
            
          </div>
        </div>
      </div>

    )
  }
}

export default Register;
