import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Header from "../components/Header";
import "../Sass/Signin.scss";

const Signin = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  //  useEffect(()=>{
  //   let token =localStorage.getItem("token");
  //   if(token)
  //   navigate("/developers");
  //  })

  async function handleLogen(e) {
    e.preventDefault();

    try {
      let {
        data: { token, message },
      } = await axios.post("/auth", values);

      localStorage.setItem("token", token);
      navigate("/developers");
      toast("Success", { type: "info" });
    } catch (error) {
      toast("Error", { type: "error" });
    }
  }

  function handelInputChange(e) {
    setValues((oldValues) => ({
      ...oldValues,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <div className="body">
      <Header />
      <form onSubmit={handleLogen} className="container w-50 mt-5">
        <h1 className="fs-1 text-warning">Sign In</h1>
        <p className="mt-5  fs-5 text-secondary">
          <i className="fa-solid fa-user fa-2xl"></i> Sign Into Your Account
        </p>

        <input
          type="email"
          className="form-control mt-4"
          placeholder="Your email..."
          name="email"
          id="email"
          required
          min={10}
          values={values.email}
          onChange={handelInputChange}
        />
        <input
          type="password"
          className="form-control mt-3"
          placeholder="Your password..."
          name="password"
          id="password"
          required
          min={6}
          values={values.password}
          onChange={handelInputChange}
        />
        <div className="container w-50">
          <button className="btn btn-primary w-100 mt-5">Login</button>
        </div>
      </form>
      <div className="d-flex mt-2 gap-4 container w-25">
        <p className="d-block">Don't have an account? </p>
        <Link to="/siginup" className="text-decoration-none">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Signin;
