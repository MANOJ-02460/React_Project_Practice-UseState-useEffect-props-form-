import React from 'react'

const Login = () => {
  return (
    <div >
        <h2>Signup</h2>
        <form >
            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', padding:'10px'}}>
                <label>Name:</label>
                <input type='text' placeholder='Enter Your name' style={{width:'250px',padding:'10px'}}/> 
            </div>
            <div>
                <label>Email:</label>
                <input type='email' placeholder='Enter Your email' style={{width:'230px'}}/>
            </div>
            <div>
                <label>Password:</label>
                <input type='password' placeholder='Enter Your Password' style={{width:'230px'}}/>
            </div>
            <div>
                <label>Confirm Password:</label>
                <input type='email' placeholder='Enter Your email' style={{width:'230px'}}/>
            </div>
        </form>
    </div>
  )
}

export default Login