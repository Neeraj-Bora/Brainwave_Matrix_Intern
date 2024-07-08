import React from 'react';
import './CSS/Login.css'
export default function Login(){
    return(
        <div className='login flex justify-center items-center h-[100vh]'>
            <div className='box h-[500px] w-[400px]'>
                <h1 className='text-white ml-10'>Login</h1>
                <div className="ml-10 mr-10">
                    <div className="phnNum flex border border-100 h-9 w-30 focus:ring-4 bg-gray-300">
                        <p className="my-2 px-3 border-2 border-gray-300 border-r-gray-400 text-gray-500">+91</p>
                        <input
                        className="w-full px-3 bg-gray-300"
                        type="text"
                        placeholder="Mobile Number*"
                        />
                    </div>
                    <p className="text-xs text-red-500 my-5">By continuing, I agree to the <b>Terms of Use & Privacy Policy</b></p>
                    <button className="bg-red-500 w-full py-3 rounded-sm text-white font-bold" >CONTINUE</button>
                    <p className="text-xs text-red-500 my-10">Have trouble in logging in? <b>Get help</b></p>
                </div>

            </div>

        </div>
    );
}