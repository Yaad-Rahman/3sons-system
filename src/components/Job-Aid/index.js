import React, { Component } from 'react'
import FrontImage from '../front-page/Front-Image'
import {Link} from 'react-router-dom';

export default class JobAid extends Component {
    render() {
        return (
            <div>
                <FrontImage
                title="Job Aid"
                body="orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                />

                <div className="container rounded-lg p-4 text-white" 
                style={{zIndex: "2", marginTop: "-5vh", background: " #38405F"}} >
                    <h1>What You Will Lean</h1>
                    <ul style={{textAlign: "left"}}>
                      <li>orem ipsum dolor sit amet</li>
                      <li>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolo</li>
                      <li> Ut enim ad minim veniam, quis nostrud</li>
                    </ul>
                    <Link to="/register" className="btn btn-primary rounded-lg " style={{fontSize: "20px",}}>
                            <i class="fa fa-play-circle mr-2" aria-hidden="true"></i>
                            Enroll Now
                    </Link>
                </div>

            </div>
        )
    }
}
