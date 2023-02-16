import React from "react";
import "../Sass/Header.scss";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";



const Header_user = () => {
  function handleLogout() {
    localStorage.removeItem("token");
    toast("Logged Out", { type: "info" });
    navigate("/");
  }

  return (
    <div className="header-bg">
      <nav className="container d-flex justify-content-between">
        <Link to="/">
          <img src={Logo} alt="logo" className="img" />
        </Link>
        <div>
          <ul className="d-flex ">
            <li>
              <Link to="/developers" className="text-decoration-none color">
                Developers
              </Link>
            </li>
            <li>
              <Link to="/posts" className="text-decoration-none color">
                Posts
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="text-decoration-none color">
                <i className="fa-solid fa-user"></i>
                Dashboard
              </Link>
            </li>
            <li>
              <button onClick={handleLogout} className="btn btn-danger fs-5 ">
                <i className="fa-solid fa-arrow-right-from-bracket"></i>
              </button>
            </li>
          </ul>
        </div>
      </nav>
     
    </div>
  );
};

export default Header_user;
