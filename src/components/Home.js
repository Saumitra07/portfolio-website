import React from 'react';
const Home=()=>{
    return (
        <div className='w-full h-full bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
              <p className=' text-xl text-pink-300' > Hi, My name is </p>
              <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Saumitra Apte</h1>  
              <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I am a Full-stack developer.</h2>  
              <p className='text-[#8892b0] py-4 max-w-[700px]'>
              Graudate student at UNC charlotte. 2 years of work experience.
              </p>
              <div>
           <a href='https://drive.google.com/file/d/1c7_juaAKxCxIiWuD3n5SgI6RqB2jE_OX/view?usp=sharing' target='_blank'>  <button type="button" class="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full py-3 px-3 text-sm md:text-xl md:px-6 md:py-4 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Resume</button></a> 
            </div>
            </div>

           
           
        </div>
    )
}

export default Home;
