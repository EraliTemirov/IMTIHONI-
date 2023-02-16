import axios from "axios";
import React, { useState } from "react";
import Header from "../components/Header";
import Header_user from "../components/Header_user";
import avatar from "../assets/developer.jpg"
import { Link } from "react-router-dom";
import "../Sass/Posts.scss"

const Post_user = () => {
let token = localStorage.getItem("token");
  let [posts, setPosts] = useState([]);
  let [values, setValues] = useState({
    post: "",
  });

  function handleFormSubmit(e) {
    e.preventDefault();

    async function post() {
      let { data } = await axios.post("/posts", { text: values.post });
      console.log(data);
      setPosts(data);
    }
    post();
    values.post = "";
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
      <main className="post container container w-75">
        <div
          className="container border border-primary p-4 d-flex justify-content-between mb-4"
        >
          <div className="d-flex">
            <div className="p-4 w-50 text-center">
              
                <img src={avatar} alt="user_img" className="w-50" />
                <p className="fs-5 list-style-none">name</p>
             
            </div>
            <div className="mt-5 zaybal two container ">
              <p className="fs-4  p-5 container">text</p>
              <p>Posted on date</p>

              <div className=" d-flex justify-content-between mt-5">
                <div className="d-flex w-50 justify-content-between">
                  <div>
                    <button
                      className="btn "
                    >
                      <i className="fa-solid fa-thumbs-up fs-4 mrt"></i>
                    </button>
                    <span>likes.length</span>
                  </div>
                  <button className="btn" >
                    <i className="fa-solid fa-thumbs-down fs-4"></i>
                  </button>
                </div>
                <Link to="/postuser" className="btn btn-info">
                  Descussion
                </Link>
              </div>
            </div>
          </div>
        </div>
        <form onSubmit={handleFormSubmit}>
          <p className="w-100 text-align-left"> Say something...</p>
          <textarea
            value={values.post}
            onChange={handleInputChange}
            name="post"
            className="w-100 my-3"
            cols="100"
            rows="5"
            placeholder="Create post"
          ></textarea>
          <button className=" btn btn-warning w-25 mb-5 text-align-left">
            Submit
          </button>
        </form>
      </main>
    </div>
  );
};

export default Post_user;
