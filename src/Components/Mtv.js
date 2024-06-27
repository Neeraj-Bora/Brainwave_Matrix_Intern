import React from "react";
import heart from "./logo/heart.png";
import chat from "./logo/messenger.png";
import back from './logo/left.png'
import add from './logo/add.png'
import user from './logo/user.png'
export default function Mtv() {
  return (
    <div className="bg-rose-50 flex items-center justify-center h-screen relative">
        <img className='w-12 h-12 absolute top-[10px] left-[10px]' src={back}/>
        <img className='w-8 h-8 absolute right-[100px] top-[10px]' src={add}/> 
        <img className='w-8 h-8 absolute right-[30px] top-[10px]' src={user}/>
      <div className="w-[400px] h-[650px] bg-white rounded-lg relative">
        hey
        <img className="w-7 h-7 absolute left-[420px] top-[400px]" src={heart} />
        <img className="w-7 h-7 absolute left-[420px] top-[450px]" src={chat} />
      </div>
    </div>
  );
}
