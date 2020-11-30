import React, { Component } from 'react'

export default class Notes extends Component {
    render() {
        return (
            <div className="card mb-3">
                <form className="mx-auto">
                    <div className="form-group my-3 d-flex">
                        <input type="text" className="form-control mr-2" placeholder="search files..."/>
                        <button type="submit" className="btn btn-primary">Search</button>
                    </div>
                </form>
                <div className="card-body row mx-auto">
                    <div className="card col-lg p-2 m-2" style={{maxWidth: "150px"}}>
                        <img className="card-img-top"   src="pdf-icon.png" alt="file type" />
                        <h5 className="card-title">Physics notes 1</h5>    
                    </div> 

                    <div className="card col-lg p-2 m-2" style={{maxWidth: "150px"}}>
                        <img className="card-img-top"   src="pdf-icon.png" alt="file type" />
                        <h5 className="card-title">Physics notes 1</h5>    
                    </div>

                    <div className="card col-lg p-2 m-2" style={{maxWidth: "150px"}}>
                        <img className="card-img-top"   src="pdf-icon.png" alt="file type" />
                        <h5 className="card-title">Physics notes 1</h5>    
                    </div>

                    <div className="card col-lg p-2 m-2" style={{maxWidth: "150px"}}>
                        <img className="card-img-top"   src="pdf-icon.png" alt="file type" />
                        <h5 className="card-title">Physics notes 1</h5>    
                    </div>
                </div>
                
            </div>
        )
    }
}
