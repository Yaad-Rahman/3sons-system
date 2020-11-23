import React from 'react';
import UserDetails from './UserDetails';
import Zoom from './Zoom';

const toggle = () => {
  
}


class Profile extends React.Component {
  state ={
    online: true,
  }
  render() {
    return (
      <div className="container" style={{marginTop: "10vh"}}>
      <div className="main-body">
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className="main-breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
            <li className="breadcrumb-item"><a href="javascript:void(0)">User</a></li>
            <li className="breadcrumb-item active" aria-current="page">User Profile</li>
          </ol>
        </nav>
        {/* /Breadcrumb */}
        <div className="row gutters-sm">
          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                  <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width={150} />
                  <div className="mt-3">
                    <h4>John Doe</h4>
                    <p className="text-secondary mb-1">Full Stack Developer</p>
                    <p className="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
                    <button className="btn btn-primary">Follow</button>
                    <button className="btn btn-outline-primary">Message</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mt-3">
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0"><img src="/zoom-icon.png" height="30"  className="mr-3"/>  Zoom</h6>
                  <span className="text-secondary">Join Meeting</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0"><i className="fa fa-youtube mr-3" aria-hidden="true" ></i>View Lectures</h6>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0"><i className="fa fa-sticky-note-o mr-3" aria-hidden="true" ></i>Class Notes</h6>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0"><i className="fa fa-book mr-3" aria-hidden="true" ></i>Results</h6>
                  
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0"><i className="fa fa-commenting-o mr-3" aria-hidden="true" ></i>Consult</h6>
                  <span className="text-secondary">consult with teachers</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-8">
            
                
            
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default Profile;
