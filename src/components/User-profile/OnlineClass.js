import React, { Component } from 'react'

export default class OnlineClass extends Component {
    render() {
        return (
            <div className="card mb-3">
                <div className="card-body">
                    <div className="card mb-2 flex-row align-items-center">
                        <i className="fa fa-youtube-play p-1 m-5" aria-hidden="true" style={{fontSize: "100px", color: "red"}}></i>
                        <div>
                            <h2 className="card-title mt-2">
                                sample class 1
                            </h2>
                            <p className="card-body text-muted">    
                                course contains ... ..

                            </p>
                        </div>
                    </div>

                    <div className="card">
                        <h2 className="card-title mt-2">
                            sample class 2
                        </h2>
                        <p className="card-body text-muted">    
                            course contains ... ..

                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
