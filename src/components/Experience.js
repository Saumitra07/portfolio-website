import React from 'react';


const Experience = () => {

    return (
        <div name="experience" className='w-full h-full text-gray-300  bg-[#0a192f] '>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl text-gray-300 font-bold inline border-b-4 border-pink-600'>Experience</p>
                </div>
                <div className="block w-full p-6 mt-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                    <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Graduate Teaching Assistant- University of North Carolina Charlotte</p>
                    <p className='text-gray-900  dark:text-white'>March 2022 - Present</p>
                    <ul class="w-full space-y-1 text-gray-900 list-disc ml-5 mt-3 dark:text-white">
                        <li>
                            Assisting the professor for graduate level Database Systems and Data structies and algorithms course to develop course modules, evaluating the
                            assignments and assisting students with their doubts.
                        </li>
                    </ul>
                </div>
                <div className="block w-full p-6 mt-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Software Engineer Intern, Pearson</p>
                    <p className='text-gray-900  dark:text-white'>June 2022 - Aug 2022</p>
                    <ul class="w-full space-y-1 text-gray-900 list-disc ml-5 mt-3 dark:text-white">
                        <li>
                            Developed UI components for Pearson’s Mylab and Mastering portal using React-Typescript.
                        </li>
                        <li>
                            Improved the accessibility of the components as per ARIA (Accessible Rich Internet Applications) standards.
                        </li>
                        <li>
                            Wrote unit tests using Jest and React testing library.
                        </li>
                    </ul>
                </div>

                <div className='w-full p-6 mt-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>

                    <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">System Engineer, Tata Consultancy Services, Mumbai, India</p>

                    <p className=' dark:text-white'>Royal Bank of Canada –Capital Markets Digital Channels and Fixed Income Team</p>
                    <p className='text-gray-900  dark:text-white mt-2'>June 2019 - August 2021</p>
                    <ul class="w-full space-y-1 text-gray-900 list-disc ml-5 mt-3 dark:text-white">
                        <li>
                            Supported multiple trading and web applications used globally by RBC capital markets by performing daily
                            health checks and troubleshooting ongoing production issues .
                        </li>
                        <li>
                            Improved the application reliability by setting up the monitors for services in Dynatrace and enhanced the alerting
                            process by setting up the ITRS to capture log events.
                        </li>
                        <li>
                            Reduced the manual efforts of restarts by 1 hour per day by scheduling the application jobs in Control-M.

                        </li>
                        <li>
                            Handled change records and performing post implementation verification tasks and participated in disaster recovery tasks.
                        </li>
                        <li>
                            Fixed the queries raised by front office users and through ServiceNow incidents.
                        </li>

                    </ul>
                </div>

            </div>
        </div>
    )

}

export default Experience;
