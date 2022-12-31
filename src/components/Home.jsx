import React from 'react';
import profile from '../asset/profile.png'
import { FaCode, FaGithub, FaLinkedin, FaMapMarkedAlt, FaMapMarkerAlt, FaOrcid, FaRegEnvelopeOpen, FaRegHandPointRight, FaResearchgate, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { SiDblp, SiGooglescholar } from "react-icons/si"
import { GiArchiveResearch, GiSkills, GiTeacher } from "react-icons/gi"
import { BsCircleHalf, BsNewspaper } from "react-icons/bs"
import { ImBlog } from "react-icons/im"

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
                                    <FaMapMarkerAlt className='text-2xl text-red-800'></FaMapMarkerAlt>
                                    <h2 className='text-lg font-semibold px-2'>Office address </h2>
                                </div>
                                <div>
                                    <h3 className='text-sm px-8'>1515 Ste-Catherine Street West,<br />
                                        EV 003.222, Montreal, Quebec, Canada H3G 2W1</h3>
                                </div>
                            </div>
                            <div className='ml-8'>
                                <div className='flex'>
                                    <FaRegEnvelopeOpen className='text-2xl text-blue-700'></FaRegEnvelopeOpen>
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
                        </p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <button className='btn btn-primary'><a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Download CV</a></button>

                        </div>
                    </div>
                </div>
            </section>
            {/* Social Connections */}
            <section className='md:hidden'>
                <div>
                    <h1 className='text-center text-3xl font-bold pb-10 underline'>Connections</h1>
                </div>
                <div className='w-full mx-auto'>
                    <div className='flex justify-center flex-wrap'>
                        <Link>
                            <div className='flex m-3'>
                                <FaLinkedin className='text-2xl text-blue-800'></FaLinkedin>
                                <h5 className='pl-2'>LinkedIn</h5>
                            </div>
                        </Link>
                        <Link>
                            <div className='flex m-3'>
                                <FaOrcid className='text-2xl text-lime-600'></FaOrcid>
                                <h5 className='pl-2'>ORCiD</h5>
                            </div>
                        </Link>
                        <Link>
                            <div className='flex m-3'>
                                <FaResearchgate className='text-2xl text-emerald-500'></FaResearchgate>
                                <h5 className='pl-2'>Research Gate</h5>
                            </div>
                        </Link>
                        <Link>
                            <div className='flex m-3'>
                                <FaGithub className='text-2xl'></FaGithub>
                                <h5 className='pl-2'>Github</h5>
                            </div>
                        </Link>
                        <Link>
                            <div className='flex m-3'>
                                <SiGooglescholar className='text-2xl text-sky-700'></SiGooglescholar>
                                <h5 className='pl-2'>Google Scholar</h5>
                            </div>
                        </Link>
                        <Link>
                            <div className='flex m-3'>
                                <FaTwitter className='text-2xl text-cyan-600'></FaTwitter>
                                <h5 className='pl-2'>Twitter</h5>
                            </div>
                        </Link>
                        <Link>
                            <div className='flex m-3'>
                                <FaYoutube className='text-2xl text-red-700'></FaYoutube>
                                <h5 className='pl-2'>Youtube</h5>
                            </div>
                        </Link>
                        <Link>
                            <div className='flex m-3'>
                                <SiDblp className='text-2xl'></SiDblp>
                                <h5 className='pl-2'>DBLP</h5>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
            {/* About section */}
            <section className='w-full flex flex-col justify-center'>
                <h1 className="text-5xl font-bold text-center leading-none text-[#0a192f] sm:text-6xl">About
                </h1>
                <div className='w-full flex justify-center'>
                   <div className='sm:w-4/6'>
                   <p className="mt-6 mb-8  text-[#0a192f]  px-6 sm:mb-12">
                        <FaRegHandPointRight className='inline-block text-2xl text-[#0a192f] mx-3'></FaRegHandPointRight>  PhD Candidate in Information and Systems Engineering at Concordia University, Montreal, Canada; <br />
                        <FaRegHandPointRight className='inline-block text-2xl text-[#0a192f] mx-3'></FaRegHandPointRight>  Graduated with M.Sc. and B.Sc. in Information and Communication Engineering; <br />
                        <FaRegHandPointRight className='inline-block text-2xl text-[#0a192f] mx-3'></FaRegHandPointRight>  4.5 years of experience as Graduate Research Assistant in Bangladesh and Canada; <br />
                        <FaRegHandPointRight className='inline-block text-2xl text-[#0a192f] mx-3'></FaRegHandPointRight>  3 years of teaching experience as a Lecturer of CSE in Bangladesh and Teaching Assistant (TA) in Canada; <br />
                        <FaRegHandPointRight className='inline-block text-2xl text-[#0a192f] mx-3'></FaRegHandPointRight>  Researcher in Cyber Security, Network Security, IoT, IIoT, IoV, IoE, AI and Data Science; <br />
                        <FaRegHandPointRight className='inline-block text-2xl text-[#0a192f] mx-3'></FaRegHandPointRight>  Professional research competence in QUIC, Machine Learning, Deep Learning and Cloud Computing; <br />
                        <FaRegHandPointRight className='inline-block text-2xl text-[#0a192f] mx-3'></FaRegHandPointRight>  1.4 years of experience as Software Testing Engineer in Bangladesh; <br />
                        <FaRegHandPointRight className='inline-block text-2xl text-[#0a192f] mx-3'></FaRegHandPointRight>  5 months of experience as IT Analyst in Canada; <br />
                        <FaRegHandPointRight className='inline-block text-2xl text-[#0a192f] mx-3'></FaRegHandPointRight>  Excellent analytical capacity, methodical approach, determination with can-do mindset; <br />
                        <FaRegHandPointRight className='inline-block text-2xl text-[#0a192f] mx-3'></FaRegHandPointRight>  Proven leadership quality, organizing efficiency, autonomy with perfection even under pressure. <br />

                    </p>
                   </div>
                </div>
            </section>

            <section>
                <div>
                    <h1 className='text-center text-3xl font-bold py-10 underline'>Activities & Outputs</h1>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-16 mx-auto'>
                    <div className='sm:text-right '>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className=" sm:text-right text-center text-xl font-semibold underline">Activities</h2>
                                <div className='flex sm:justify-end justify-center py-2'>
                                    <h5 className='pr-2'>Research</h5>
                                    <GiArchiveResearch className='text-2xl text-blue-800'></GiArchiveResearch>
                                </div>
                                <div className='flex sm:justify-end justify-center py-2'>
                                    <h5 className='pr-2'>Skills</h5>
                                    <GiSkills className='text-2xl text-blue-800'></GiSkills>
                                </div>
                                <div className='flex sm:justify-end justify-center py-2'>
                                    <h5 className='pr-2'>Teaching</h5>
                                    <GiTeacher className='text-2xl text-blue-800'></GiTeacher>
                                </div>
                                <div className='flex sm:justify-end justify-center py-2'>
                                    <h5 className='pr-2'>Advising</h5>
                                    <BsCircleHalf className='text-2xl text-blue-800'></BsCircleHalf>
                                </div>


                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="sm:text-start text-center text-xl font-semibold underline">Outputs</h2>
                                <div className='flex sm:justify-start justify-center py-2'>
                                    <BsNewspaper className='text-2xl text-green-700 mr-2'></BsNewspaper>
                                    <h5 className='pr-2'>Publications</h5>
                                </div>
                                <div className='flex sm:justify-start justify-center py-2'>
                                    <FaCode className='text-2xl text-green-700 mr-2'></FaCode>
                                    <h5 className='pr-2'>Code</h5>
                                </div>
                                <div className='flex sm:justify-start justify-center py-2'>
                                    <ImBlog className='text-2xl text-green-700 mr-2'></ImBlog>
                                    <h5 className='pr-2'>Blog</h5>
                                </div>
                                <div className='flex sm:justify-start justify-center py-2'>
                                    <GiTeacher className='text-2xl text-green-700 mr-2'></GiTeacher>
                                    <h5 className='pr-2'>Talks</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;