import React from "react";
import Link from "./ActiveLink";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function Header() {
  return (
    <header className="masthead">
      <div className="inner">
        <Navbar collapseOnSelect expand="md" variant="light" fixed="top">
          <Navbar.Brand href="/" className="logo">
            <img src="static/images/cryptogini_logo.svg" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Link activeClassName="active" href="/"><a className="nav-link ">Home</a></Link>
              <Link activeClassName="active" href="/about"><a className="nav-link ">About</a></Link>
              <Link activeClassName="active" href="/team"><a className="nav-link ">Team</a></Link>
              <Link activeClassName="active" href="/contact"><a className="nav-link ">Contact</a></Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {/* <nav className="navbar navbar-expand-md navbar-light fixed-top nav-masthead" >
          <a className="navbar-brand logo">
            <img src="static/images/cryptogini_logo.svg" />
          </a>

          <button
            type="button"
            className="navbar-toggler bg-light"
            data-toggle="collapse"
            data-target="#nav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="nav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
              <Link activeClassName="active" href="/"><a className="nav-link ">Home</a></Link>
              </li>

              <li className="nav-item">
              <Link activeClassName="active" href="/about"><a className="nav-link ">About</a></Link>
              </li>

              <li className="nav-item">
              <Link activeClassName="active" href="/team"><a className="nav-link ">Team</a></Link>
              </li>
            
              <li className="nav-item">
              <Link activeClassName="active" href="/contact"><a className="nav-link ">Contact</a></Link>
              </li>

            </ul>
          </div>
        </nav> */}
      </div>
    </header>
  );
}
