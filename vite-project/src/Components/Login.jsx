import React from 'react'
import '../Index.css'
import { Link } from 'react-router-dom'
const Login=()=> { 
  return (
    <div>
        <form className='wrapper' >
            <input type="email" placeholder='Enter Email' /><br/><br/>
            <input type="password" placeholder='Enter Password' /><br/>
            <br/><button>
              <Link to="/home">Submit</Link>
            </button>
        </form>
    </div>
  )
  }
export default Login