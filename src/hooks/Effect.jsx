import React,{useState,useEffect} from 'react'

const Effect = () => {
    const[num,setNum]=useState(1)
    const[data,setData]=useState(10)

    useEffect(()=>{
        alert('this is a effect')
    },[num])
  return (
    <>
        <h1>{num}</h1>
        <button className='btn btn-success'onClick={()=>setNum(num+2)}>click</button>
        <h1>{data}</h1>
        <button className='btn btn-info'onClick={()=>setData(data * 2)}>click to see the effect</button>
    </>
  )
}

export default Effect