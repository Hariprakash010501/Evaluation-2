import React from 'react'
import {Link} from 'react-router-dom'
export const SingleCard = ({title,id,price,image}) => {
  return (
    <>
    <div>
        <img src={image} alt=" "/>
        <h3>{title}</h3>
        <Link to="/product/:id">More info</Link>
    </div>
    </>
  )
}
