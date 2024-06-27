import React from "react";
// import PhoneInput from 'react-phone-input-2'
// import 'react-phone-input-2/lib/style.css'
import {useState} from 'react';

export default function Login() {

  const handleOnChange=(event)=>{
    setPhone(event.target.value)
  }
  const [phone, setPhone]= useState("");
  // const [user, setUser]= useState<any>(null);

  // const sendOtp=()=>{
  //   const recaptcha= new RecaptchaVerifier(auth,"recaptcha",{})
  //   const confirmation= signInWithPhoneNumber(auth,phone,recaptcha)
  //   setUser(confirmation)
  // }
  return (
    <div  className="bg-red-50 h-screen">
      
        <div className="flex flex-col h-full w-full items-center justify-center ">
        <div className="h-100 w-100 bg-white">
        <h1 className="text-xl ml-10 my-10">
          <b>Login</b> or <b>SignUp</b>
        </h1>
        <div className="ml-10 mr-10">
          <div className="phnNum flex border border-100 h-9 w-30 focus:ring-4">
            <p className="my-2 px-3 border-2 border-white border-r-gray-300 text-gray-300">
              +91
            </p>
            <input
              className="w-full px-3"
              type="text"
              placeholder="Mobile Number*"
              value={phone}
              onChange={handleOnChange}
            />
          </div>
          {/* <PhoneInput 
            country={'in'}
            value={phone}
            onChange={phone => setPhone({ phone })}
            placeholder="Mobile Number*"
            buttonStyle={{backgroundColor:"white"}}
          /> */}
          <p className="text-xs text-red-500 my-5">
            By continuing, I agree to the <b>Terms of Use & Privacy Policy</b>
          </p>
          <button className="bg-red-500 w-full py-3 rounded-sm text-white font-bold" >
            CONTINUE
          </button>
          <div id="recaptcha">

          </div>
          <p className="text-xs text-red-500 my-10">Have trouble in logging in? <b>Get help</b></p>
        </div>
      </div>
        </div>
      </div>
  );
}
