import React from 'react';
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Project from "./components/Project";
import ResPDF from '../../assets/resume-DA.pdf';

// Handing our function our props for it to use
// FIX: NEED TO PUT IN ONE ARRAY OR FIGURE OUT HOW TO MAKE ANOTHER LIST/ DIV W/O ERRORS
export default function Resume(props) {
    return (
        <div class="container-md">
            <p>Click <a href={ResPDF} download="../../assets/resume-DA.pdf">here</a> to download resume</p>
            <ul className="list-group">
                {/* Mapping our front end props by id */}
                {props.frontEndProficiencies.map(item => (
                <li className="list-group-item" key={item.id}>
                {item.skill}
                </li>
            ))}
            </ul>
        </div>
    );
}