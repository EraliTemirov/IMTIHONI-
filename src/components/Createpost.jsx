import axios from 'axios';
import React, { useState } from 'react';

const Createpost = () => {
  let [posts, setPosts] = useState([]);
  let [values, setValues] = useState({
    post: "",
  });



  function handleFormSubmit(e) {
    e.preventDefault();

    async function post() {
      let { data } = await axios.post("/posts",{text:values.post});
      console.log(data);
      setPosts(data)
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
      <main className='post container container w-75'>
     <form onSubmit={handleFormSubmit} >
        
        <p className='w-100 text-align-left'>  Say something...</p>
        <textarea value={values.post} onChange={handleInputChange}  name="post" className='w-100 my-3' cols="100" rows="5" placeholder='Create post'></textarea>
        <button className=' btn btn-warning w-25 mb-5 text-align-left'>Submit</button>
        </form>
       
    </main>
    </div>
  )
}

export default Createpost;