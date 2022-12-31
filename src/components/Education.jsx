import React from 'react';
import { FaGenderless, FaUserGraduate } from 'react-icons/fa';
import { GiGraduateCap } from 'react-icons/gi';

const Education = () => {
    return (
        <div>
            <div>
                <h1 className='text-center text-3xl font-bold  pt-20  text-[#0a192f] underline'>Education</h1>
                <section className="dark:bg-gray-800 dark:text-gray-100">
                    <div className="container mx-auto flex flex-col p-6">

                        <div className="divide-y divide-gray-700">
                            <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
                                <div className="flex items-center justify-center lg:col-span-1 col-span-full">
                                    <FaUserGraduate className='w-16 h-16'></FaUserGraduate>
                                </div>
                                <div className="flex flex-col justify-center  max-w-3xl  col-span-full lg:col-span-3 text-left">
                                    <div className='flex justify-between items-center'>
                                        <div className='flex flex-col'>
                                            <span className="text-xl font-bold md:text-2xl"> Doctor of Philosophy (Ph.D.)  </span>
                                            
                                        </div>
                                        <div className='flex flex-col text-right w-1/3 '>

                                            <span className="text-sm font-semibold "> 2021 – Current</span>
                                        </div>
                                    </div>
                                    <span className="mt-4 dark:text-gray-300">
                                        <FaGenderless className='inline-block'/> PhD in Information & Systems Engineering, <br />
                                        <FaGenderless className='inline-block'/> Concordia Institute for Information Systems Engineering (CIISE), <br />
                                        <FaGenderless className='inline-block'/>  Concordia University, Montreal, Quebec, Canada <br />
                                        <FaGenderless className='inline-block'/> <span className='font-semibold'>Current Research Topic:</span> QUIC Protocol Security  <br />
                                    
                                    </span>
                                </div>
                            </div>

                        </div>
                        <div className="divide-y divide-gray-700">
                            <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
                                <div className="flex items-center justify-center lg:col-span-1 col-span-full">
                                    <GiGraduateCap className='w-16 h-16'></GiGraduateCap>
                                </div>
                                <div className="flex flex-col justify-center  max-w-3xl  col-span-full lg:col-span-3 text-left">
                                    <div className='flex justify-between items-center'>
                                        <div className='flex flex-col'>
                                            <span className="text-xl font-bold md:text-2xl"> Master of Science (M.Sc.)      </span>
                                            
                                        </div>
                                        <div className='flex flex-col text-right w-1/3 '>

                                            <span className="text-sm font-semibold ">  2014 – 2015</span>
                                        </div>
                                    </div>
                                    <span className="mt-4 dark:text-gray-300">
                                        <FaGenderless className='inline-block'/> M.Sc. in Information and Communication Engineering (ICE)  <br />
                                        <FaGenderless className='inline-block'/> Thesis (Research) Based  <br />
                                        <FaGenderless className='inline-block'/>   Department of Information & Communication Engineering (ICE) <br />
                                        <FaGenderless className='inline-block'/>   Islamic University (IU), Bangladesh  <br />
                                        <FaGenderless className='inline-block'/> <span className='font-semibold'>Senior Thesis Title:</span> A Novel Hybrid Model Algorithm for Robust Big Data Clustering and Analysis <br />
                                    
                                    </span>
                                </div>
                            </div>

                        </div>
                        <div className="divide-y divide-gray-700">
                            <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
                                <div className="flex items-center justify-center lg:col-span-1 col-span-full">
                                    <GiGraduateCap className='w-16 h-16'></GiGraduateCap>
                                </div>
                                <div className="flex flex-col justify-center  max-w-3xl  col-span-full lg:col-span-3 text-left">
                                    <div className='flex justify-between items-center'>
                                        <div className='flex flex-col'>
                                            <span className="text-xl font-bold md:text-2xl"> Bachelor of Science (B.Sc.)         </span>
                                            
                                        </div>
                                        <div className='flex flex-col text-right w-1/3 '>

                                            <span className="text-sm font-semibold ">  2010 – 2014</span>
                                        </div>
                                    </div>
                                    <span className="mt-4 dark:text-gray-300">
                                        <FaGenderless className='inline-block'/> B.Sc. in Information & Communication Engineering (ICE)  <br />
                                        <FaGenderless className='inline-block'/> Thesis (Research) Based  <br />
                                        <FaGenderless className='inline-block'/>   Department of Information & Communication Engineering, Islamic University, Bangladesh    <br />

                                        <FaGenderless className='inline-block'/> <span className='font-semibold'>Senior Thesis Title:</span> Improvement of ANN-based Offline Handwritten Character Recognition Using Gradient and Geometric Feature Extraction Techniques <br />
                                    
                                    </span>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>
            </div>
        </div>
    );
};

export default Education;