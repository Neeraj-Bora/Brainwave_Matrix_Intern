import React from 'react';
import {Link} from 'react-router-dom'
import studio from './logo/studio.jpg'
export default function Studio(props){
    return(
        <div className='absolute w-[500px] h-[550px] top-[100px] left-[500px] bg-white opacity-95 z-10 ' onMouseLeave={props.onMouseOut}>
            <h1 className='text-center'>Studio</h1>
            <p className='text-center font-light'>Your daily inspiration for everything fashion</p>
            <img className='px-10 pt-10 pb-5' src={studio}/>
            
            <div className='border border-gray-300 border-2  p-3 w-[200px] ml-[150px] '><Link to='/studio'>Explore Studio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#8827; </Link></div>
        </div>
    );
}