import React from 'react';
import { FaGenderless } from 'react-icons/fa';

const projects = () => {
    return (
        <div className='h-screen '>
            <h1 className='text-center text-3xl font-bold  pt-20  text-[#0a192f] underline'>Highlights Projects</h1>
            <section className="dark:bg-gray-800 dark:text-gray-100 md:pl-72">
                    <div className="container mx-auto flex flex-col p-6">

                        <div className="divide-y divide-gray-700">
                            <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
                                
                                <div className="flex flex-col justify-center  max-w-3xl  col-span-full lg:col-span-3 text-left">
                                    <div className='flex justify-between items-center'>
                                        <div className='flex flex-col'>
                                            <span className="text-xl font-bold md:text-2xl"> Academic & .....Projects </span>
                                            
                                        </div>
                                    
                                    </div>
                                    <span className="mt-4 dark:text-gray-300">
                                        <FaGenderless className='inline-block'/> Model Inversion Attack in MLaaS System and Its Countermeasures <br />
                                        <FaGenderless className='inline-block'/> Concept Development of Autonomous Vehicles: Self-Driving Smart Car<br />
                                        <FaGenderless className='inline-block'/>  Improvement of ANN-based Offline Handwritten Character Recognition Using Gradient <br />
                                        <FaGenderless className='inline-block'/> University Library Automation System <br />
                                        
                                    
                                    </span>
                                </div>
                            </div>

                        </div>
                       

                    </div>
                </section>
        </div>
    );
};

export default projects;