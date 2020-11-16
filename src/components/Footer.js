import React from 'react'

export default function Footer() {
    return (
        <div className="container-fluid  text-white py-5 mt-5" style={{background: "#0E131F",}}>
            <div className="row">
                <div className="col-sm-6">
                    <h3>3Sons System Limited</h3>
                    <p><strong>Address:</strong> 223300, bangladesh. < br/>
                    <strong>helpline:</strong> 203243335343 < br/>
                    <strong>Email:</strong> info@info.com
                    </p>
                </div>
                <div className="col-sm-6">
                    <ul style={{listStyleType:"none"}}>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms & Condition</a></li>
                        <li><a href="#">Bcs</a></li>
                    </ul>
                </div>
            </div>

        </div>
    )
}
