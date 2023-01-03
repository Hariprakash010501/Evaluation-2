import React from 'react'
import axios from 'axios';
import '../Index.css'
import {  useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
const ProductDetails=()=>{
    const [more, setMore] = useState({});
    const { id } = useParams();
    useEffect(() => {
        axios
          .get("https://fakestoreapi.com/products/" + id)
          .then((event) => setMore(event.data))
      }, []);
  return (
        <div className='productdetails'>
                <img src={more.image} alt="" className="size"></img>
                <h3>{more.title}</h3>
                <h3>DESCRIPTION : {more.description}</h3>
                <h3>CATEGORY : {more.category}</h3>
                <h3>PRICE : {more.price}</h3>
        </div>
  )
}
export default ProductDetails