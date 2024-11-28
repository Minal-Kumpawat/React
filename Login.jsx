import React, { useState } from 'react'
import './Login.css';

const Login = () => {
    const [email,setEmail]= useState("")
    const [password,setPassword]= useState("")
    const HandleSubmit =(e)=>{
      e.preventDefault(); 
      const data={
        email,
        password
      }
      localStorage.setItem('email',data.email)
      localStorage.setItem('password',data.password)
      let val =localStorage.getItem("email")
      let valpas=localStorage.getItem("password")
      console.log("email:",val)
      console.log("password:",valpas)
    }
  return (
    <form className='outerBox' onSubmit={HandleSubmit}>
      <div className='innerBox'>
        <h1 >Login</h1>
      </div>
      <div className='innerBox'>
        <label htmlFor="">user Email</label>
        <input type="text" placeholder='enter your email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
      </div>
      <div className='innerBox'>
        <label htmlFor="">password</label>
        <input type="password" placeholder='enter your password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
      </div>
      <div className='innerBox'>
        <button>Submit</button>
      </div>
    </form>
  )
}

export default Login
