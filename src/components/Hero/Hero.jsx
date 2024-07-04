import React from 'react';
import MountainPng from '../../assets/moon-surface-hd.png'
const Hero = () => {
  return (
    <div className='bg-black/20 h-full z-40 absolute top-0'>
        <div className='h-full flex justify-center items-center'>
            <div className='w-full p-[1rem] md:p-[2rem] '>
                <div className='grid grid-cols-1 sm:grid-cols-2 text-white gap-4'>
                    <div className='px-10 '>
                    <h1 className='text-5xl font-bold pb-3 uppercase'>Orbit The Earth</h1>
                    <p className='py-6 '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur labore corrupti animi quisquam, id, fuga fugiat necessitatibus officiis quas, eius consequuntur eos nihil assumenda alias ea delectus a. Cumque, voluptatibus.</p>
                    <button className="primary-button">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
        {/*surgasive section*/}
        <img src={MountainPng} alt="" className='absolute w-full z-10 right-0 bottom-0 brightness-50 '/>
        {/*botttom gradient section*/}
        <div className='absolute bottom-0 w-full z-30 bg-gradient-to-b from-transparent from-[20%] to-black to-[90%] h-[20px] sm:h-[50px] md-[60px]' ></div>
    </div>
  );
}

export default Hero;
