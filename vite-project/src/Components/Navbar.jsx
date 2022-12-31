import React from 'react'
import {Link} from 'react-router-dom'
import Home from './Home'
import ProductDetails from './ProductDetails'
const Navbar = ({id,auth}) => {
  return (
    <>
    <div className="nav">
        <span>
            <Link to={"/"} key={id} onClick={<ProductDetails/>}>Home</Link>
        </span>
        <span>
            <Link to={"/login"} key={id} onClick={<Home/>}>Login</Link>
        </span>
        <span style={{fontSize:"20px"}}>
            User Logged In : {auth?<>Yes</>:<>No</>}
        </span>
        <span>
            {auth?<button >Logout</button>:<button disabled="true">Logout</button>}
            
        </span>
    </div>
    
    </>
  )
}

export default Navbar