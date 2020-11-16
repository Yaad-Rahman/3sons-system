import React, { Component } from 'react'

export default class ContactUs extends Component {
    render() {
        return (
            <div className="container"
            style={{height: "80vh",
                    color: "black",
                    marginTop: "200px"
                        }}>
                <h1 className="border-bottom" style={{borderColor: "#38405F",}}>Contact Us</h1>
                <div className="row mt-4" >
                    <div className="col-lg-6">
                        <p>Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <div className="row" style={{fontSize: "40px"}}>
                        <i class="col btn btn-danger fa fa-youtube m-3"  aria-hidden="true"></i>
                        <i class="col btn fa fa-envelope-o m-3" style={{backgroundColor: "#38405F", color: "white"}} aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="col-lg-6">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3634.3997713608305!2d88.59623371539656!3d24.3673926708417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fbefa91142bc05%3A0x6f6da975fd68d120!2s3%20Sons%20Systems%20Ltd.!5e0!3m2!1sen!2sbd!4v1605454624470!5m2!1sen!2sbd" width="550px" height="400px" frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </div>
                </div>
            </div>
        )
    }
}

