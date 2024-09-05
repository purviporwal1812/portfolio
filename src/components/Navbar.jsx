import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css'; // Import your CSS file

const Navbar = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-10 col-md-10">
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
              <NavLink className="navbar-brand" to="/">
                Purvi Porwal
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse justify-content-center"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ms-auto font-monospace">
                  <li className="nav-item me-5">
                    <NavLink
                      className={(e) => {
                        return e.isActive ? "nav-link active keyboard-click" : "nav-link keyboard-click";
                      }}
                      aria-current="page"
                      to="/"
                    >
                      Home.
                    </NavLink>
                  </li>
                  <li className="nav-item me-5">
                    <NavLink
                      className={(e) => {
                        return e.isActive ? "nav-link active keyboard-click" : "nav-link keyboard-click";
                      }}
                      aria-current="page"
                      to="/about"
                    >
                      About.
                    </NavLink>
                  </li>
                  <li className="nav-item me-5">
                    <NavLink
                      target="_blank"
                      className={(e) => {
                        return e.isActive ? "nav-link active keyboard-click" : "nav-link keyboard-click";
                      }}
                      aria-current="page"
                      to="https://docs.google.com/document/d/1lckAss581IMKt4u2TkXjJdjZh-GyZYsoSXBa-b2eXJ0/edit?usp=sharing"
                    >
                      Resume.
                    </NavLink>
                  </li>
                  <li className="nav-item me-5">
                    <NavLink
                      className={(e) => {
                        return e.isActive ? "nav-link active keyboard-click" : "nav-link keyboard-click";
                      }}
                      aria-current="page"
                      to="/play"
                    >
                        <span className="fs-4">✧₊⁺</span>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
