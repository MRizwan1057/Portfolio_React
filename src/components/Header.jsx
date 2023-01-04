import React from "react";
import { NavLink } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light  shadow">
        <NavLink to="/" className="navbar-brand">
          Logo
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav   mr-auto text-center">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/skills" className="nav-link">
                Skills
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/projects" className="nav-link">
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/experience" className="nav-link">
                Experience
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
