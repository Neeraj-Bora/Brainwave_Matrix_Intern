import React from 'react'
import './CSS/Templates.css'
import t1 from './PNG/template1.png'
import t2 from './PNG/template2.png'
import t3 from './PNG/template3.jpg'
import t4 from './PNG/template4.jpg'
import s1 from './PNG/sticker1.png'
import s2 from './PNG/sticker2.png'
import {motion} from 'framer-motion'
export default function Templates(){
    return(
        <div id='templates' className='templates'>
        <h1 className='italic m-0 p-10 text-white text-[60px]'>Explore New Templates</h1>
        <div className='flex'>
            <motion.div className='demotemplates flex flex-wrap'
                initial={{opacity:0, scale:0.9, x:-100}}
                whileInView={{opacity:1, scale:1, x:0}}
                transition={{duration:0.6}}>
                    <img src={t1} className='w-[300px] h-[400px] m-10'/>
                    <img src={t2}className='w-[300px] h-[400px] m-10'/>
                    <img src={t3}className='w-[300px] h-[400px] m-10'/>
                    <img src={t4}className='w-[300px] h-[400px] m-10'/>
            </motion.div>
            <motion.div className='relative w-[600px]'
                 initial={{opacity:0, scale:0.9, y:30}}
                 whileInView={{opacity:1, scale:1, y:0}}
                 transition={{duration:0.6}}>
                <img src={s1} className='s1 absolute left-[2px] top-[120px] w-[150px] h-[200px]'/>
                <img src={s2} className='s2 absolute left-10 top-[160px] w-[150px] h-[200px]'/>
                <div className='absolute bottom-[200px] right-[150px] w-[400px] h-[100px] border border-red-500 flex justify-center items-center hover:shadow-lg hover:shadow-pink-500 cursor-pointer'><p className='text-pink-400 text-[20px]'>Explore More</p></div>
            </motion.div>
            </div>
        </div>
    );
}