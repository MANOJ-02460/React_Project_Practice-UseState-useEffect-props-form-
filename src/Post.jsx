import React from 'react'

import { useState } from 'react'

const Post = () => {

  const [name , setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const API_URL = "https://jsonplaceholder.typicode.com/users";

  const addUser = async()=>{

    try{

      const newUser = {name , email};

      const res = await fetch(API_URL,{

        method: "POST",
        headers : {"Content-Type" : "application/json"},
        body : JSON.stringify(newUser),

      });

      const data = await res.json();
      console.log("Created User:", data)
     
      
    }catch(error){

      console.error("Error creating user:", error);

    }
  };
  return (
    <div>

      <h2>POST Example</h2>

      <input type='text' placeholder='Enter Name' value={name} onChange={(e)=>setName(e.target.value)}/>
      <input type="email" placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)}/>

      <button onClick={addUser}>Add User</button>

    </div>
  )
}

export default Post