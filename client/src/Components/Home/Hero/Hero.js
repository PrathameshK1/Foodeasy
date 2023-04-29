import React from 'react';
import './Hero.css'

const Hero = () => {


  
  return (
    <section>
      <div className="w-full px-3 antialiased lg:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="container py-24 mx-auto text-center sm:px-4 font-sans">

              <div class="w-30 bg-fill bg-cover h-56" style={{backgroundImage:`url(https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)`}}>
            <div class="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-60">
                <div class="text-center">
                    <h1 class="text-4xl font-semibold text-white  lg:text-4xl">Donate Now and Help Needy !</h1>
                </div>
            </div>
        </div>  


            

            <div className="relative flex items-center max-w-md mx-auto mt-12 overflow-hidden text-center rounded-full shadow-3xl">
              {/* Search functionality for a medicine */}
              {/* <input
                type="text"
                name="search"
                placeholder="Search your Goods from here"
                className="w-full h-12 px-6 py-2 font-medium text-teal-800 placeholder-gray-500 tracking-wide focus:outline-none"
              /> */}
             <h1 className="text-4xl font-semibold font-display leading-10 tracking-tight text-gray-800 sm:text-3xl sm:leading-none">
              <div className="relative inline-block text-transparent text-gray-800 tracking-normal">
            </div>
            </h1>
            </div>
            <h1 className="text-4xl font-semibold font-display leading-10 tracking-tight text-gray-800 sm:text-3xl sm:leading-none">
              <div className="relative inline-block text-transparent text-gray-800 tracking-normal">
            
             Join us today to make a Change
            </div>
            </h1>
            {/* <div className="mt-12 text-base tracking-wider text-teal-300">
              Lesss Go!
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
