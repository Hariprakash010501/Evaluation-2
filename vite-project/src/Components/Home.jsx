import axios from 'axios'
import React from 'react'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import '../Index.css'

export default function Home() {
    const [list, setList]=useState([])
    useEffect(()=>{
        axios
            .get('https://fakestoreapi.com/products/')
            .then((event)=>setList(event.data))
    },[])
  return (
    <div className='align'>
        {
            list.map((data)=>(
               <div>
                    <img className="image" src={data.image} alt=""></img><br/>
                    <h3>{data.title}</h3>
                    <Link to={"/product/"+data.id} >More Info</Link>
               </div> 
            ))
        }
    </div>
  )
}