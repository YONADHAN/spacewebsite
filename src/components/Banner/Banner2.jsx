import React from 'react';
import satelite2 from '../../assets/satelite2.jpg';
const Banner2 = () => {
  return (
    <div>
      <div className="bg-black text-white pb-1 relative z-10 top-[890px] sm:top-[400px] top-0">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">

            <div className=' order-12 sm:order-1 my-auto space-y-3  border-l-sky-900 border-l-2 border-b-sky-900 border-b-2 py-10 pl-10'>
                <p className='text-sky-800 font-bold'>OUR MISSION</p>
                <h1 className='text-4xl'>RAPIDCAST</h1>
                <p >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime ratione iste laboriosam asperiores consectetur incidunt accusamus perspiciatis tempore. Recusandae, at est! Error, distinctio! Ex excepturi magnam doloremque nostrum fugit culpa.</p>
                <button className='primary-button '>Learn More</button>
            </div>
            <div  className='sm:order-12'>
                <img src={satelite2} alt="" className='object-cover scale-y-[85%] scale-x-[90%]'/>
            </div>
            
        </div>
      </div>
    </div>
   
    </div>
  );
}

export default Banner2;
