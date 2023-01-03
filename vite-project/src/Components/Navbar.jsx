import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className="nav">
        <span><Link to="/home">Home</Link></span>
        <span><Link to="/">Login</Link></span>
        <span>User Logged In : No</span>
        <span><button disabled="true">Logout</button></span>
    </div>
  )
}

export default Navbar
