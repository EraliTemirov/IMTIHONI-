import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/Logo.png'
const Header = () => {

  


  return (
    <div className="bg-primary p-2 ">
      <nav className="w-75 container d-flex justify-content-between">
        <Link to="/" className='link d-flex justify-content-center w-25 p-2'>
          <img src={Logo} alt="logo" className="w-100" />
        </Link>
        <div className='w-25 p-0'>
          <ul className="d-flex  justify-content-around ">
            <li className='fs-4 p-1'>
              <Link to="/developers" className="text-decoration-none text-light">
                Developers
              </Link>
            </li>
            <li className='fs-4 p-1'>
              <Link to="/siginup" className="text-decoration-none text-light">
                Register
              </Link>
            </li>
            <li className='fs-4 p-1'>
              <Link to="/siginin" className="text-decoration-none text-light">
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
