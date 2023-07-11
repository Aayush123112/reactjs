import React,{useState,useEffect} from 'react'
import axios from 'axios'

const Datafetch = () => {
    const[products,setProducts]=useState([])
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products`) .then(res=>{
            console.log(res.data)
            setProducts(res.data)
        }) 
        .catch(err=>console.log(err));
        
    },[])
  return (
    <>
      {products.map((product,i)=>(
          <div key={i}>
            <h1>{product.title}</h1>
            <h3>${product.price}</h3>
            <h3>{product.category}</h3>
            <h4>{product.rating.rate}</h4>
            <h5 className='text-muted'>{product.description}</h5>
          </div>
      ))}  
    </>
  )
}

export default Datafetch