import React from 'react'
import "./register.css";
import { Formik, } from 'formik';
import {Link} from 'react-router-dom';


class Register extends React.Component {
  render () {
    return (
      <div className="container-fluid register h-100" style={{marginTop: "10vh"}} >
        <div className="row">
          <div className="col-md-3 register-left">
            <img
              src="https://image.ibb.co/n7oTvU/logo_white.png"
              alt="welcome-logo" />
            <h3>Welcome</h3>
            <p>
              You are 30 seconds away from earning your own money!
            </p>
            <Link to="/register">Register Now</Link>
            <br />
          </div>
          <div className="col-md-9 register-right">

            <h1 style={{fontWeight: "bold", marginTop: "20px"}}>Login</h1>

            <Formik
            initialValues ={{
              email: '',
              password: '',
            }}

            validate={ values => {
              const errors ={};

              

              if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
                errors.email = "Invalid email address";
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
                        </div>

                        <Link to="#">Forgot your password ? </Link>

                        <Link to="/" className="btn btn-danger mr-3">Cancel</Link>
                        <button className="btn btn-primary " type="submit" disabled={isSubmitting}>
                          Login
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

