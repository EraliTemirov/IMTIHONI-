import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Header from "../components/Header";
import "../Sass/Signup.scss"

const Signup = () => {

 const [values, setValues]= useState({
  name: "",
  email: "",
  password:"",
  confirmpassword:"",
 })

 const navigate =useNavigate()

//  useEffect(()=>{
//   let token =localStorage.getItem("token");
//   if(token) 
//   navigate("/developers");
//  })

  async function handleRegister(e){
    e.preventDefault();

    if (values.password!==values.confirmpassword)
    return   toast("Paswords do not match ", {type:"error"});

    try {
      
     let { data:{token, message}, } = await axios.post("/users", values);

     localStorage.setItem("token", token);
     toast (message, {type:"success"})
     navigate("/dashboardcreate");
     toast("Success", {type:"success"})
    } catch (error) {
      toast(error.response.data.errors[0].msg, {type: "error"});
    }
     
  }
    


  function  handelInputChange(e){
    setValues((oldValues)=>({
      ...oldValues,
      [e.target.name]: e.target.value,
    }));
  }


  return (
    <div className="bg-font">
      <Header />
      <form onSubmit={handleRegister} className="container w-50">
        <h1 className="text-secondary">Sign up</h1>
        <input
          className="d-block form-control mt-5 "
          type="text"
          placeholder="Name..."
          name="name"
          id="name"
          required
          min={3}
          values={values.name}
          onChange={handelInputChange}
        />
        <input
          type="email"
          className="form-control mt-3 "
          placeholder="...@gmail.com"
          name="email"
          id="email"
          required
          min={12}
          values={values.email}
          onChange={handelInputChange}
        />
        <p className="text-light mt-1">
          This site uses Gravatar so if you want a profile image, use a Gravatar
          email
        </p>
        <input
          type="password"
          placeholder="Create password..."
          className="form-control mt-3"
          name="password"
          id="password"
          required
          min={4}
          values={values.password}
          onChange={handelInputChange}
        />
        <input
          type="password"
          placeholder="Confirm password..."
          className="form-control mt-3"
          name="confirmpassword"
          id="confirmpassword"
          required
          min={4}
          values={values.confirmpassword}
          onChange={handelInputChange}
        />
        <div className="mt-5 ">
          <button className="btn btn-info w-25 ">Register</button>
          <div className="d-flex">
            <p className="paragraph">Already have an account?</p>
            <Link to="/siginin" className="signup-signin text-decoration-none">
              Sign in
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Signup;
