import React from 'react'
import {Link} from 'react-router-dom' 
import Calculator from './Calculator';

const Header = () => {
  return (
    <div>
      <Link style={{margin:'20px'}} to="/" >Name</Link>
      <Link style={{margin:'20px'}} to="/study" >Study</Link>
      <Link style={{margin:'20px'}} to="/education" >Education</Link>
      <Link style={{margin:'20px'}} to="/exp">exp</Link>
      <Link style={{margin:'20px'}} to="/cal">Calculator</Link>
      <Link style={{margin:'20px'}} to="/form">Form</Link>
      <Link style={{margin:'20px'}} to="/fetch">API Fetch</Link>
    </div>
  )
}

export default Header
