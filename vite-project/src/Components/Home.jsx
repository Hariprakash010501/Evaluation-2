import React from 'react'
import {Link} from 'react-router-dom'
const Home = () => {
  return (
    <>
    <div>Welcome!</div>
    <div>
      <Link to={"/product/:id"}>Click Here to view products</Link>
    </div>

    </>
  )
}

export default Home