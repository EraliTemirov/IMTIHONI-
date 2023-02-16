import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Header from "../components/Header";
import Header_user from "../components/Header_user";
import "../Sass/Dashboard.scss";

const Dashboard = () => {
  let token = localStorage.getItem("token");

  const navigate = useNavigate();
  const [data, setData] = useState();
  const [newdata, setNewdata] = useState();

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (!token) navigate("/siginup");
  });

  useEffect(() => {
    async function getMe() {
      try {
        let { data } = await axios.get("/auth");
        setData(data);

        //  toast("Success", { type: "success" });
      } catch (error) {}
    }

    getMe();
  }, []);

  if (handledelete) {
    useEffect(() => {
      async function getMe() {
        try {
          let { data } = await axios.get("/profile/me");
          // toast("Sucsess", { type: "success" });
          setNewdata(data);
        } catch (error) {
          console.log(error);
        }
      }

      getMe();
    }, []);
  }
  

    function handledelete() {
      async function getMedelete() {
        try {
          await axios.delete("/profile");
          localStorage.removeItem("token");
          navigate("/siginup");
          toast("Delete profile", { type: "warning" });
        } catch (error) {
          console.log(error);
          toast("Error", { type: "error" });
        }
      }
      getMedelete();
    }
  



  return (
    <div>
      {token ? <Header_user /> : <Header />}
      <div className="container w-50">
        <h1>Dashboard</h1>
        <p className="mt-5  fs-5 text-primary">
          <i className="fa-solid fa-user fa-2xl"></i>Welcom {data?.name}
        </p>
        <div className="d-flex gap-2">
          <Link to="/createprofile" className="btn btn-warning fs-5">
            <i className="fa-solid fa-circle-user"></i> Edit Profile
          </Link>
          <Link to="/exprence" className="btn btn-warning fs-5">
            <i className="fa-sharp fa-solid fa-person-circle-plus"></i> Add
            Expireince
          </Link>
          <Link to="/education" className="btn btn-warning fs-5">
            <i className="fa-solid fa-graduation-cap"></i> Add education
          </Link>
        </div>
        <span className="fs-3">Experience Credentials</span>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">
                <span className="fs-5 company">Company</span>
              </th>
              <th scope="col">
                <span className="fs-5 company">Title</span>
              </th>
              <th scope="col">
                <span className="fs-5 company">Date</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <span className="fs-5">{newdata?.experience[0]?.company}</span>
              </td>
              <td>
                <span className="fs-5">{newdata?.experience[0]?.title}</span>
              </td>
              <td>
                <span className="fs-5 mb-4">
                  {newdata?.experience[0]?.from}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
        <span className="fs-3 ">Education Credintials</span>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">
                <span className="fs-5 company">School</span>
              </th>
              <th scope="col">
                <span className="fs-5 company">Degree</span>
              </th>
              <th scope="col">
                <span className="fs-5 company">Years</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <span className="fs-5">
                  <span className="fs-5">{newdata?.education[0]?.school}</span>
                </span>
              </td>
              <td>
                <span className="fs-5">
                  <span className="fs-5">{newdata?.education[0]?.degree}</span>
                </span>
              </td>
              <td>
                <span className="fs-5">{newdata?.education[0]?.from}</span>
              </td>
            </tr>
          </tbody>
        </table>
        <button onClick={handledelete} className="btn btn-danger mt-5 w-50">
          Delete My Account
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
