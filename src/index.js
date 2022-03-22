import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css"
import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom";

import Header from "./structure/Header"
import Main from "./structure/Main"
//import Footer from "./structure/Footer"

const MyWebsite = ({}) => {
    return (
        <div className="body">
            <BrowserRouter>
                <Header/>
                <Main />
            </BrowserRouter>
        </div>
    )
}

ReactDOM.render(<MyWebsite />,document.getElementById("myWebsite"))

