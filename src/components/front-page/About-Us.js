import React, { Component } from 'react'

export default class AboutUs extends Component {
    render() {
        return (
            <div className="container"
            style={{height: "80vh",
                    color: "black",
                    marginTop: "200px"
                        }}>
                <h1 className="border-bottom" style={{borderColor: "#38405F",}}>About Us</h1>
                <div className="row mt-4" >
                    <div className="col-lg-6">
                        <p>Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <div className="col-lg-6">
                        <img className="rounded-lg" src="/office-sample.jpeg" width="550px"  />
                    </div>
                </div>
            </div>
        )
    }
}
