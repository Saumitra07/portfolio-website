import React,{useState} from 'react';
import {FaBars,FaTimes} from 'react-icons/fa';
import logo from '../assets/logo.png';
const Navbar=()=>{
    const [navbarOpen, setNavbarOpen] = useState(false);
    return(
        <div className='w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-green-300'>
            <div>
              <img src={logo} alt="logo image" style={{width:'50px'}}/>
            </div>
          
                <ul className='hidden md:flex'>
                    <li>Home</li>
                    <li>Education</li>
                    <li>Experience</li>
                    <li>Skills</li>
                    <li>Contact</li>
                </ul>
           
           
            <div className='md:hidden z-10' onClick={()=> setNavbarOpen((prev)=>!prev)}>
           {navbarOpen?<FaTimes/>:<FaBars />} 
            </div>
          
            <ul className={
          navbarOpen ? "absolute top-0 left-0 w-full h-fit   bg-[#0a192f] flex flex-col justify-center items-center" : "hidden"
        }>
                    <li className='py-6 text-4xl'>Home</li>
                    <li className='py-6 text-4xl'>Education</li>
                    <li className='py-6 text-4xl'>Experience</li>
                    <li className='py-6 text-4xl'>Skills</li>
                    <li className='py-6 text-4xl'>Contact</li>
                </ul>
         

            <div className='hidden'>
            
            </div>
        </div>
    )
}

export default Navbar;