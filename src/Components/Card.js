import React from 'react';

export default function Card(props){
    return(
        <div className="h-[25rem] w-[15rem] m-10 bg-black text-white border border-black border-4">
            <img className="h-[15rem] w-[15rem]" src={props.image}/>
            <h2 className="ml-5">{props.name}</h2>
            <h1><b>50-80% OFF</b></h1>
            <h2>Shop Now</h2>
        </div>
    );
}