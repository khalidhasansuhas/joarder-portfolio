import React from 'react';
import { FaBriefcase } from 'react-icons/fa';
import { GiTeacher } from 'react-icons/gi';

const Experience = () => {
    return (
        <div>
            <div>
                <h1 className='text-center text-3xl font-bold  pt-16 pb-10 text-[#0a192f] underline'>Professional Experiences</h1>
                <section className="dark:bg-gray-800 dark:text-gray-100">
                    <div className="container mx-auto flex flex-col p-6">

                        <div className="divide-y divide-gray-700">
                            <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
                                <div className="flex items-center justify-center lg:col-span-1 col-span-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-16 h-16">
                                        <path d="M472,16H168a24,24,0,0,0-24,24V344a24,24,0,0,0,24,24H472a24,24,0,0,0,24-24V40A24,24,0,0,0,472,16Zm-8,320H176V48H464Z"></path>
                                        <path d="M112,400V80H80V408a24,24,0,0,0,24,24H432V400Z"></path>
                                        <path d="M48,464V144H16V472a24,24,0,0,0,24,24H368V464Z"></path>
                                    </svg>
                                </div>
                                <div className="flex flex-col justify-center  max-w-3xl  col-span-full lg:col-span-3 text-left">
                                    <div className='flex justify-between items-center'>
                                        <div className='flex flex-col'>
                                            <span className="text-xl font-bold md:text-2xl">Concordia Institute for Information Systems Engineering </span>
                                            <i><span className="text-xl underline">Graduate Research Assistant(GRA)</span></i>
                                        </div>
                                        <div className='flex flex-col text-right w-1/3 '>
                                            <span className="text-xs "> Montreal, QC</span>
                                            <span className="text-sm font-semibold "> Jan. 2021- Present</span>
                                        </div>
                                    </div>
                                    <span className="mt-4 dark:text-gray-300">I am working as a Graduate Research Assistant at  Next Generation Network Security (NGNSec) Lab, CIISE, Concordia University. My current research areas include Cybersecurity, Artificial Intelligence, Deep Learning, Machine Learning, Data Science and Cloud Computing. </span>
                                </div>
                            </div>

                        </div>
                        <div className="divide-y divide-gray-700">
                            <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
                                <div className="flex items-center justify-center lg:col-span-1 col-span-full">
                                    <GiTeacher className='w-16 h-16'></GiTeacher>
                                </div>
                                <div className="flex flex-col justify-center  max-w-3xl  col-span-full lg:col-span-3 text-left">
                                    <div className='flex justify-between items-center'>
                                        <div className='flex flex-col'>
                                            <span className="text-xl font-bold md:text-2xl"> Concordia University</span>
                                            <i><span className="text-xl underline">Graduate Teaching Assistant (GTA)    </span></i>
                                        </div>
                                        <div className='flex flex-col text-right w-1/3 '>
                                            <span className="text-xs "> Montreal, QC</span>
                                            <span className="text-sm font-semibold "> Jan. 2021- Present</span>
                                        </div>
                                    </div>
                                    <span className="mt-4 dark:text-gray-300">I am working as a Graduate Research Assistant at  Next Generation Network Security (NGNSec) Lab, CIISE, Concordia University. My current research areas include Cybersecurity, Artificial Intelligence, Deep Learning, Machine Learning, Data Science and Cloud Computing. </span>
                                </div>
                            </div>

                        </div>
                        <div className="divide-y divide-gray-700">
                            <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
                                <div className="flex items-center justify-center lg:col-span-1 col-span-full">
                                    <FaBriefcase className='w-16 h-16'></FaBriefcase>
                                </div>
                                <div className="flex flex-col justify-center  max-w-3xl  col-span-full lg:col-span-3 text-left">
                                    <div className='flex justify-between items-center'>
                                        <div className='flex flex-col'>
                                            <span className="text-xl font-bold md:text-2xl"> 9441-0503 Quebec Inc </span>
                                            <i><span className="text-xl underline">IT Analyst (Part-time)     </span></i>
                                        </div>
                                        <div className='flex flex-col text-right w-1/3 '>
                                            <span className="text-xs "> Montreal, QC</span>
                                            <span className="text-sm font-semibold "> Sep. 2021- Jan. 2022</span>
                                        </div>
                                    </div>
                                    <span className="mt-4 dark:text-gray-300">Analyzed Information Technology related issues, provided proper solution for them.
                                        Also, served as a professional bookkeeper and data entry technician. </span>
                                </div>
                            </div>

                        </div>
                        <div className="divide-y divide-gray-700">
                            <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
                                <div className="flex items-center justify-center lg:col-span-1 col-span-full">
                                <GiTeacher className='w-16 h-16'></GiTeacher>
                                </div>
                                <div className="flex flex-col justify-center  max-w-3xl  col-span-full lg:col-span-3 text-left">
                                    <div className='flex justify-between items-center'>
                                        <div className='flex flex-col'>
                                            <span className="text-xl font-bold md:text-2xl">  World University of Bangladesh (WUB)  </span>
                                            <i><span className="text-xl underline">Lecturer of Computer Science & Engineering         </span></i>
                                        </div>
                                        <div className='flex flex-col text-right w-1/3 '>
                                            <span className="text-xs "> Dhaka, Bangladesh</span>
                                            <span className="text-sm font-semibold "> July 2018- Sept. 2020</span>
                                        </div>
                                    </div>
                                    <span className="mt-4 dark:text-gray-300">Conducted some major courses such as AI & Neural Networks, Basic Programming, OOP,
                                        Data structure and Algorithm, Discrete Mathematics, Database Management Concepts,
                                        Operating Systems, Data Communications & Computer Networks and Theory of Computing.
                                        Also, supervised undergraduate students for Projects and Thesis. </span>
                                </div>
                            </div>

                        </div>
                        <div className="divide-y divide-gray-700">
                            <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
                                <div className="flex items-center justify-center lg:col-span-1 col-span-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-16 h-16">
                                        <path d="M472,16H168a24,24,0,0,0-24,24V344a24,24,0,0,0,24,24H472a24,24,0,0,0,24-24V40A24,24,0,0,0,472,16Zm-8,320H176V48H464Z"></path>
                                        <path d="M112,400V80H80V408a24,24,0,0,0,24,24H432V400Z"></path>
                                        <path d="M48,464V144H16V472a24,24,0,0,0,24,24H368V464Z"></path>
                                    </svg>
                                </div>
                                <div className="flex flex-col justify-center  max-w-3xl  col-span-full lg:col-span-3 text-left">
                                    <div className='flex justify-between items-center'>
                                        <div className='flex flex-col'>
                                            <span className="text-xl font-bold md:text-2xl">   Computer Vision & Intelligent Interfacing Lab (CVIIL), IU  </span>
                                            <i><span className="text-xl underline">Research Assistant             </span></i>
                                        </div>
                                        <div className='flex flex-col text-right w-1/3 '>
                                            <span className="text-xs "> Kushtia, Bangladesh</span>
                                            <span className="text-sm font-semibold ">   July 2018- Sept. 2020</span>
                                        </div>
                                    </div>
                                    <span className="mt-4 dark:text-gray-300">Published 3 research papers based on Data Science, Supervised Learning, Unsupervised
                                        Learning, ANN, CNN and Computer Vision.  </span>
                                </div>
                            </div>

                        </div>
                        <div className="divide-y divide-gray-700">
                            <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
                                <div className="flex items-center justify-center lg:col-span-1 col-span-full">
                                <FaBriefcase className='w-16 h-16'></FaBriefcase>
                                </div>
                                <div className="flex flex-col justify-center  max-w-3xl  col-span-full lg:col-span-3 text-left">
                                    <div className='flex justify-between items-center'>
                                        <div className='flex flex-col'>
                                            <span className="text-xl font-bold md:text-2xl">   Spider IT Ltd.    </span>
                                            <i><span className="text-xl underline">Software Testing Engineer (Part-time Contractual)            </span></i>
                                        </div>
                                        <div className='flex flex-col text-right w-1/3 '>
                                            <span className="text-xs "> Dhaka, Bangladesh</span>
                                            <span className="text-sm font-semibold ">  uly 2018- Sept. 2020</span>
                                        </div>
                                    </div>
                                    <span className="mt-4 dark:text-gray-300">Developed, enhanced and implemented feature, integration, regression and systems’
                                        test plans. Also, tested the networking features across OS platforms, environments
                                        and updated database’s bug.   </span>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </div>

        </div>
    );
};

export default Experience;