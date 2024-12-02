import React from 'react'
import { useState ,useEffect } from 'react'
import axios  from "axios"
const Fetch = () => {
    const [data,setData]=useState();

    useEffect(()=>{
        fetch()
    },[])
    const fetch=async()=>{
        const result=await axios.get('https://fakestoreapi.com/products')
        console.log(result.data)
        setData(result.data)
    }
  return (
    
    <div>
       {data && data.map((index,item)=> (
         <div key={item} >
            <img src={index.image} alt="" />
            <p>Title:{index.title}</p>
            <p>Price: {index.price}</p>
         </div>
      ))}
    </div>
  )
}

export default Fetch
