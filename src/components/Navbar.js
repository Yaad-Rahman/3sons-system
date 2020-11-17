import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (

                <nav className="navbar navbar-expand-md navbar-dark fixed-top" style={{background: "#0E131F", }}>
                <div className="col">
                <a className="navbar-brand" href="/">3 Sons</a>
                </div>
                <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                      </button>

                <div className="col-sm-6 collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav navbar-right">
                <li className="nav-item">
                <a className="nav-link" href="/about-bcs">About BCS</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Link 2</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Link 3</a>
                </li>
                <li className="nav-item">
                <Link className="nav-link btn btn-primary rounded-pill px-3 text-white " to="/register">
                <i class="fa fa-play-circle mr-2" aria-hidden="true"></i>Join</Link>
                </li>
                <li className="nav-item">
                <a className="nav-link btn btn-outline-primary rounded-pill px-3 ml-3 " href="#">Login</a>
                </li>
                </ul>
                </div>

                </nav>


        )
    }
}
