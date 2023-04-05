import React from 'react';
import {FaBars,FaTimes} from 'react-icons/fa';
import logo from '../assets/logo.png';
const Navbar=()=>{

    return(
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-green-300'>
            <div>
              <img src={logo} alt="logo image" style={{width:'50px'}}/>
            </div>
            <div>
                <ul className='flex p-2'>
                    <li>Home</li>
                    <li>Education</li>
                    <li>Experience</li>
                    <li>Skills</li>
                    <li>Contact</li>
                </ul>
            </div>
           
            <div className='hidden'>
            <FaBars/>
            </div>
            <div className='hidden'>
            <ul>
                    <li>Home</li>
                    <li>Education</li>
                    <li>Experience</li>
                    <li>Skills</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;