import React from 'react';
import { FaChalkboardTeacher, FaGenderless } from 'react-icons/fa';
import { GiTeacher } from 'react-icons/gi';

const Teaching = () => {
    return (
        <div className='sm:h-full mb-10'>
            <h1 className='text-center text-5xl font-bold  pt-24  text-[#0a192f] '>Teaching</h1>
            <div className=' w-full grid sm:grid-cols-2 gap-8 px-4 mt-10'>
                <div className='w-full'>
                    <div className="flex flex-col justify-center  max-w-3xl  col-span-full lg:col-span-3 text-left sm:pl-48">
                        <div className='flex justify-between items-center'>
                            <div className='flex flex-col '>
                            <div className='flex items-center justify-center lg:col-span-1 col-span-full mb-5'>
                            <GiTeacher className='w-16 h-16 text-orange-600 '></GiTeacher>
                            </div>
                                <span className="text-xl font-bold md:text-2xl "> Concordia University, Montreal</span>  Quebec, Canada
                                <i><span className="text-xl underline">Graduate Teaching Assistant.(GTA)</span></i>
                            </div>

                        </div>
                        <span className="mt-4 dark:text-gray-300">
                        <FaGenderless className='inline-block text-2xl mr-2'></FaGenderless> Computer Networks and Protocols (COMP 6461) <br />
                            <FaGenderless className='inline-block text-2xl mr-2'></FaGenderless> Network Security and Architecture (INSE 6170) <br />
                            <FaGenderless className='inline-block text-2xl mr-2'></FaGenderless> Data Communications & Computer Networks (COMP 445) <br />
                            <FaGenderless className='inline-block text-2xl mr-2'></FaGenderless> Programming Methodology -1 (COEN 243) <br />
                            <FaGenderless className='inline-block text-2xl mr-2'></FaGenderless> Cryptographic Protocols and Network Security (INSE 6120) <br />
                            <FaGenderless className='inline-block text-2xl mr-2'></FaGenderless> Professional Practice and Responsibility (ENGR 201) <br />

                        </span>
                    </div>
                </div>
                <div className='w-full'>
                <div className="flex flex-col justify-center  max-w-3xl  col-span-full lg:col-span-3 text-left sm:pl-20">
                        <div className='flex justify-between items-center'>
                            <div className='flex flex-col '>
                                <div  className='flex items-center justify-center lg:col-span-1 col-span-full mb-5'>

                                <FaChalkboardTeacher className='w-16 h-16 text-orange-600 '></FaChalkboardTeacher>
                                </div>
                                <span className="text-xl font-bold md:text-2xl "> World University of Bangladesh (WUB)</span>  Dhaka, Bangladesh
                                <i><span className="text-xl underline">Graduate Teaching Assistant.(GTA)</span></i>
                            </div>

                        </div>
                        <span className="mt-4 dark:text-gray-300">
                            <FaGenderless className='inline-block text-2xl mr-2'></FaGenderless> Artificial Intelligence and Neural Networks with lab <br />
                            <FaGenderless className='inline-block text-2xl mr-2'></FaGenderless> Object Oriented Programming with lab <br />
                            <FaGenderless className='inline-block text-2xl mr-2'></FaGenderless>  Introduction to Programming with lab <br />
                            <FaGenderless className='inline-block text-2xl mr-2'></FaGenderless> Data Structure with lab <br />
                            <FaGenderless className='inline-block text-2xl mr-2'></FaGenderless>  Computer Algorithms with lab <br />
                            <FaGenderless className='inline-block text-2xl mr-2'></FaGenderless> Discrete Mathematics <br />
                            <FaGenderless className='inline-block text-2xl mr-2'></FaGenderless> Theory of Computing <br />
                            <FaGenderless className='inline-block text-2xl mr-2'></FaGenderless> Database Management Concepts with lab <br />
                            <FaGenderless className='inline-block text-2xl mr-2'></FaGenderless> Satellite and Telecommunications  <br />
                            <FaGenderless className='inline-block text-2xl mr-2'></FaGenderless>  Operating System lab  <br />
                            <FaGenderless className='inline-block text-2xl mr-2'></FaGenderless> Microprocessor and Assembly Language with lab <br />
                            <FaGenderless className='inline-block text-2xl mr-2'></FaGenderless>  Formal System <br />
                            <FaGenderless className='inline-block text-2xl mr-2'></FaGenderless> Computer Graphics and Multimedia with lab <br />
                            <FaGenderless className='inline-block text-2xl mr-2'></FaGenderless> Computer Networks with lab <br />
                            <FaGenderless className='inline-block text-2xl mr-2'></FaGenderless> Data Communications with lab <br />
                            <FaGenderless className='inline-block text-2xl mr-2'></FaGenderless> Computer Peripherals & Interfacing with lab<br />
                            <FaGenderless className='inline-block text-2xl mr-2'></FaGenderless>  Computer Architecture & Organization with lab <br />
                            <FaGenderless className='inline-block text-2xl mr-2'></FaGenderless> Advanced Computer Architecture & Organization with lab <br />
                            <FaGenderless className='inline-block text-2xl mr-2'></FaGenderless> Research Methodology <br />
                           
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Teaching;