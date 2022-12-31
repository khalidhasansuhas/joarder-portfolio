import React from 'react';
import profile from '../asset/profile.png'
import { FaCode, FaGenderless, FaGithub, FaLinkedin, FaMapMarkedAlt, FaMapMarkerAlt, FaOrcid, FaPaperclip, FaRegEnvelopeOpen, FaRegHandPointRight, FaResearchgate, FaTwitter, FaYoutube } from "react-icons/fa";
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
                        <p className="mt-6 mb-8  text-[#0a192f] sm:mb-12">
                            <FaGenderless className='inline-block mr-1 text-xl'></FaGenderless> PhD Fellow in Information & Systems Engineering , Concordia University, Montreal, Quebec, Canada <br />
                            <FaGenderless className='inline-block mr-1 text-xl'></FaGenderless> Graduate Research Assistant (GRA), Concordia Institute for Information Systems Engineering (CIISE) <br />
                            <FaGenderless className='inline-block mr-1 text-xl'></FaGenderless> Cybersecurity, AI, ML & IoT Researcher, Next Generation Network Security (NGNSec) Lab, (CIISE) <br />
                            <FaGenderless className='inline-block mr-1 text-xl'></FaGenderless> Teaching Assistant (Graduate & Undergraduate Level), Concordia University, Montreal, Quebec, Canada <br />
                            <FaGenderless className='inline-block mr-1 text-xl'></FaGenderless> Penetration & Vulnerability Tester <br />
                            <FaGenderless className='inline-block mr-1 text-xl'></FaGenderless> Cybersecurity Architect & Engineer <br />
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
                <h1 className="text-5xl font-bold text-center leading-none text-[#0a192f] sm:text-4xl underline">About
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
            {/* Activities */}
            <section>
                <section className="dark:bg-gray-800 dark:text-gray-100">
                    <div className="container flex flex-col-reverse mx-auto lg:flex-row">
                        <div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 dark:bg-violet-400 dark:text-gray-900">
                            <div>
                                <h1 className='text-center text-3xl font-bold py-10 text-[#0a192f] underline'>Current Engagements</h1>
                            </div>
                            <div className="flex space-x-2 sm:space-x-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                </svg>
                                <div className="space-y-2">
                                    <p className="text-lg font-medium leading-snug">Ongoing Research Topic</p>
                                    <p className="leading-snug">Artificial Intelligence Enabled Cyber Security (QUIC Protocol)</p>
                                </div>
                            </div>
                            <div className="flex space-x-2 sm:space-x-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                </svg>
                                <div className="space-y-2">
                                    <p className="text-lg font-medium leading-snug">Professional Responsibilities</p>
                                    <p className="leading-snug">Teaching Assistant, Concordia University
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div className="lg:w-1/2 xl:w-3/5 dark:bg-gray-800">
                            <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
                                <section>
                                    <div>
                                        <h1 className='text-center text-3xl font-bold py-5 text-[#0a192f] underline'>Activities & Outputs</h1>
                                    </div>
                                    <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-16 mx-auto'>
                                        <div className='sm:text-right '>
                                            <div className="card w-60 bg-base-100 ">
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
                                            <div className="card w-60 bg-base-100 ">
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
                        </div>
                    </div>
                </section>
            </section>
            <section>
                <section className="dark:bg-gray-800 dark:text-gray-100">
                    <div className="container flex flex-col-reverse mx-auto lg:flex-row">
                        <div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 dark:bg-violet-400 dark:text-gray-900">
                        <h2 className="mb-8 text-4xl font-bold leading-none text-center text-[#0a192f] underline">Recent Updates</h2>
                            <div className="flex space-x-2 sm:space-x-4">
                                <FaPaperclip className='text-6xl mr-2'></FaPaperclip>
                                <div className="space-y-2">
                                    <p className="leading-snug">Our latest publication on “QUIC Security” is in IEEE Xplore. Important to mention: it is one of the first surveys that focuses on the security of the QUIC protocol. ( <a className='text-blue-600' href="">Publication Link</a> )</p>
                                </div>
                            </div>
                            <div className="flex space-x-2 sm:space-x-4">
                                <FaPaperclip className='text-xl mr-2'></FaPaperclip>
                                <div className="space-y-2">
                                    <p className="leading-snug">We are featured in Concordia 3 min read… ( <a className='text-blue-600' href="https://www.concordia.ca/cunews/main/stories/2022/12/12/concordia-hosts-a-hands-on-cybersecurity-contest-for-students.html">Read More</a> )</p>
                                </div>
                            </div>
                            <div className="flex space-x-2 sm:space-x-4">
                                <FaPaperclip className='text-7xl mr-2'></FaPaperclip>
                                <div className="space-y-2">
                                    <p className="leading-snug">Our recent research work which is based on QUIC Protocol Security titled “A Survey on the Security Issues of QUIC” has been accepted to be presented in 6th edition of CSNet Conference, 2022 (CSNet’22) in Rio de Janeiro, Brazil!</p>
                                </div>
                            </div>
                            <div className="flex space-x-2 sm:space-x-4">
                                <FaPaperclip className='text-2xl mr-2'></FaPaperclip>
                                <div className="space-y-2">
                                    <p className="leading-snug">My research talk on <span className='font-semibold'>QUIC Protocol and Its Past, Current and Future</span> ( <a className='text-blue-600' href="https://www.concordia.ca/cunews/main/stories/2022/12/12/concordia-hosts-a-hands-on-cybersecurity-contest-for-students.html">Link</a> )</p>
                                </div>
                            </div>
                            <div className="flex space-x-2 sm:space-x-4">
                                <FaPaperclip className='text-8xl mr-2'></FaPaperclip>
                                <div className="space-y-2">
                                    <p className="leading-snug"> I am going to give a virtual (Zoom Cloud Meeting Platform) research talk on <span className='font-semibold'> “QUIC Protocol and Its Past, Current and Future” </span>The event is organized by ICT Research Lab, Bangladesh. Only limited participants will chance to join the virtual research talk. Selected participants will get a confirmation email with zoom ID and Passcode.</p>
                                </div>
                            </div>
                            <div className="flex space-x-2 sm:space-x-4">
                                <FaPaperclip className='text-7xl mr-2'></FaPaperclip>
                                <div className="space-y-2">
                                    <p className="leading-snug"> Our latest publication titled: <span className='font-semibold'>“Active Federated YOLOR Model for Enhancing  Autonomous Vehicles Safety”</span> is in Springer. It is published in Mobile Web and Intelligent Information Systems. MobiWIS 2022. ( <a className='text-blue-600' href="/">Publication Link</a> )</p>
                                </div>
                            </div>

                        </div>
                        <div className="lg:w-1/2 xl:w-3/5 dark:bg-gray-800">
                            <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
                                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 dark:bg-gray-800 dark:text-gray-100">
                                    <h2 className="mb-8 text-4xl font-bold leading-none text-center text-[#0a192f] underline">Research Interest</h2>
                                    <ul className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                                        <li className="flex items-center space-x-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current text-green-600 dark:text-violet-400">
                                                <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                                <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                            </svg>
                                            <span>Cyber Security</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current text-green-600 dark:text-violet-400">
                                                <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                                <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                            </svg>
                                            <span>Network Security</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current text-green-600 dark:text-violet-400">
                                                <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                                <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                            </svg>
                                            <span>Protocol Security</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current text-green-600 dark:text-violet-400">
                                                <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                                <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                            </svg>
                                            <span>
                                                QUIC Protocol</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current text-green-600 dark:text-violet-400">
                                                <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                                <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                            </svg>
                                            <span>Internet of Things (IoT)</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current text-green-600 dark:text-violet-400">
                                                <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                                <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                            </svg>
                                            <span>
                                                Artificial Intelligence</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current text-green-600 dark:text-violet-400">
                                                <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                                <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                            </svg>
                                            <span>
                                                Internet of Everything (IoE)</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current text-green-600 dark:text-violet-400">
                                                <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                                <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                            </svg>
                                            <span>
                                                Deep Learning​</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current text-green-600 dark:text-violet-400">
                                                <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                                <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                            </svg>
                                            <span>
                                                Machine Learning​</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current text-green-600 dark:text-violet-400">
                                                <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                                <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                            </svg>
                                            <span>
                                                Data Science​</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current text-green-600 dark:text-violet-400">
                                                <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                                <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                            </svg>
                                            <span>

                                                Social Networks</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current text-green-600 dark:text-violet-400">
                                                <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                                <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                            </svg>
                                            <span>
                                                Deep RL</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current text-green-600 dark:text-violet-400">
                                                <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                                <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                            </svg>
                                            <span>
                                                Cloud Computing</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current text-green-600 dark:text-violet-400">
                                                <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                                <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                            </svg>
                                            <span>

                                                Industrial IoT (IIoT)</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current text-green-600 dark:text-violet-400">
                                                <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                                <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                            </svg>
                                            <span>
                                                Internet of Vehicles (IoV)</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current text-green-600 dark:text-violet-400">
                                                <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                                <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                            </svg>
                                            <span>
                                                Reinforcement Learning</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current text-green-600 dark:text-violet-400">
                                                <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                                <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                            </svg>
                                            <span>
                                                Federated Learning</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current text-green-600 dark:text-violet-400">
                                                <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                                <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                            </svg>
                                            <span>

                                                Active Learning</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current text-green-600 dark:text-violet-400">
                                                <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                                <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                            </svg>
                                            <span>
                                                Computer Vision</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current text-green-600 dark:text-violet-400">
                                                <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                                <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                            </svg>
                                            <span>
                                                Image Processing</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current text-green-600 dark:text-violet-400">
                                                <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                                <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                            </svg>
                                            <span>

                                                Algorithm</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current text-green-600 dark:text-violet-400">
                                                <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                                <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                            </svg>
                                            <span>

                                                Network Management</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current text-green-600 dark:text-violet-400">
                                                <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                                <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                            </svg>
                                            <span>

                                                Network Softwarization</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    );
};

export default Home;