import React from 'react';
import {Link} from 'react-router-dom';
import saved from './logo/bookmark.png'
import settings from './logo/settings.png'
import search from './logo/search.png'
import backarrow from './logo/arrow-left.png'
import man from './logo/man.png';
import girl from './logo/girl.png';
import woman from './logo/woman.png'
import bag from './logo/bag.png'
export default function StduioReels(){
    return(
        <div className='flex bg-rose-50 flex-grow justify-center'>
            <div className=" w-[400px] h-[600px] mt-10 bg-gray-300 overflow-y-auto">
                <nav className='sticky top-0 flex justify-between bg-white px-3'>
                <ol className='flex my-3'>
                    <li><Link to='/'><img className='w-[25px] h-[25px]' src={backarrow}/></Link></li>
                    <li className='pl-2 font-semibold'>Studio</li>
                </ol>
                <ol className='flex my-3'>
                    <li><img className='w-[25px] h-[25px] ml-3' src={saved}/></li>
                    <li><img className='w-[25px] h-[25px] ml-3' src={settings} /></li>
                    <li><img className='w-[25px] h-[25px] ml-3' src={search}/></li>
                </ol>
                </nav>
                <h2 className='font-bold p-3'>Guide to Influencers' Most Coveted Looks</h2>
                <div className='influencers flex overflow-x-auto bg-white py-2' style={{WebkitOverflowScrolling:'touch'}}>
                    <img src={man} className='h-[100px] w-[100px]'/>
                    <img src={girl} className='h-[100px] w-[100px]'/>
                    <img src={girl} className='h-[100px] w-[100px]'/>
                    <img src={man} className='h-[100px] w-[100px]'/>
                    <img src={girl} className='h-[100px] w-[100px]'/>
                    <img src={man} className='h-[100px] w-[100px]'/>
                </div>
                <h2 className='font-bold p-2'>Follow Our Top Influencers</h2>
                <div className='flex bg-white overflow-x-auto'>
                    <img src={woman} className='h-[300px] w-[230px] my-3 ml-3 '/>
                    <img src={woman} className='h-[300px] w-[230px] my-3 ml-3 '/>
                    <img src={woman} className='h-[300px] w-[230px] my-3 ml-3 '/>
                    <img src={woman} className='h-[300px] w-[230px] my-3 ml-3 '/>
                    <img src={woman} className='h-[300px] w-[230px] my-3 ml-3 '/>
                    <img src={woman} className='h-[300px] w-[230px] my-3 ml-3 '/>
                </div>
                <div className='flex flex-col bg-white mt-3'>
                    <p>Beauty Scentiments</p>
                    <div className='flex'>
                        <img src={bag} className='h-[30px] w-[30px]'/>
                        <ol className='flex'>
                            <li>DKNY</li>
                            <li>DKNY</li>
                            <li>DKNY</li>
                            <li>DKNY</li>
                            <li>DKNY</li>
                            <li>DKNY</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
}