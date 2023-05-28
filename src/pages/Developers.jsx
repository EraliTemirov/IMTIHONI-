import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import "../Sass/Developers.scss";
import axios from 'axios';
// import crypto from 'crypto'
import Header_user from '../components/Header_user';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
// import Loading from './Loading';
import Placeholder from "../components/Developers_Placeholder";

const Developers = () => {
  let token = localStorage.getItem("token");
  const navigate = useNavigate();
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (!token) navigate("/siginup");
  });

  const [data, setData] = useState([]);

  useEffect(() => {
    async function getMe() {
      try {
        let { data } = await axios.get("/profile");
        setData(data);
         toast("Success", { type: "info" });
      } catch (error) {
        toast("Error", { type: "error" });
      }
    }
    getMe();
  }, []);
  console.log(data);

  return (
    <div>
      {token ? <Header_user /> : <Header />}
     {!data.length ?  <Placeholder/>:
     <div className="container w-75">
      <h1>Developers</h1>
      <p>Browse and connect with developers</p>
      {data?.map(({ user, company, skills, _id }) => (
        <div key={_id} className="border border-primary d-flex justify-content-between mb-4 p-3">
          <div className="d-flex">
            <img src={user?.avatar} alt="user_img" className="user" />
            <div className="mt-4">
              <p className="fs-4">{user?.name}</p>
              <p className="fs-5">{company}</p>
              <Link to={`/viewprofile/${user?._id}`} className="btn btn-success">
                View Profile
              </Link>
            </div>
          </div>

          <ul className="p-5">
            {skills?.map((us, index) => (
              <li key={index}>
                <i className="fa-solid fa-check"></i>
                {us}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>}
    </div>
  );
};

export default Developers;
