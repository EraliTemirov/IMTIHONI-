import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Header_user from '../components/Header_user';
import "../Sass/Home.scss";


const Home = () => {

let token = localStorage.getItem("token");
  return (
    <div>
      {token ? <Header_user /> : <Header />}
      <div className="homebgimg ">
        <div className="cent container">

          <h1 className='w-50 container'>Developer Connector</h1>
          <p className='fs-4 w-50 container text-light'>
            Create a developer profile/portfolio, share posts and get help from
            other developers
          </p>
          <div className="button d-flex justify-content-center ">
            <Link to="/siginup" className="text-decoration-none ">
              <button className="btn btn-primary">Sign up</button>
            </Link>
            <Link to="/siginin" className="text-decoration-none">
              <button className="btn btn-secondary">Login</button>
            </Link>
          </div>
        </div>
      </div>

      <Outlet />
    </div>
  );
}

export default Home;
