import React from 'react';
import Navbar from './Components/Navbar.jsx'
import Home from './Components/Home.jsx'
import BlogPost from './Components/BlogPost.jsx'
import Templates from './Components/Templates.jsx'
import Login from './Components/Login.jsx'
export default function App(){
    return(
        <div>
            <Navbar/>
            <Home/>
            <BlogPost/>
            <Templates/>
            {/* <Login/> */}
        </div>
    );
}