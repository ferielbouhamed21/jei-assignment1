import React from "react";
import { NavLink } from "react-router-dom";
const Navigation = () => {
    return (
        <div className="Navigation">
            <NavLink style={{
                margin: "10px",
                padding: "10px",
                position: "relative"
            }} exact to="/" activeclassName="nav-active"  >
                Home
            </NavLink>
            <NavLink style={{
                margin: "10px",
                padding: "10px",
                position: "relative"
            }} exact to="/users" activeclassName="nav-active" >
                Users List
            </NavLink>
        </div>
    );
};
export default Navigation;