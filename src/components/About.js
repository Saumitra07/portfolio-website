import React from 'react';

const About=()=>{

        return(
            <div name='about' className='w-full h-screen text-gray-300  bg-[#0a192f]'>
                <div className='flex flex-col justify-center items-center w-full h-full'>
                    <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                         <div className='sm:text-right pb-8 pl-4'>
                            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                              About
                            </p>
                         </div>
                         <div>
                         </div>
                    </div> 
                    <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4' >
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi. I'm Saumitra.</p>
                        </div>
                        <div>
              <p>I am currently pursuing masters at UNC charlotte in computer science.
              I am enthusiastic and dedicated Software Engineer who likes problem solving. I like to collaborate
            and interact with people which helps me to be a good team-player.</p>  
            </div>
                    </div> 

                </div>
            </div>
        )

}

export default About;
