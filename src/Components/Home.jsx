import React from 'react';
import './CSS/Home.css'
import plus from './PNG/plus.png'
export default function Home(){
    return(
        <div id='home' className='home text-white'>
            <h1 className='tagline text-[80px] p-5 ml-10 pt-20 m-0'>Embark on a <br className="p-0 m-0"/>Journey of<br/> Blogging</h1>
            <h2 className='tagline text-[50px] m-10 pl-10'>Deliver the knowledge<br/> within you</h2>
            <div className='absolute top-60 right-80 z-5'>
                <h1>Create Now</h1>
                <div className='createButton w-[200px] h-[200px] bg-violet-950 rounded-[50px] flex justify-center items-center'><img className='w-[90px] h-[90px] rounded-[27px] hover:w-[100px] hover:h-[100px] hover:contrast-150 hover:drop-shadow-xl cursor-pointer hover:shadow-lg hover:shadow-pink-500' src={plus}/></div>
            </div>
        </div>
    );
}