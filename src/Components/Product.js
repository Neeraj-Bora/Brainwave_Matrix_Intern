import React from 'react';

export default function Product(props){
    
    return(
        <div className="flex flex-col flex-wrap absolute z-10 top-[100px]  h-[500px] w-[1200px] rounded-lg bg-gray-100 opacity-95 "onMouseLeave={props.onMouseOut}>
            {props.typeProduct.map((data,index)=>{
              return(
                    <div className="mx-5 mt-3 border border-gray-100 border-b-gray-300 border-2 pb-2 w-[100px]" >
                        <div key={data.title} className=" text-red-500">{data.title}</div>
                        <div className="flex flex-col">{data.items.map((item,index)=>{
                          return(
                            <div key={index} className="font-normal hover:font-bold cursor-pointer">{item}</div>
                          );
                        })}</div>
                    </div>
              );
            })}
        </div>
    );
} 