import React from 'react';
import satelite1 from '../../assets/satelite1.jpg';
const Banner = () => {
  return (
    <div className="bg-black text-white pb-1 relative z-10 top-[890px] sm:top-[400px] ">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div>
                <img src={satelite1} alt="" className='object-cover'/>
            </div>
            <div className='my-auto space-y-3 xl:pr-36 border-r-sky-900 border-r-2 sm:border-t-sky-900 sm:border-t-2 py-10 pl-10 sm:pl-0'>
                <p className='text-sky-800 font-bold'>OUR MISSION</p>
                <h1 className='text-4xl'>RAPIDCAST</h1>
                <p >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime ratione iste laboriosam asperiores consectetur incidunt accusamus perspiciatis tempore. Recusandae, at est! Error, distinctio! Ex excepturi magnam doloremque nostrum fugit culpa.</p>
                <button className='primary-button '>Learn More</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
