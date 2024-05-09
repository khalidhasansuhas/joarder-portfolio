import React, { useEffect } from 'react';
import profile from '../asset/profile.png.png'
import { FaCode, FaGenderless, FaMapMarkerAlt, FaRegEnvelopeOpen } from 'react-icons/fa';
import { HiArrowNarrowRight } from 'react-icons/hi'
import { ImBlog } from 'react-icons/im';
import varsity from '../asset/varsity.jpeg'
import logoGina from '../asset/logoGina.png'
import logo_2 from '../asset/logo_2.jpg'
import quic_survey from '../asset/quic_servey.jpg'
import quic_servey_output from '../asset/quic_servey_output.jpg'
import quic_security from '../asset/quic_security.png'
import quic_security_output from '../asset/quic_security_output.jfif'
import active from '../asset/active.jpg'
import active_output from '../asset/active_output.jpg'
import update1 from '../asset/update1.jpg'
import update2 from '../asset/update2.jpeg'
import update3 from '../asset/update3.JPG'
import blog_logo from '../asset/research/blog_logo.png'

import labLogo from '../asset/labLogo.png'
import { GiArchiveResearch, GiSkills, GiTeacher } from 'react-icons/gi';
import { BsCircleHalf, BsNewspaper } from 'react-icons/bs';
import { BiBookmark } from 'react-icons/bi';
import Chart from './Chart'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const HomePage = () => {
    useEffect(() => {
        Aos.init({ duration: 500 });
    }, [])
    return (
        <>
            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex flex-col mx-auto lg:flex-row">
                    <div data-aos="flip-left" className="w-full lg:w-1/4 ">
                        <div className='p-20 pb-10 pt-20 sm:p-0 sm:pl-24  sm:pt-28 '>
                            <img src={profile} alt="" className="object-contain  mask mask-square  " />
                        </div>

                    </div>
                    <div data-aos="fade-right" className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12">
                        <h1 className="text-5xl font-bold text-center leading-none pb-6 md:pt-12  sm:text-6xl">Y A Joarder
                        </h1>
                        <p>
                            – PhD candidate in Information & Systems Engineering , Concordia University, Montreal, Quebec, Canada <br />
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
                                <button className='btn border-none btn-md bg-blue-900 hover:bg-amber-600'><a href="Y A Joarder (Resume).pdf" download="Y A Joarder (Resume).pdf" className=" font-semibold rounded "><BiBookmark className='inline-block mr-1 text-xl'></BiBookmark>Download CV</a></button>
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
                                        <div className="card shadow-md  bg-green-200 ">
                                            <div data-aos="fade-right" className="card-body ">
                                                <div className='flex sm:justify-start justify-center py-2'>
                                                    <GiArchiveResearch className='text-2xl text-blue-800  mr-2'></GiArchiveResearch>
                                                    <Link to='/about' className='text-blue-800 hover:text-orange-600 cursor-pointer'><h5 className='pr-2'>Research</h5></Link>
                                                </div>
                                                <div className='flex sm:justify-start justify-center py-2'>
                                                    <GiSkills className='text-2xl text-blue-800 mr-2'></GiSkills>
                                                    <Link to='/about' className='text-blue-800 hover:text-orange-600 cursor-pointer'><h5 className='pr-2'>About</h5></Link>
                                                </div>
                                                <div className='flex sm:justify-start justify-center py-2'>
                                                    <GiTeacher className='text-2xl text-blue-800 mr-2'></GiTeacher>
                                                    <Link className='text-blue-800 hover:text-orange-600 cursor-pointer' to="/teaching"><h5 className='pr-2'>Teaching</h5></Link>
                                                </div>
                                                <div className='flex sm:justify-start justify-center py-2'>
                                                    <BsCircleHalf className='text-2xl text-blue-800 mr-2'></BsCircleHalf>
                                                    <Link to='/about' className='text-blue-800 hover:text-orange-600 cursor-pointer'><h5 className='pr-2'>Real Life</h5></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mb-3 pl-14 pr-7'>
                                        <h2 className=" text-center text-xl mb-3 font-bold ">Outputs</h2>
                                        <div className="card shadow-md  bg-green-200 overflow-hidden ">
                                            <div data-aos="fade-right" className="card-body ">
                                                <div className='flex sm:justify-start justify-center py-2'>
                                                    <BsNewspaper className='text-2xl text-orange-600  mr-2'></BsNewspaper>
                                                    <a className='text-blue-800 hover:text-orange-600 cursor-pointer' href="https://scholar.google.ca/citations?hl=en&user=La6inr0AAAAJ&view_op=list_works&sortby=pubdate&fbclid=IwAR1BYcmyKtLKZBwhxZdFc3guRKS_QMfaqHOsb6IX-VmNKsetTZVH7O378ns">
                                                        <h5 className=''>Publications</h5>

                                                    </a>
                                                </div>
                                                <div className='flex sm:justify-start justify-center py-2'>
                                                    <FaCode className='text-2xl text-orange-600 mr-2'></FaCode>
                                                    <a className='text-blue-800 hover:text-orange-600 cursor-pointer' href="https://github.com/yajoarder?fbclid=IwAR2lW1_-YYwG1hvJww1DVP0lnEjENEo7e1ojXXRijMWajN-avUHgMPFMZ8M">

                                                        <h5 className='pr-2'>Code</h5>
                                                    </a>
                                                </div>
                                                <div className='flex sm:justify-start justify-center py-2'>
                                                    <ImBlog className='text-2xl text-orange-600 mr-2'></ImBlog>
                                                    <a className='text-blue-800 hover:text-orange-600 cursor-pointer' href="https://joarder.abdullahelnayem.com/?fbclid=IwAR15Cscsj25S3a1NxxXmN_OpsaQLJjysSbQvf8lyiG7buM66LM7I8K_Uc0s">

                                                        <h5 className='pr-2'>Blog</h5>
                                                    </a>
                                                </div>
                                                <div className='flex sm:justify-start justify-center py-2'>
                                                    <GiTeacher className='text-2xl text-orange-600 mr-2'></GiTeacher>
                                                    <a className='text-blue-800 hover:text-orange-600 cursor-pointer' href="https://www.youtube.com/channel/UCpDf21e7A6j4UhIIdMosqtA">

                                                        <h5 className='pr-2'>Talks</h5>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mb-3 pl-14 pr-7'>
                                        <h2 className=" text-center text-xl mb-3 font-bold ">Research Interest </h2>
                                        <div className="card shadow-md   bg-green-200 overflow-hidden ">
                                            <div data-aos="fade-right" className="card-body ">
                                                <li className="flex items-center mx-auto md:mx-0 space-x-2">
                                                    <FaGenderless ClassName="inline-block "></FaGenderless>
                                                    <span className='text-sm'>Cyber Security</span>
                                                </li>
                                                <li className="flex items-center mx-auto md:mx-0 space-x-2">
                                                    <FaGenderless ClassName="inline-block "></FaGenderless>
                                                    <span className='text-sm'>Network Security</span>
                                                </li>
                                                <li className="flex items-center mx-auto md:mx-0 space-x-2">
                                                    <FaGenderless ClassName="inline-block "></FaGenderless>
                                                    <span className='text-sm'>Protocol Security</span>
                                                </li>
                                                <li className="flex items-center mx-auto md:mx-0 space-x-2">
                                                    <FaGenderless ClassName="inline-block "></FaGenderless>
                                                    <span className='text-sm'>
                                                        QUIC Protocol</span>
                                                </li>
                                                <li className="flex items-center mx-auto md:mx-0 space-x-2">
                                                    <FaGenderless ClassName="inline-block "></FaGenderless>
                                                    <span className='text-sm'>IoT </span>
                                                </li>
                                                <li className="flex items-center mx-auto md:mx-0 space-x-2">
                                                    <FaGenderless ClassName="inline-block "></FaGenderless>
                                                    <span className='text-sm'> AI
                                                    </span>
                                                </li>
                                                <li className="flex items-center mx-auto md:mx-0 space-x-2">
                                                    <FaGenderless ClassName="inline-block "></FaGenderless>
                                                    <span className='text-sm'> ML
                                                    </span>
                                                </li>
                                                <li className="flex items-center mx-auto md:mx-0 space-x-2">
                                                    <FaGenderless ClassName="inline-block "></FaGenderless>
                                                    <span className='text-sm'> Deep Learning
                                                    </span>
                                                </li>
                                                <li className="flex items-center mx-auto md:mx-0 space-x-2">
                                                    <FaGenderless ClassName="inline-block "></FaGenderless>
                                                    <span className='text-sm'> Data Science
                                                    </span>
                                                </li>
                                            </div>
                                            <div className='w-full flex justify-center mb-2'>

                                                <button className='btn  bg-blue-700 hover:bg-orange-600 border-none btn-sm w-1/2'> <Link to="/research">See More</Link></button>

                                            </div>
                                        </div>
                                    </div>
                                    <div className='mb-3 pl-14 pr-7'>
                                        <h2 className=" text-center text-xl mb-3 font-bold ">Affiliations </h2>
                                        <div className="card shadow-md   bg-green-200 overflow-hidden ">
                                            <div data-aos="fade-right" className="card-body ">
                                                <div className='flex sm:justify-start justify-center py-2'>
                                                    <img className='w-48  mx-auto' src={varsity} alt="" />
                                                </div>
                                                <div className='flex sm:justify-start justify-center py-2'>
                                                    <img className='w-48  mx-auto' src={logoGina} alt="" />
                                                </div>
                                                <div className='flex sm:justify-start justify-center py-2'>
                                                    <img className='w-48  mx-auto' src={labLogo} alt="" />
                                                </div>
                                                <div className='flex sm:justify-start justify-center py-2'>
                                                    <img className='w-20  mx-auto' src={logo_2} alt="" />
                                                </div>
                                                <div className='flex sm:justify-start justify-center py-2'>
                                                    <img className='w-32  mx-auto' src={blog_logo} alt="" />
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
                            <div className="container flex flex-col mx-auto ">

                                <div className="flex flex-col w-full sm:w-100  mx-auto">
                                    <h1 className="text-3xl font-bold leading-none text-center  pb-3">Recent Research Projects
                                    </h1>
                                    <div className='grid grid-cols-1 mx-auto md:grid-cols-2 lg:grid-cols-3 gap-6 my-10'>
                                        <div className="max-w-xs bg-green-200 p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
                                            <img data-aos="flip-up" src={quic_servey_output} alt="" className="object-cover object-center w-full rounded-md lg:h-40 sm:h-48 h-72 dark:bg-gray-500" />
                                            <div className="mt-2 mb-2">
                                                <span className="block text-xs text-center font-medium  dark:text-violet-400"> Quic Secuirity Extended Servey</span>

                                            </div>
                                            <img data-aos="flip-up" src={quic_survey} alt="" className="object-cover object-center w-full rounded-md lg:h-40 sm:h-48 h-72 dark:bg-gray-500" />

                                        </div>
                                        <div className="max-w-xs p-6 bg-green-200 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
                                            <img data-aos="flip-up" src={quic_security} alt="" className="object-cover object-center w-full rounded-md lg:h-40 sm:h-48 h-72 dark:bg-gray-500" />
                                            <div className="mt-2 mb-2">
                                                <a className='text-blue-600 hover:text-orange-600 underline' href="https://ieeexplore.ieee.org/document/9955622">
                                                    <span className="block text-xs text-center font-medium  dark:text-violet-400">Quic Secuirity Servey</span>

                                                </a>

                                            </div>

                                            <img data-aos="flip-up" src={quic_security_output} alt="" className="object-cover object-center w-full rounded-md lg:h-40 sm:h-48 h-72 dark:bg-gray-500" />
                                        </div>
                                        <div className="max-w-xs p-6 bg-green-200 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
                                            <img data-aos="flip-up" src={active} alt="" className="object-cover object-center w-full rounded-md lg:h-40 sm:h-48 h-72 dark:bg-gray-500" />
                                            <div className="mt-2 mb-2">
                                                <a className='text-blue-600 hover:text-orange-600 underline' href="https://link.springer.com/chapter/10.1007/978-3-031-14391-5_4">
                                                    <span className="block text-xs text-center font-medium  dark:text-violet-400">Active Federated Learning</span>

                                                </a>
                                            </div>

                                            <img data-aos="flip-up" src={active_output} alt="" className="object-cover object-center w-full rounded-md lg:h-40 sm:h-48 h-72 dark:bg-gray-500" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col sm:h-72 h-54 w-full sm:w-100  mx-auto">
                                    <h1 className="text-3xl font-bold leading-none text-center  pb-10"> Research Publication Taxonomy
                                    </h1>
                                    <div data-aos="fade-left" className='sm:h-80 h-54 w-full sm:w-100 px-2'>
                                        <Chart></Chart>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <h1 className='text-center text-3xl font-bold sm:pt-12 text-[#0a192f] '>Recent Updates </h1>
                        <section className='grid grid-cols-1 mx-auto md:grid-cols-2 lg:grid-cols-3 gap-3 my-10'>

                            <div data-aos="fade-up" className="max-w-xs rounded-md shadow-md dark:bg-gray-900 bg-green-200 dark:text-gray-100">
                                <img src={update1} alt="" className="object-cover object-center w-full rounded-t-md h-48 dark:bg-gray-500" />
                                <div className="flex flex-col justify-between p-6 bg-green-200 space-y-8">
                                    <div className="space-y-2 ">
                                        <h2 className="text-md text-justify font-semibold tracking-wide">
                                            Our latest publication on “QUIC Security” is in IEEE Xplore. Important to mention: it is one of the first surveys that focuses on the security of the QUIC protocol. <br />( <a className='text-blue-600' href="https://ieeexplore.ieee.org/document/9955622">Publication Link</a> )
                                        </h2>

                                    </div>

                                </div>
                            </div>
                            <div data-aos="fade-up" className="max-w-xs rounded-md shadow-md dark:bg-gray-900 bg-green-200 dark:text-gray-100">
                                <img src={update2} alt="" className="object-cover object-center w-full rounded-t-md h-48 dark:bg-gray-500" />
                                <div className="flex flex-col justify-between p-6 bg-green-200 bottom-0 space-y-8">
                                    <div className="space-y-2 ">
                                        <h2 className="text-md text-justify font-semibold tracking-wide">
                                            We are featured in Concordia 3 min <br /> ( <a className='text-blue-600' href="https://www.concordia.ca/cunews/main/stories/2022/12/12/concordia-hosts-a-hands-on-cybersecurity-contest-for-students.html">Read More</a> )
                                        </h2>

                                    </div>
                                </div>
                            </div>
                            <div data-aos="fade-up" className="max-w-xs rounded-md shadow-md dark:bg-gray-900 bg-green-200 dark:text-gray-100">
                                <img src={update3} alt="" className="object-cover object-center w-full rounded-t-md h-48 dark:bg-gray-500" />
                                <div className="flex flex-col justify-between p-6 bg-green-200 space-y-8">
                                    <div className="space-y-2 bg-green-200">
                                        <h2 className="text-md text-justify font-semibold tracking-wide">Our recent research work which is based on QUIC Protocol Security titled “A Survey on the Security Issues of QUIC” has been accepted to be presented in 6th edition of CSNet Conference, 2022 (CSNet’22) in Rio de Janeiro, Brazil! <br /> <a className='text-blue-600' href="https://ieeexplore.ieee.org/document/9955622">(Publication link)</a></h2>
                                    </div>
                                </div>
                            </div>

                        </section>
                        <button className='btn btn-sm bg-blue-700 hover:bg-orange-600 border-none w-1/4 mx-auto text-center mb-20'><Link to='/projects'>See All Updates <HiArrowNarrowRight className='inline-block'></HiArrowNarrowRight>
                        </Link></button>

                    </div>
                </div>
            </section>
        </>
    );
};

export default HomePage;