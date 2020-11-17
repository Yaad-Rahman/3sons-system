import React from 'react'
import "./register.css";

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

            <form>

            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" class="form-control" />  
            </div>

            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" class="form-control" />
              <small id="emailHelp" class="form-text text-muted">Your Email will be safe</small>
            </div>

            </form>
            
          </div>
        </div>
      </div>

    )
  }
}

export default Register;
