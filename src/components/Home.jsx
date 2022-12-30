import React from 'react';
import profile from '../asset/profile.png'
import { FaLinkedin, FaMapMarkedAlt, FaMapMarkerAlt, FaRegEnvelopeOpen } from "react-icons/fa";

const Home = () => {
    return (
        <div>
            <section className="dark:bg-gray-800 dark:text-[#0a192f]">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:pb-8 sm:pt:6 lg:py-10 lg:flex-row lg:justify-around">
                    <div className="flex flex-col ">
                        <div className='flex flex-col avatar items-center justify-end p-6 mt-8 lg:mt-0 lg:h-96 w-96 sm:h-80  xl:h-112 2xl:h-128'>
                            <img src={profile} alt="" className="object-contain h-72 w-full rounded-full sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                        </div>

                        <div className='flex flex-col '>
                            <div className='ml-8 pb-3'>
                                <div className='flex '>
                                    <FaMapMarkerAlt className='text-2xl'></FaMapMarkerAlt>
                                    <h2 className='text-lg font-semibold px-2'>Office address </h2>
                                </div>
                                <div>
                                    <h3 className='text-sm px-8'>1515 Ste-Catherine Street West,<br />
                                        EV 003.222, Montreal, Quebec, Canada H3G 2W1</h3>
                                </div>
                            </div>
                            <div className='ml-8'>
                                <div className='flex'>
                                    <FaRegEnvelopeOpen className='text-2xl'></FaRegEnvelopeOpen>
                                    <h2 className='text-lg font-semibold px-2'>Emails </h2>
                                </div>
                                <div>
                                    <h3 className='text-sm px-8'>Official: ya.joarder@concordia.ca<br />
                                        Personal: yajoarder@gmail.com</h3>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="flex flex-col justify-center p-6 text-center text-[#0a192f] rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl">Y A Joarder
                        </h1>
                        <p className="mt-6 mb-8  text-[#0a192f] sm:mb-12">– PhD Fellow in Information & Systems Engineering , Concordia University, Montreal, Quebec, Canada <br />
                            – Graduate Research Assistant (GRA), Concordia Institute for Information Systems Engineering (CIISE) <br />
                            – Cybersecurity, AI, ML & IoT Researcher, Next Generation Network Security (NGNSec) Lab, (CIISE) <br />
                            – Teaching Assistant (Graduate & Undergraduate Level), Concordia University, Montreal, Quebec, Canada <br />
                            – Penetration & Vulnerability Tester <br />
                            – Cybersecurity Architect & Engineer <br />
                            <br className="hidden md:inline lg:hidden" />turpis pulvinar, est scelerisque ligula sem
                        </p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <button className='btn btn-primary'><a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Download CV</a></button>

                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div>
                    <h1 className='text-center'>Contacts</h1>
                </div>
                <div>
                    <FaLinkedin></FaLinkedin> 
                </div>
            </section>
        </div>
    );
};

export default Home;