import React from "react";
import { Link } from "react-router-dom";


const Navbar = ({}) => {
    return (
        <div className="nav">
                <h1>Tsai's Projects</h1>
            <Link to="/">
                <h3>Home</h3>
            </Link>
        </div>
    )
}
export default Navbar