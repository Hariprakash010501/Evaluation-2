import React from 'react'
import { useState } from 'react';
import { SingleCard } from './SingleCard';
import {useParams} from 'react-router-dom'
import axios from 'axios';
const ProductDetails = () => {
    const [info,setInfo]=useState({});
    const params=useParams();
    useEffect=(()=>{
        getData ();
    },[]);
    const getData=async()=>{
        try{
            let reqres=await axios.get('https://fakestoreapi.com/products');
            let info=await reqres.json()
            setInfo(res.info);
        }   
        catch(e){
        }
    }
  return (
    <div>{data.map((e)=>{
        return <SingleCard {...e} key={e.id}/>;
    })}
    </div>
  );
}

export default ProductDetails