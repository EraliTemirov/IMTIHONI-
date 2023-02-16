import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Header_user from "../components/Header_user";

const viewprofile = () => {
  const { id } = useParams();
  let token = localStorage.getItem("token");
  
 const navigate = useNavigate();
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (!token) navigate("/siginup");
  });

  const [data, useData] = useState();
  useEffect(() => {
    async function getdevelop() {
      let { data } = await axios.get(`profile/user/${id}`);
      useData(data);
      console.log(data);
    }

    getdevelop();
  }, []);
  console.log(data);

  return (
    <div>
      {token ? <Header_user /> : <Header />}
      <div className="container">
        <Link to="/posts" className="btn btn-success">
          Back to
        </Link>
        <div className="container w-75 bg-info text-center p-5">
          <img src={data?.user?.avatar} alt="user_avatar" />
          <p>{data?.user?.name}</p>
          <p>{data?.status}</p>
          <p>{data?.bio}</p>
        </div>
        <div className="container w-75 text-center">
          <h2>Skills</h2>

          <ul className="p-5 d-flex justify-content-between">
            {data?.skills?.map((us) => (
              <li>
                <i className="fa-solid fa-check"></i>
                {us}
              </li>
            ))}
          </ul>
        </div>
        <div className="container w-75 d-flex">
          <div className="w-50 border border-info p-2">
            <h3>Exprience</h3>
            <p>Time: {data?.experience[0]?.from}</p>
            <p>Title: {data?.experience[0]?.title}</p>
            <p>Location: {data?.experience[0]?.location}</p>
            <p>Description: {data?.experience[0]?.description}</p>
          </div>
          <div className="w-50 border border-info p-2">
            <h3>Education</h3>
            <p>Time: {data?.education[0]?.from}</p>
            <p>Degree: {data?.education[0]?.degree}</p>
            <p>Field Of Study: {data?.education[0]?.fieldofstudy}</p>
            <p>School: {data?.education[0]?.school}</p>
          </div>
        </div>
      </div>
      my profile
    </div>
  );
};

export default viewprofile;
