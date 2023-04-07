import React from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import Python from '../assets/python.png';
import Java from '../assets/java.png';
import Javascript from '../assets/javascript.png';
import ReactIm from '../assets/react.png';
import Github from '../assets/github.png'
import node from '../assets/node.png'
const Skills=()=>{

    return(
        <div name="skills" className='w-full bg-[#0a192f] text-gray-300'>
            <div className='max-w-[1000px] w-full h-full p-4 flex flex-col mx-auto justify-center '>
                <div className='text-4xl font-bold inline border-b-4 border-pink-600'>
                      <p>Skills</p>
                </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={ReactIm} className='w-20 mx-auto'/>
                    <p className='my-4 text-gray-300'>React</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={HTML} className='w-20 mx-auto'/>
                    <p className='my-4 text-gray-300'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={Java} className='w-20 mx-auto'/>
                    <p className='my-4 text-gray-300'>Java</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={Javascript} className='w-20 mx-auto'/>
                    <p className='my-4 text-gray-300'>Javascript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={Python} className='w-20 mx-auto'/>
                    <p className='my-4 text-gray-300'>Python</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={node} className='w-20 mx-auto'/>
                    <p className='my-4 text-gray-300'>Node JS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={Github} className='w-20 mx-auto'/>
                    <p className='my-4 text-gray-300'>Github</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={CSS} className='w-20 mx-auto'/>
                    <p className='my-4 text-gray-300'>CSS</p>
                </div>
            </div>
            </div>

        </div>
    )

}

export default Skills;