import axios from "axios";
import React, { useEffect, useState } from "react";
import { FloatingLabel } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Header_user from "../components/Header_user";
import { toast } from "react-toastify";

const Education = () => {
  let token = localStorage.getItem("token");
  const navigate = useNavigate();
 useEffect(() => {
   let token = localStorage.getItem("token");
   if (!token) navigate("/siginup");
 });

  const [values, setValues] = useState({
    school: "",
    degree: "",
    fieldofstudy: "",
    from: "",
  });

  async function handleCreate(e) {
    e.preventDefault();

    try {
      let { data } = await axios.put("/profile/education", values);
      
     toast("Success", { type: "success" });
      navigate("/dashboard");
    } catch (error) {
      // toast("Error", { type: "error" });
    }
  }

  function handleInputChange(e) {
    setValues((oldValues) => ({
      ...oldValues,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <div>
      {token ? <Header_user /> : <Header />}
      <main className="container w-50">
        <form onSubmit={handleCreate}>
          <h1>Add An Experience</h1>
          <p>Add any school or bootcamp that you have attended</p>
          <p>* = required field</p>

          <div className="my-1">
            <input
              type="text"
              name="school"
              id="school"
              placeholder="* School or Bootcamp"
              className="form-control"
              required
              value={values.school}
              onChange={handleInputChange}
            />
          </div>
          <div className="my-1">
            <input
              type="text"
              name="degree"
              id="degree"
              placeholder="* Degree or Certificate"
              className="form-control"
              value={values.degree}
              onChange={handleInputChange}
            />
          </div>

          <div className="my-1 skills">
            <input
              type="text"
              name="fieldofstudy"
              id="fieldofstudy"
              className="form-control"
              value={values.fieldofstudy}
              onChange={handleInputChange}
            />
          </div>
          <div className="my-1 skills">
            <p className="p-0">From Date</p>
            <input
              type="date"
              name="from"
              id="from"
              className="form-control"
              value={values.from}
              onChange={handleInputChange}
            />
          </div>
          <div className="my-1 skills d-flex align-items-center">
            <input type="checkbox" name="skills" id="skills" />
            <p className="w-25 fs-4 ml-5">Current school</p>
          </div>

          <div className="my-1 skills">
            <p className="p-0">To Date</p>
            <input
              type="date"
              name="todate"
              id="todate"
              className="form-control"
              value={values.from}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <FloatingLabel controlId="floatingTextarea2">
              <textarea
                name="tex"
                id="tex"
                cols="97"
                rows="3"
                value={values.from}
                onChange={handleInputChange}
              ></textarea>
            </FloatingLabel>
            <div className="d-flex justify-content-between">
              <button className="btn btn-primary mb-5 mt-5 w-25">Submit</button>
              <Link to="/dashboard" className="btn btn-info mt-5 mb-5 w-25">
                Go back
              </Link>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Education;
