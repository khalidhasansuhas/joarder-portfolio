import React, { useEffect } from 'react';
import { FaBriefcase, FaGenderless } from 'react-icons/fa';
import { GiTeacher } from 'react-icons/gi';
import banner from '../asset/banner.png';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Experience = () => {
    useEffect(()=>{
        Aos.init({duration: 500});
    },[])
    return (
        <div>
            <div data-aos="fade-down" data-aos-duration="1000" className="hero pt-20 h-48 border-b-8 border-orange-600" style={{ backgroundImage: `url(${banner})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content">
                    <div className="max-w-md">
                        <h1 data-aos="fade-left" className="text-3xl font-bold"> <span className='text-orange-600'>Y A Joarder ||</span> Experience</h1>
                    </div>
                </div>
            </div>
            <div>
                
                <section className="dark:bg-gray-800 dark:text-gray-100">
                    <div className="container mx-auto flex flex-col p-6">

                        <div className="divide-y divide-gray-700">
                            <div  className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
                                <div data-aos="fade-right" className="flex  justify-center lg:col-span-1 col-span-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-24 text-orange-600 h-24">
                                        <path d="M472,16H168a24,24,0,0,0-24,24V344a24,24,0,0,0,24,24H472a24,24,0,0,0,24-24V40A24,24,0,0,0,472,16Zm-8,320H176V48H464Z"></path>
                                        <path d="M112,400V80H80V408a24,24,0,0,0,24,24H432V400Z"></path>
                                        <path d="M48,464V144H16V472a24,24,0,0,0,24,24H368V464Z"></path>
                                    </svg>
                                </div>
                                <div data-aos="fade-up" className="flex flex-col justify-center  max-w-3xl  col-span-full lg:col-span-3 text-left">
                                    <div className='md:flex justify-between items-center'>
                                        <div className='flex flex-col'>
                                            <span className="text-xl font-bold md:text-2xl">Concordia Institute for Information Systems Engineering (CIISE) </span>
                                            <i><span className="text-xl  ">Graduate Research Assistant (GRA)</span></i>
                                        </div>
                                        <div className='md:flex flex-col md:text-right md:w-1/3 w-full pt-3'>
                                            <span className=" font-semibold"> Montreal, QC</span>
                                            <span className="  "> Jan. 2021- Present</span>
                                        </div>
                                    </div>
                                    <span className="mt-4 dark:text-gray-300">I am working as a Graduate Research Assistant at  Next Generation Network Security (NGNSec) Lab, CIISE, Concordia University. My current research areas include Cybersecurity, Artificial Intelligence, Deep Learning, Machine Learning, Data Science and Cloud Computing. </span>
                                </div>
                            </div>

                        </div>
                        <div className="divide-y divide-gray-700">
                            <div  className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
                                <div data-aos="fade-right" className="flex  justify-center lg:col-span-1 col-span-full">
                                    <GiTeacher className='w-24 text-orange-600 h-24'></GiTeacher>
                                </div>
                                <div data-aos="fade-up" className="flex flex-col justify-center  max-w-3xl  col-span-full lg:col-span-3 text-left">
                                    <div className='md:flex justify-between items-center '>
                                        <div className='flex flex-col'>
                                            <span className="text-xl font-bold md:text-2xl"> Concordia University</span>
                                            <i><span className="text-xl ">Graduate Teaching Assistant (GTA)    </span></i>
                                        </div>
                                        <div className='flex flex-col md:text-right md:w-1/3 mt-3 '>
                                            <span className=" "> Montreal, QC</span>
                                            <span className=" font-semibold "> Jan. 2021- Present</span>
                                        </div>
                                    </div>
                                    <span className="text-xl font-semibold pt-3 ">Teaching Assistantship Details:   </span>

                                    <div className="mt-4 dark:text-gray-300">
                                        <div className='flex justify-between  md:items-center mb-3'>
                                            <div className='flex flex-col'>
                                                <span className=" "> <FaGenderless className='inline-block'></FaGenderless> Concordia Institute for Information Systems Engineering </span>
                                                <span className=" "><span className='font-semibold '>Course Title</span>: Cryptographic Protocols and Network Security (INSE 6120)    </span>
                                            </div>
                                            <div className='flex flex-col md:text-right md:w-1/3 w-full '>

                                                <span className=" font-semibold ">  Jan. 2022 – Apr. 2022</span>
                                            </div>
                                        </div>
                                        <div className='flex justify-between items-center mb-3'>
                                            <div className='flex flex-col'>
                                                <span className=" "> <FaGenderless className='inline-block'></FaGenderless> Dept. of Computer Science and Software Engineering   </span>
                                                <span className=" "><span className='font-semibold '>Course Title</span>: Principles of Programming Languages (COMP 348)     </span>
                                            </div>
                                            <div className='flex flex-col text-right w-1/3 '>

                                                <span className=" font-semibold ">  Jan. 2022 – Jun. 2022</span>
                                            </div>
                                        </div>
                                        <div className='flex justify-between items-center mb-3'>
                                            <div className='flex flex-col'>
                                                <span className=" ">  <FaGenderless className='inline-block'></FaGenderless> Dept. of Electrical and Computer Engineering      </span>
                                                <span className=" "><span className='font-semibold '>Course Title</span>: Programming Methodology -1 (COEN 243)     </span>
                                            </div>
                                            <div className='flex flex-col text-right w-1/3 '>

                                                <span className=" font-semibold ">  Jan. 2022 – Apr. 2022</span>
                                            </div>
                                        </div>
                                        <div className='flex justify-between items-center mb-3'>
                                            <div className='flex flex-col'>
                                                <span className=" ">  <FaGenderless className='inline-block'></FaGenderless> Dept. of Computer Science and Software Engineering      </span>
                                                <span className=" "><span className='font-semibold '>Course Title</span>: Data Communications & Computer Networks (COMP 445)   </span>
                                            </div>
                                            <div className='flex flex-col text-right w-1/3 '>

                                                <span className=" font-semibold ">   Jan. 2022 – Apr. 2022</span>
                                            </div>
                                        </div>
                                        <div className='flex justify-between items-center mb-3'>
                                            <div className='flex flex-col'>
                                                <span className=" ">  <FaGenderless className='inline-block'></FaGenderless> Concordia Institute for Information Systems Engineering        </span>
                                                <span className=" "><span className='font-semibold '>Course Title</span>:  Cryptographic Protocols and Network Security (INSE 6120)   </span>
                                            </div>
                                            <div className='flex flex-col text-right w-1/3 '>

                                                <span className=" font-semibold ">   Sep. 2022 – Current</span>
                                            </div>
                                        </div>
                                        <div className='flex justify-between items-center mb-3'>
                                            <div className='flex flex-col'>
                                                <span className=" ">  <FaGenderless className='inline-block'></FaGenderless> Centre for Engineering in Society        </span>
                                                <span className=" "><span className='font-semibold '>Course Title</span>: Professional Practice and Responsibility (ENGR 201)   </span>
                                            </div>
                                            <div className='flex flex-col text-right w-1/3 '>

                                                <span className=" font-semibold ">   Sep. 2021 – Current</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="divide-y divide-gray-700">
                            <div  className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
                                <div data-aos="fade-right" className="flex  justify-center lg:col-span-1 col-span-full">
                                    <FaBriefcase className='w-24 text-orange-600 h-24'></FaBriefcase>
                                </div>
                                <div data-aos="fade-up" className="flex flex-col justify-center  max-w-3xl  col-span-full lg:col-span-3 text-left">
                                    <div className='flex justify-between items-center'>
                                        <div className='flex flex-col'>
                                            <span className="text-xl font-bold md:text-2xl"> 9441-0503 Quebec Inc </span>
                                            <i><span className="text-xl ">IT Analyst (Part-time)     </span></i>
                                        </div>
                                        <div className='flex flex-col text-right w-1/3 '>
                                            <span className=" "> Montreal, QC</span>
                                            <span className=" font-semibold "> Sep. 2021- Jan. 2022</span>
                                        </div>
                                    </div>
                                    <span className="mt-4 dark:text-gray-300">Analyzed Information Technology related issues, provided proper solution for them.
                                        Also, served as a professional bookkeeper and data entry technician. </span>
                                </div>
                            </div>

                        </div>
                        <div className="divide-y divide-gray-700">
                            <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
                                <div data-aos="fade-right" className="flex  justify-center lg:col-span-1 col-span-full">
                                    <GiTeacher className='w-24 text-orange-600 h-24'></GiTeacher>
                                </div>
                                <div data-aos="fade-up" className="flex flex-col justify-center  max-w-3xl  col-span-full lg:col-span-3 text-left">
                                    <div className='flex justify-between items-center'>
                                        <div className='flex flex-col'>
                                            <span className="text-xl font-bold md:text-2xl">  World University of Bangladesh (WUB)  </span>
                                            <i><span className="text-xl ">Lecturer of Computer Science & Engineering         </span></i>
                                        </div>
                                        <div className='flex flex-col text-right w-1/3 '>
                                            <span className=" "> Dhaka, Bangladesh</span>
                                            <span className=" font-semibold "> July 2018- Sept. 2020</span>
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
                                <div data-aos="fade-right" className="flex  justify-center lg:col-span-1 col-span-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-24 text-orange-600 h-24">
                                        <path d="M472,16H168a24,24,0,0,0-24,24V344a24,24,0,0,0,24,24H472a24,24,0,0,0,24-24V40A24,24,0,0,0,472,16Zm-8,320H176V48H464Z"></path>
                                        <path d="M112,400V80H80V408a24,24,0,0,0,24,24H432V400Z"></path>
                                        <path d="M48,464V144H16V472a24,24,0,0,0,24,24H368V464Z"></path>
                                    </svg>
                                </div>
                                <div data-aos="fade-up" className="flex flex-col justify-center  max-w-3xl  col-span-full lg:col-span-3 text-left">
                                    <div className='flex justify-between items-center'>
                                        <div className='flex flex-col'>
                                            <span className="text-xl font-bold md:text-2xl">   Computer Vision & Intelligent Interfacing Lab (CVIIL), IU  </span>
                                            <i><span className="text-xl ">Research Assistant             </span></i>
                                        </div>
                                        <div className='flex flex-col text-right w-1/3 '>
                                            <span className=" "> Kushtia, Bangladesh</span>
                                            <span className=" font-semibold ">   July 2018- Sept. 2020</span>
                                        </div>
                                    </div>
                                    <span className="mt-4 dark:text-gray-300">Published 3 research papers based on Data Science, Supervised Learning, Unsupervised
                                        Learning, ANN, CNN and Computer Vision.  </span>
                                </div>
                            </div>

                        </div>
                        <div className="divide-y divide-gray-700">
                            <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
                                <div data-aos="fade-right" className="flex  justify-center lg:col-span-1 col-span-full">
                                    <FaBriefcase className='w-24 text-orange-600 h-24'></FaBriefcase>
                                </div>
                                <div data-aos="fade-up" className="flex flex-col justify-center  max-w-3xl  col-span-full lg:col-span-3 text-left">
                                    <div className='flex justify-between items-center'>
                                        <div className='flex flex-col'>
                                            <span className="text-xl font-bold md:text-2xl">   Spider IT Ltd.    </span>
                                            <i><span className="text-xl ">Software Testing Engineer (Part-time Contractual)            </span></i>
                                        </div>
                                        <div className='flex flex-col text-right w-1/3 '>
                                            <span className=" "> Dhaka, Bangladesh</span>
                                            <span className=" font-semibold ">  July 2018- Sept. 2020</span>
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