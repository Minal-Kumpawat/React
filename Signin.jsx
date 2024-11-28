import React, { useState } from 'react'
import './Login.css'
const Signin = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const handleSubmit=((e)=>{
        e.preventDefault()
        const data ={
            email,
            password
        }
        console.log(data);
        localStorage.setItem('email',data.email)
        localStorage.setItem('password',data.password)
        setEmail("")
        setPassword("")
    })
  return (
    <form className='outerBox' onSubmit={handleSubmit}>
      <h1>SignIn </h1>
      <input type="text" placeholder='Email or Phone ' value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <br/>
      <input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <p>Forgot password?</p>
      <button className='Submit'>Signin</button>
    </form>
  )
}

export default Signin
