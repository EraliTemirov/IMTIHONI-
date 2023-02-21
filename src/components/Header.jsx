import React from 'react'
import "../Sass/Header.scss"
import { Link } from 'react-router-dom'
import Logo from '../assets/Logo.png'
const Header = () => {

  


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
              <Link to="/siginup" className="text-decoration-none color">
                Register
              </Link>
            </li>
            <li>
              <Link to="/siginin" className="text-decoration-none color">
                Login
              </Link>
            </li>
            
          </ul>
        </div>
      </nav>
      
    </div>
  );
}

export default Header
