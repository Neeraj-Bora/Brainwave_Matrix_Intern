import React from 'react';
import Navbar from './Components/Navbar.jsx'
import Main from './Components/Main.jsx'
import BlogPost from './Components/BlogPost.jsx'
import Templates from './Components/Templates.jsx'
import Login from './Components/Login.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
export default function App(){
    return(
        <div>
            <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
            </BrowserRouter>
            
        </div>
    );
}