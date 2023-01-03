import React from 'react'
import {Route,Routes} from "react-router-dom"
import Navbar from '../Components/Navbar'
import Home from "../Components/Home"
import Login from '../Components/Login'
import ProductDetails from '../Components/ProductDetails'
import ErrorMessage from '../Components/ErrorMessage'
export const MainRoutes = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/" element={<Login/>}/>
            <Route path="/product/:id" element={<ProductDetails/>}/>
            <Route path="*" element={<ErrorMessage/>}/>
        </Routes>
    </div>
  )
}
