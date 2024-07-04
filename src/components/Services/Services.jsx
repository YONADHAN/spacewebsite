import React from 'react';
import { FaShuttleSpace,FaSpaceAwesome,FaReact } from 'react-icons/fa6';
import wave from '../../assets/wave.gif';

const ServiceData = [
    {
        title:"HST",
        content:"300-1500km",
        description:"Used for astronamical observations capturing stunning images of the universe",
        icon:<FaReact className="text-7xl"/>,
        aosDelay:"300"
    },
    {
        title:"ISS",
        content:"300-1500km",
        description:"Used for astronamical observations capturing stunning images of the universe",
        icon:<FaShuttleSpace className="text-7xl"/>,
        aosDelay:"300"
    },
    {
        title:"GPS",
        content:"300-1500km",
        description:"Used for astronamical observations capturing stunning images of the universe",
        icon:<FaSpaceAwesome className="text-7xl"/>,
        aosDelay:"300"
    },
]

const Services = () => {
  return (
    <>
        <div className="container bg-black text-white  relative">
            <div className='min-h-[400px]'>
                <div className="grid gride-cols-1 sm:grid-cols-3 gap-6 relative z-10">
                    {
                        ServiceData.map((data,index)=>(
                            <div key={index} className='min-h-[180px] flex flex-col justify-center items-center bg-sky-900/60 rounded-xl py-8 px-3 text-center text-2xl w-full lg:w-[300px] mx-auto backdrop-blur-sm' >
                                {data.icon}
                                <h1>{data.title}</h1>
                                <p>{data.content}</p>
                                <p className='text-sm'>{data.description}</p>
                            </div>
                        ))
                    }
                </div>
                <img src={wave} alt="" className='mx-auto min-h-[200px] w-full mix-blend-screen sm:-translate-y-[27rem] -translate-y-[10rem] relative  Z-[0]' />
            </div>

        </div>
    </>
  );
}

export default Services;
