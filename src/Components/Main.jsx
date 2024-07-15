import React from 'react';
import Home from './Home.jsx'
import Navbar from './Navbar.jsx'
import BlogPost from './BlogPost.jsx'
import Templates from './Templates.jsx'

export default function Main(){
    return(
        <div>
            <Navbar/>
            <Home/>
            <BlogPost/>
            <Templates/>
        </div>
    );
}