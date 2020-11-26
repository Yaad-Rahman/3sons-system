import React, { Component } from 'react'

export default class Zoom extends Component {
    render() {
        return (
            <div className="card mb-3">
                <div className="card-body">
                    <h1 className="text-mute">Click the icon to join the meeting</h1>
                    <a href="www.google.com"><img src="/zoom-icon.png" /></a>
                </div>
             
            </div>
        )
    }
}
