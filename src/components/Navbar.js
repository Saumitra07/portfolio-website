import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll'
import logo1 from '../assets/logo1.jpeg'
const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <div className='w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-green-300'>
            <div>
                <img src={logo1} alt="logo image" style={{ width: '50px' }} />
            </div>

            <ul className='hidden md:flex'>
                <li>  <Link to="home" smooth={true} duration={500} >
                    Home
                </Link></li>
                <li><Link to="skills" smooth={true} duration={500} >
                    Skills
                </Link></li>
                <li><Link to="experience" smooth={true} duration={500} >
                    Experience
                </Link></li>
               

            </ul>


            <div className='md:hidden z-10' onClick={() => setNavbarOpen((prev) => !prev)}>
                {navbarOpen ? <FaTimes /> : <FaBars />}
            </div>

            <ul className={
                navbarOpen ? "absolute top-0 left-0 w-full h-screen   bg-[#0a192f] flex flex-col justify-center items-center" : "hidden"
            }>
                <li className='py-4 text-4xl'><Link onClick={() => setNavbarOpen((prev) => !prev)} to="home" smooth={true} duration={500} >
                    Home
                </Link></li>
                <li className='py-4 text-4xl'><Link to="skills" smooth={true} duration={500} >
                    Skills
                </Link></li>
                <li className='py-4 text-4xl'><Link to="experience" smooth={true} duration={500} >
                    Experience
                </Link></li>
               

            </ul>


            <div className='hidden'>

            </div>
        </div>
    )
}

export default Navbar;