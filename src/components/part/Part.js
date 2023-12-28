import React from "react";
import { Link } from "react-router-dom";
import "./Part.css";


const Part = ({icon, title}) => {
    return (
        <Link className="part" to="/">
            <img src={icon} alt="" />
            <span>{title}</span>
        </Link>
    );
};


export default Part;