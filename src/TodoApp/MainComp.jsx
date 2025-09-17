import React from 'react'

import { useState } from 'react'
import PropComp from './PropComp';

const MainComp = () => {

  const [name, setName]=useState("");

  const handleChange = (e)=>{

    setName(e.target.value)
  }

  const handleSubmit=(e)=>{

        e.preventDefault();

        alert(`Form Submitted! Name: ${name}`);
  };

  return (
    <div style={{padding: '20px'}}>
        < PropComp username={name}/>
        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type='text' onChange={handleChange} value={name} placeholder="Enter your name"/>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default MainComp