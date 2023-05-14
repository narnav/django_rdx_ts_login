import React from 'react'
import { Link } from 'react-router-dom'

const MyNavbar = () => {
    return (
        <div>
            <div className="btn btn-info" role="alert">
                <Link to="/students">my Students—check it out!</Link>
            </div>
        <br></br>
            <div className="btn btn-light" role="alert">
                <Link to="/cars">my cars—check it out!</Link>
            </div>

        </div>
    )
}

export default MyNavbar