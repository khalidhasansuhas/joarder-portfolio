import React, { useEffect } from 'react';
import profile from '../asset/profile.png.png'
import { FaCode, FaMapMarkerAlt, FaRegEnvelopeOpen } from 'react-icons/fa';
import { BiLink } from 'react-icons/bi';
import { ImBlog } from 'react-icons/im';
import { GiArchiveResearch, GiSkills, GiTeacher } from 'react-icons/gi';
import {  BsCircleHalf, BsNewspaper } from 'react-icons/bs';
import { BiBookmark } from 'react-icons/bi';
import Chart from './Chart'
import Aos from 'aos';
import 'aos/dist/aos.css';

const HomePage = () => {
    useEffect(()=>{
        Aos.init({duration: 500});
    },[])
    return (
        <>
            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex flex-col mx-auto lg:flex-row">
                    <div data-aos="flip-left" className="w-full lg:w-1/4 ">
                        <img src={profile} alt="" className="object-contain sm:p-0 sm:pl-24  sm:pt-28 mask mask-square p-20 pb-10 pt-20   " />

                    </div>
                    <div  data-aos="fade-right"  className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12">
                        <h1 className="text-5xl font-bold text-center leading-none pb-6 md:pt-12  sm:text-6xl">Y A Joarder
                        </h1>
                        <p>
                            – PhD Fellow in Information & Systems Engineering , Concordia University, Montreal, Quebec, Canada <br />
                            – Graduate Research Assistant (GRA), Concordia Institute for Information Systems Engineering (CIISE) <br />
                            – Cybersecurity, AI, ML & IoT Researcher, Next Generation Network Security (NGNSec) Lab, (CIISE) <br />
                            – Teaching Assistant (Graduate & Undergraduate Level), Concordia University, Montreal, Quebec, Canada <br />
                            – Penetration & Vulnerability Tester <br />
                            – Cybersecurity Architect & Engineer <br />
                        </p>
                    </div>
                </div>
            </section>
            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className=" container flex flex-col mx-auto lg:flex-row">
                    <div className="w-full lg:w-1/4">
                        <div data-aos="fade-right" className='flex sm:flex-col flex-col sm:pl-10 '>
                        <div className='ml-7 pl-7  pb-5 flex justify-center'>
                                <button className='btn  btn-md bg-blue-900 hover:bg-amber-600'><a  href="/" className=" font-semibold rounded "><BiBookmark className='inline-block mr-1 text-xl'></BiBookmark>Download CV</a></button>
                            </div>
                            <div className='ml-7 pb-3 '>
                                <div className='flex '>
                                    <FaMapMarkerAlt className='text-2xl text-red-800'></FaMapMarkerAlt>
                                    <h2 className='text-lg font-semibold pl-2'>Office address </h2>
                                </div>
                                <div>
                                    <h3 className='text-sm pl-8'>1515 Ste-Catherine Street West,<br />
                                        EV 003.222, Montreal, Quebec, Canada H3G 2W1</h3>
                                </div>
                            </div>
                            <div className='ml-7'>
                                <div className='flex'>
                                    <FaRegEnvelopeOpen className='text-2xl text-blue-700'></FaRegEnvelopeOpen>
                                    <h2 className='text-lg font-semibold px-2'>Email </h2>
                                </div>
                                <div>
                                    <i>
                                    <h3 className='text-xs pl-8'> ya DOT joarder AT concordia DOT ca<br />
                                        </h3>
                                    </i>
                                </div>
                            </div>
                            
                            <section date-aos="fade-up ">
                                
                                <div className=' w-full flex flex-col sm:mx-auto shadow-sm'>
                                    <div className='mb-3 pl-14 pr-7'>
                                                <h2 className="mb-3 text-center text-xl font-bold  mt-5">Activities</h2>
                                        <div className="card  bg-green-200 ">
                                            <div data-aos="fade-right"  className="card-body ">
                                                <div className='flex sm:justify-start justify-center py-2'>
                                                    <GiArchiveResearch className='text-2xl text-blue-800  mr-2'></GiArchiveResearch>
                                                    <h5 className=''>Research</h5>
                                                </div>
                                                <div className='flex sm:justify-start justify-center py-2'>
                                                    <GiSkills className='text-2xl text-blue-800 mr-2'></GiSkills>
                                                    <h5 className='pr-2'>Skills</h5>
                                                </div>
                                                <div className='flex sm:justify-start justify-center py-2'>
                                                    <GiTeacher className='text-2xl text-blue-800 mr-2'></GiTeacher>
                                                    <h5 className='pr-2'>Teaching</h5>
                                                </div>
                                                <div className='flex sm:justify-start justify-center py-2'>
                                                    <BsCircleHalf className='text-2xl text-blue-800 mr-2'></BsCircleHalf>
                                                    <h5 className='pr-2'>Advising</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mb-3 pl-14 pr-7'>
                                                <h2 className=" text-center text-xl mb-3 font-bold ">Outputs</h2>
                                        <div className="card   bg-green-200 overflow-hidden ">
                                            <div data-aos="fade-right"  className="card-body ">
                                                <div className='flex sm:justify-start justify-center py-2'>
                                                    <BsNewspaper className='text-2xl text-orange-600  mr-2'></BsNewspaper>
                                                    <h5 className=''>Publications</h5>
                                                </div>
                                                <div className='flex sm:justify-start justify-center py-2'>
                                                    <FaCode className='text-2xl text-orange-600 mr-2'></FaCode>
                                                    <h5 className='pr-2'>Code</h5>
                                                </div>
                                                <div className='flex sm:justify-start justify-center py-2'>
                                                    <ImBlog className='text-2xl text-orange-600 mr-2'></ImBlog>
                                                    <h5 className='pr-2'>Blog</h5>
                                                </div>
                                                <div className='flex sm:justify-start justify-center py-2'>
                                                    <GiTeacher className='text-2xl text-orange-600 mr-2'></GiTeacher>
                                                    <h5 className='pr-2'>Talks</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                    <div className="flex flex-col w-full pl-6 lg:w-2/3 md:pl-8 lg:pl-12">

                        <section className="dark:bg-gray-800 dark:text-gray-100">
                            <div className="container flex flex-col mx-auto lg:flex-row">
                                {/* <div data-aos="fade-up" className="w-full lg:w-1/4 px-3">
                                    <h1 className="text-3xl font-bold leading-none  pb-3">Current Project
                                    </h1>
                                    <div  className='flex flex-col '>
                                        <div>
                                            <div className='flex hover:bg-emerald-400'><BiLink className='inline-block mr-1 text-2xl '></BiLink>
                                                <a href="/"> Verified</a>
                                            </div>
                                            <div className='flex hover:bg-emerald-400'><BiLink className='inline-block mr-1 text-2xl '></BiLink>
                                                <a href="/"> SoftWare</a>
                                            </div>
                                            <div className='flex hover:bg-emerald-400'><BiLink className='inline-block mr-1 text-2xl '></BiLink>
                                                <a href="/"> Toolchain</a>
                                            </div>
                                        </div>
                                        <div className='py-3'>
                                            <a className='underline text-sky-600' href="/">Visit Project Page</a>
                                        </div>
                                        <div>
                                            <div className='flex hover:bg-emerald-400'><BiLink className='inline-block mr-1 text-2xl '></BiLink>
                                                <a href="/"> Verified</a>
                                            </div>
                                            <div className='flex hover:bg-emerald-400'><BiLink className='inline-block mr-1 text-2xl '></BiLink>
                                                <a href="/"> Network</a>
                                            </div>
                                            <div className='flex hover:bg-emerald-400'><BiLink className='inline-block mr-1 text-2xl '></BiLink>
                                                <a href="/"> Toolchain</a>
                                            </div>
                                        </div>
                                    </div>

                                </div> */}
                                <div className="flex flex-col sm:h-72 h-54 w-full sm:w-100  mx-auto">
                                    <h1 className="text-3xl font-bold leading-none text-center  pb-3">Publications
                                    </h1>
                                    <div className='sm:h-80 h-54 w-full sm:w-100 px-2'>
                                        <Chart></Chart>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <h1 className='text-center text-3xl font-bold sm:pt-10 text-[#0a192f] '>Recent Updates </h1>
                        <section className='grid grid-cols-1 mx-auto md:grid-cols-2 lg:grid-cols-3 gap-3 my-10'>
                            
                            <div data-aos="fade-up"  className="max-w-xs rounded-md shadow-md dark:bg-gray-900 bg-green-200 dark:text-gray-100">
                                <img src="https://source.unsplash.com/random/300x300/?2" alt="" className="object-cover object-center w-full rounded-t-md h-48 dark:bg-gray-500" />
                                <div className="flex flex-col justify-between p-6 bg-green-200 space-y-8">
                                    <div className="space-y-2 ">
                                        <h2 className="text-md text-justify font-semibold tracking-wide">
                                       Our latest publication on “QUIC Security” is in IEEE Xplore. Important to mention: it is one of the first surveys that focuses on the security of the QUIC protocol. <br />( <a className='text-blue-600' href="https://ieeexplore.ieee.org/document/9955622">Publication Link</a> )
                                        </h2>
                                        
                                    </div>
                                    
                                </div>
                            </div>
                            <div data-aos="fade-up" className="max-w-xs rounded-md shadow-md dark:bg-gray-900 bg-green-200 dark:text-gray-100">
                                <img src="https://source.unsplash.com/random/300x300/?2" alt="" className="object-cover object-center w-full rounded-t-md h-48 dark:bg-gray-500" />
                                <div className="flex flex-col justify-between p-6 bg-green-200 bottom-0 space-y-8">
                                    <div className="space-y-2 ">
                                        <h2 className="text-md text-justify font-semibold tracking-wide">
                                        We are featured in Concordia 3 min <br /> ( <a className='text-blue-600' href="https://www.concordia.ca/cunews/main/stories/2022/12/12/concordia-hosts-a-hands-on-cybersecurity-contest-for-students.html">Read More</a> )
                                        </h2>
                                       
                                    </div>
                                </div>
                            </div>
                            <div data-aos="fade-up" className="max-w-xs rounded-md shadow-md dark:bg-gray-900 bg-green-200 dark:text-gray-100">
                                <img src="https://source.unsplash.com/random/300x300/?2" alt="" className="object-cover object-center w-full rounded-t-md h-48 dark:bg-gray-500" />
                                <div className="flex flex-col justify-between p-6 bg-green-200 space-y-8">
                                    <div className="space-y-2 bg-green-200">
                                        <h2 className="text-md text-justify font-semibold tracking-wide">Our recent research work which is based on QUIC Protocol Security titled “A Survey on the Security Issues of QUIC” has been accepted to be presented in 6th edition of CSNet Conference, 2022 (CSNet’22) in Rio de Janeiro, Brazil! <br /> <a className='text-blue-600' href="https://ieeexplore.ieee.org/document/9955622">(Publication link)</a></h2>
                                    </div>
                                </div>
                            </div>

                        </section>
                            <button className='btn btn-sm btn-primary w-1/4 mx-auto text-center mb-20'>See all news</button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomePage;