import React from 'react'

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
              <a href="#" className="btn btn-danger">See Details</a>
          </div>
      </div>
    )
  }
}

export default Course;
