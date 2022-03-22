import React from "react";
import ListData from "../components/ListData";
import { Routes, Route } from "react-router-dom";
import P1 from "../projects/project1/P1"
import P2 from "../projects/project2/P2"
import P3 from "../projects/project3/P3"
import P4 from "../projects/project4/P4"
import P5 from "../projects/project5/P5"
import P6 from "../projects/project6/P6"
import P7 from "../projects/project7/P7"
import P8 from "../projects/project8/P8"
import P9 from "../projects/project9/P9"
import P10 from "../projects/project10/P10"
import P11 from "../projects/project11/P11"

const Main = ({}) => {
    return (
        <div className="main">
            <Routes>
                <Route exact path="/" element={<ListData />} />
                <Route exact path="/project1" element={<P1 />} />
                <Route exact path="/project2" element={<P2 />} />
                <Route exact path="/project3" element={<P3 />} />
                <Route exact path="/project4" element={<P4 />} />
                <Route exact path="/project5" element={<P5 />} />
                <Route exact path="/project6" element={<P6 />} />
                <Route exact path="/project7" element={<P7 />} />
                <Route exact path="/project8" element={<P8 />} />
                <Route exact path="/project9" element={<P9 />} />
                <Route exact path="/project10" element={<P10 />} />
                <Route exact path="/project11" element={<P11 />} />
            </Routes>
        </div>
    )
}
export default Main