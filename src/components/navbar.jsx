import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"
import logo from "../assets/logo.png"

const Navbar = () => {
    const navigate = useNavigate()

    const Logout = async() => {
        try {
            await axios.delete('http://localhost:5000/logout')
            navigate("/")
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <nav
      className="navbar is-light"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="/dashboard">
            <img
              src={logo}
              width="112"
              height="28"
              alt="logo"
            />
          </a>
          <a
            href="/"
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a href="/siswa" className="navbar-item">Siswa</a>
            <a href="/bayar" className="navbar-item">Bayar</a>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <button onClick={Logout} className="button is-light">Log out</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
