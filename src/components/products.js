import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Products = ()=>{
    const [prod,setProd]=useState([]);

    // useEffect(()=>{
    //     fetch('https://fakestoreapi.com/products').then((res)=>res.json()).then((data)=>{
    //         console.log(data);
    //         setProd(data);
    //     });
       
    // },[])

    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products').then((res)=>{
            console.log(res.data);
            setProd(res.data)

        })
            
           
        .catch((err)=>console.log(err))
    },[])
    return (
        <div>
            {prod.map((item,index)=>(
                <div>
                    <h1>{item.id}</h1>
                    <h1>{item.title}</h1>
                    <h1>{item.price}</h1>
                 <img src ={item.image} alt={item.title}/>
                </div>
            ))}


        </div>
    )
}

export default Products;