import React from 'react'
import { Link } from 'react-router-dom';

class Course extends React.Component {
  render () {
    const color= this.props.color;
    return(
      <div className="card col-lg m-2" style={{height: "300px", backgroundColor: color, color: "white"}}>
          <div className="card-body">
              <i className={`card-title ${this.props.icon}`} style={{fontSize: "30px"}}></i>
              <h3 className="card-title" style={{fontWeight: "bold"}}>{this.props.heading}</h3>
              <p className="card-text">
                  <ul style={{textAlign: "left"}}>
                      <li>{this.props.detail}</li>
                      <li>{this.props.detail2}</li>
                      <li>{this.props.detail3}</li>
                  </ul>
              </p>
              <Link to={this.props.link} className="btn btn-danger">See Details</Link>
          </div>
      </div>
    )
  }
}

export default Course;
