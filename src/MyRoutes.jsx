import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import SingUp from './pages/SingUp'
import IncrementDecrement from './hooks/IncrementDecrement'
import Effect from './hooks/Effect'
import Datafetch from './hooks/Datafetch'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import Register from './pages/Register'
import Show from './contest/Show'
import TestNav from './Redux/TestNav'

const MyRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='login' element={<Login/>}/> 
            <Route path='signup' element={<SingUp></SingUp>}/>
            <Route path="/hook/first" element={<IncrementDecrement/>}/>
            <Route path='/hook/second' element={<Effect/>}/>
            <Route path='/hook/third' element={<Datafetch/>}/>
            <Route path='products' element={<Products/>}/>
            <Route path='productdetails/:productId' element={<ProductDetail/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/show' element={<Show/>}/>
            <Route path='redux/cart' element={<TestNav/>}/>
        </Routes>
    </Router>
  )
}

export default MyRoutes