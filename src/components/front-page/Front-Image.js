import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class FrontImage extends Component {
    render() {
        return (
            <div className="container-fluid mt-5"
                style={{backgroundImage:"url('sample2.jpg')",
                        height: "70vh",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        }}>
                    <div className="text-white"
                    style={{textAlign: "left",paddingTop: "30vh", paddingLeft: "1vw"}}>
                        <h1 className="font-weight-bold" >{this.props.title}</h1>
                        <p className=" w-50">{this.props.body}</p>
                        <Link to="/register" className="btn btn-primary rounded-lg " style={{fontSize: "20px",}}>
                            <i class="fa fa-play-circle mr-2" aria-hidden="true"></i>
                            Enroll Now
                        </Link>
                    </div>
                    
                </div>
        )
    }
}
