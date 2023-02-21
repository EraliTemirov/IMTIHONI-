import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FloatingLabel } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header'
import Header_user from '../components/Header_user';

const Exprence = () => {

let token = localStorage.getItem("token");
 const navigate = useNavigate();
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (!token) navigate("/siginup");
  });
 const [values, setValues] = useState({

   title: "",
   company: "",
   from: "",
 });

 async function handleCreate(e) {
   e.preventDefault();

   try {
     let { data } = await axios.put("/profile/experience", values);
     console.log(data);
    toast("Success", { type: "success" });
    navigate("/dashboard");
   } catch (error) {
    //  toast("Error", { type: "error" });
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
          <p>
            Add any developer/programming positions that you have had in the
            past
          </p>
          <p>* = required field</p>

          <div className="my-1">
            <input
              type="text"
              name="title"
              id="title"
              placeholder="* Job Title"
              className="form-control"
              required
              value={values.title}
              onChange={handleInputChange}
            />
          </div>
          <div className="my-1">
            <input
              type="text"
              name="company"
              id="company"
              placeholder="* Company"
              className="form-control"
              required
              value={values.company}
              onChange={handleInputChange}
            />
          </div>

          <div className="my-1">
            <input
              type="text"
              name="location"
              id="location"
              placeholder="Location"
              className="form-control"
              value={values.location}
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
            <p className="w-25 fs-4 ml-5">To date</p>
          </div>

          <div className="my-1 skills">
            <p className="p-0">To Date</p>
            <input
              type="date"
              name="todate"
              id="todate"
              className="form-control"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <FloatingLabel controlId="floatingTextarea2">
              <textarea
                name="text"
                id="text"
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
}

export default Exprence
