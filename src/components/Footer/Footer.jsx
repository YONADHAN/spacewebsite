import React from 'react';

const Footer = () => {
  return (
    <div className=' bg-gradient-to-l from-sky-900/90 to-black text-white relative z-10 top-[890px] sm:top-[400px] px-14'>
      <section className='max-w-[1200px] mx-auto'>
        <div className='grid md:grid-cols-3 grid-cols-1 py-5 '>
            {/*First Column*/}
            <div className='mx-auto'>
            <h1 className='text-xl sm:text-3xl font-bold text-justify sm:text-left mb-2'>Be Ready To Grow</h1>
            <p>
                Get Exclusive <span className='font-bold'>Update </span>
                straight to your inbox.
            </p>
            
            <div className='flex my-4'>
                <input type="text"
                className='py-[0.32rem] px-3 w-full h-[100%] rounded-md inline-block focus:outline-none bg-gray-800 border-sky-500 border-2 border-r-0'placeholder='Email'
                />
                <button className="primary-button bg-sky-900 -ml-1 rounded-l-none  hover:scale-100 duration-200">Ok</button>
            </div>
            <button className='primary-button mb-5'>Subscribe</button>
            </div>
            {/*Second Column*/}
            <div className='mx-10 sm:mx-auto my-5'>
              <h1 className='font-bold text-2xl mb-2'>Links</h1>
              <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Technology</a></li>
                <li><a href="#">Galaxy</a></li>
                <li><a href="#">Satelite</a></li>
              </ul>
            </div>
            {/*Third Column*/}
            <div className='mx-10 sm:mx-auto my-5'>
              <h1 className='font-bold text-2xl mb-2'>Contact Us</h1>
              <ul>
              <li><a href="%">Space.com</a></li>
              <li><a href="%">space@gmail.com</a></li>
              <li><a href="%">6767898956</a></li>
              <li><a href="%">9090909090</a></li></ul>              
            </div>

        </div>
      </section>
    </div>
  );
}

export default Footer;
