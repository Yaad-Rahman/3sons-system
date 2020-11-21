import React from 'react'
import "./register.css";
import { Formik } from 'formik';

class Register extends React.Component {
  render () {
    return (
      <div className="container-fluid register h-100" >
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

            <h1 style={{fontWeight: "bold"}}>Register</h1>

            <Formik
            initialValues ={{
              username: '',
              email: '',
              password: '',
              confirm_password: '',
              gender: '',
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
                      <form onSubmit={handleSubmit}>

                        <input
                          type="text"
                          name="username"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.username}
                        />
                        {errors.username && touched.username && errors.username}


                        <input
                          type="email"
                          name="email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                        />
                        {errors.email && touched.email && errors.email}

                        <input
                          type="password"
                          name="password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.password}
                        />
                        {errors.password && touched.password && errors.password}

                        <input
                          type="password"
                          name="confirm_password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.confirm_password}
                        />
                        {errors.confirm_password && touched.confirm_password && errors.confirm_password}

                        <div>
                          <input type="radio" name="gender" value={values.gender === 'male'} />
                          <label for="male">Male</label>
                          <input type="radio" name="gender" value={values.gender === 'female'} />
                          <label for="female">Female</label>
                          
                        </div>

                        <input
                          type="textarea"
                          name="address"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.address}
                        />



                        <button type="submit" disabled={isSubmitting}>
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
