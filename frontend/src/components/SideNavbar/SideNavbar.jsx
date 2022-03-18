import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";


const SideNavbar = () => {


  return (
    <div className="sideNavbar">
      <nav>
        <ul>
          <li>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <b>Start Here</b>
          </Link>
          </li>
          <li>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <b>Courses</b>
          </Link>
          </li>
          <li>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <b>Projects</b>
          </Link>
          </li>
          <li>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <b>Goals</b>
          </Link>
          </li>
        </ul>
      </nav>
    </div>
    );
}
 
export default Sidebar;