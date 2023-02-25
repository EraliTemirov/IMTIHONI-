import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import "../Sass/Posts.scss";
import axios from "axios";
import Createpost from './../components/Createpost';
import { Link, useNavigate,  } from "react-router-dom";
import Header_user from "../components/Header_user";
import { toast } from "react-toastify";
import Loading from "./Loading";

const Posts = ({}) => {
  let token = localStorage.getItem("token");
  const navigate = useNavigate();
    useEffect(()=>{
  let token =localStorage.getItem("token");
  if(!token) navigate("/Signup");
 })

  const [data, setData] = useState();

  useEffect(() => {
    async function getMe() {
      try {
        let { data } = await axios.get("/posts");
        setData(data);
      } catch (error) {
       toast("Error", { type: "error" });
      }
    }

    getMe();
  }, []);


  function handlelike(evt) {

    let userNum = evt.target.parentNode.dataset.userId;

   let findUser = data.find(el => el._id == userNum);

   findUser.likes = [...findUser.likes, {_id:'leriuvlriuqvlqiuv'} ];

   setData([...data]);
  }

  return (
    <div>
    {token?<Header_user/> : <Header/>}
      <div className="container ">
        <h1>Posts </h1>
        <p className="fs-4 mt-4 mb-4">
          <i className="fa-solid fa-user fa-2xl"></i> Welcome to comunety
        </p>
        <Createpost />
        {data?.map(({ name, text, date, avatar, likes, _id ,user}) => (
          <div key={_id}
            data-user-id={_id}
            className="container border border-primary p-4 d-flex justify-content-between mb-4"
          >
            <div className="d-flex">
              <div className="p-4 w-50 text-center">
                <Link to ={ `/viewprofile/${user}`} className="list-style-none" >
                <img src={avatar} alt="user_img" className="imgsuser" />
                <p className="fs-5 list-style-none">{name}</p>
                </Link>
              </div>
              <div className="mt-5 zaybal two container ">
                <p className="fs-4  p-5 container">{text}</p>
                <p>Posted on {date}</p>

                <div className=" d-flex justify-content-between mt-5">
                  <div className="d-flex w-50 justify-content-between">
                    <div>
                      <button
                        data-user-id={_id}
                        className="btn "
                        onClick={(evt) => handlelike(evt)}
                        key={_id}
                      >
                        <i className="fa-solid fa-thumbs-up fs-4 mrt"></i>
                      </button>
                      <span>{likes.length}</span>
                    </div>
                    <button className="btn" key={_id}>
                      <i className="fa-solid fa-thumbs-down fs-4"></i>
                    </button>
                  </div>
                  < Link to="/postuser" className="btn btn-info">Descussion</Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Loading/>
    </div>
  );
};

export default Posts;
