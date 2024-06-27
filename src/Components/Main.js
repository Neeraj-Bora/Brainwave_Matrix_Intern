import React from "react";
import Navbar from "./Navbar.js"
import Login from "./Login.js"
import Otp from "./Otp.js";
import Banner from "./Banner.js";
import Categories from "./Categories.js";

export default function Main() {
  return (
  <div className="min-h-[100%] min-w-[100%]">
      <div className="h-full w-full  flex flex-col items-center">
        <Banner/>
      </div>
      <div className="Categories">
        <Categories/>
      </div>
      
  </div>
      
        
  );
}
