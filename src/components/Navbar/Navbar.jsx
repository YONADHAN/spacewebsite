import React from 'react';
import Logo from '../../assets/logo.png'
const Navbar = () => {
  return (
    <div className='fixed top-0 right-0 w-full bg-black/10 backdrop-blur-sm py-4 sm:py-4 z-50'>
        <div className="container">
        <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex items-center text-white font-bold text-2xl">
                <img src={Logo} alt="" className='w-10'/>
                <span>TCJ SPACE</span>
            </div>
            <div className='text-white'>
                <ul className='flex items-center gap-4 text-xl py-4 sm:py-0 '>
                    <li className='hover:text-white/70 duration-200'>
                        <a href="#">About</a>
                    </li>
                    <li className='hover:text-white/70 duration-200'>
                        <a href="#">Technology</a>
                    </li>
                    <li className='hover:text-white/70 duration-200'>
                        <a href="#">Galaxy</a>
                    </li>
                    <li className='hover:text-white/70 duration-200'>
                        <a href="#">Satelite</a>
                    </li>
                </ul>
            </div>
            <div>
                <button className='border-white border-2 rounded-md py-1 px-4 items-center text-white hover:scale-105 duration-200'>
                    Login
                </button>
            </div>
        </div>

    </div>
    </div>
  );
}

export default Navbar;
