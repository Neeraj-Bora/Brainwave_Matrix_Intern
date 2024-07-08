import React from 'react';
import image from './PNG/blog.jpeg'
import {motion} from 'framer-motion';
export default function Card(props){
    return(
        <motion.div 
        className='card w-[300px] h-[350px] bg-rose-200 m-10 rounded-lg'
        initial={{opacity:0, scale:0.9, x:-100}}
        whileInView={{opacity:1, scale:1, x:0}}
        transition={{duration:0.6}}

        >
            <img src={image} className='w-[300px] h-[150px] rounded-lg'/>
            <div>
                <p>{props.blog.title}</p>
                <p>{props.blog.date}</p>
                <p>{props.blog.keywords}</p>
                <p>{props.blog.author}</p>
            </div>
        </motion.div>
    );
}