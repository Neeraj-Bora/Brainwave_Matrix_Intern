import React from 'react';
import banner3 from './logo/banner3.jpg';
import banner2 from './logo/banner2.jpg'
export default function banner(){
    return(
        <div className="relative w-[95%] h-full">

            <img className=" w-full h-[500px] px-5 py-4" src={banner3}/>
            <img className=" w-full h-[500px] px-5 py-4" src={banner2}/>
            
        </div>
    );
}