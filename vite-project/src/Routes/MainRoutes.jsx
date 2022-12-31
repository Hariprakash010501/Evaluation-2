import React from 'react'
import {Route,Routes} from "react-router-dom"
import Home from '../Components/Home'
import Login from '../Components/Login'
import ProductDetails from '../Components/ProductDetails'
import Navbar from '../Components/Navbar'
import ErrorMessage from '../Components/ErrorMessage'
const MainRoutes = ({id}) => {
  return (
    <>
    <div>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/product/:id" element={<ProductDetails/>}/>
            <Route path="*" element={<ErrorMessage/>}/>
        </Routes>
    </div>
    </>
  )
}
export default MainRoutes