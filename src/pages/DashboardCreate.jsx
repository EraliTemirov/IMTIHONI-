import React, { useEffect, useState } from 'react'
import Header from './../components/Header';
import "../Sass/DashboardCreate.scss"
// import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";

const DashboardCreate = () => {
  const [data, setData] = useState();
  useEffect(() => {
    async function getMe() {
      try {
        let { data } = await axios.get("/auth");
     toast(message, { type: "success" });
        setData(data);
      } catch (error) {
      }
    }

    
    getMe();
  }, []);

  return (
    <div>
      <Header />
      <div className="container w-50 mt-5">
        <h1 className='h1'>Dashboard</h1>
        <p className="mt-5  fs-5 text-secondary">
          <i className="fa-solid fa-user fa-2xl"></i>Welcome {data?.name}
        </p>
        <p className='fs-5'>You have not yet setup a profile, please add some info</p>
        <Link to="/createprofile" className='btn btn-warning'>Create Profile</Link>
      </div>
    </div>
  );
}

export default DashboardCreate
