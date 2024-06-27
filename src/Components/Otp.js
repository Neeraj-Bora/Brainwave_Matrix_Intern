import React from 'react';

export default function otp(){
    return(
        <div className="otpPage h-100 w-100 bg-white">
            <img src="/"/>
            <h2>Verify with OTP</h2>
            <p>Sent to </p>
            <form action="#">
                <div className="otp-field flex">
                    <input type="number" className="h-9 w-7 border-2 mx-2 my-5 text-center"/>
                    <input type="number" className="h-9 w-7 border-2 mx-2 my-5 text-center"/>
                    <input type="number" className="h-9 w-7 border-2 mx-2 my-5 text-center"/>
                    <input type="number" className="h-9 w-7 border-2 mx-2 my-5 text-center"/>
                </div>
            </form>
        </div>
    );
}