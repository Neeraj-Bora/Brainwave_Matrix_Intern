import React from 'react';
import article from './PNG/article.png'
import './CSS/Navbar.css'
import {Link} from 'react-scroll'
export default function Navbar(){
    return(
        <div className='fixed z-10 left-0 right-0'>
            <nav className='flex justify-between'>
                <div className='intro flex items-center m-5'>
                    <img className='h-10 w-10 mr-3' src={article} alt='img'/>
                    <div className='font-bold text-white'>IAmBlogger</div>
                </div>
                <div className='flex items-center utility m-5'>
                    <ul className='flex '>
                        <li className='cursor-pointer mr-10 relative text-gray-400 hover:text-white'><Link to='home' spy={true} smooth={true} offset={-50} duration={500} >Home</Link></li>
                        <li className='cursor-pointer mr-10 relative text-gray-400 hover:text-white'><Link to='blogpost' spy={true} smooth={true} offset={-50} duration={500} >Blog Posts</Link></li>
                        <li className='cursor-pointer mr-10 relative text-gray-400 hover:text-white'><Link to='templates' spy={true} smooth={true} offset={-50} duration={500} >Templates</Link></li>
                        <li className='cursor-pointer mr-10 relative text-gray-400 hover:text-white'><Link to='/login'>Login</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}