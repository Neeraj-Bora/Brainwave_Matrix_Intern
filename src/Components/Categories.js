import React from 'react';
import {useState,useEffect} from 'react';
import Card from './Card.js'
export default function Categories(){
    const [product, setProduct] = useState([])
    const getProducts= async()=>{
        try{
            await fetch("https://api.escuelajs.co/api/v1/categories")
            .then(res=>res.json())
            .then(json=>setProduct(json))
        }catch(err){
            console.error(err);
        }
        
    }

    useEffect(()=>{
        getProducts()
    },[])
    return(
        <div className="flex flex-wrap justify-around">
            <div className="w-full text-red-500 text-2xl">
                <h1 className='text-center'><b>SHOP BY CATEGORY</b></h1>
            </div>
            {product.map((data)=>{
                return <>
                    <Card name={data.name} image={data.image}/>
                </>
            })}
        </div>
    );
}