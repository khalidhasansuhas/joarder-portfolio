import React, { useEffect } from 'react';
import banner from '../asset/banner.png';
import ReChart from './ReChart'
import Aos from 'aos';
import 'aos/dist/aos.css';
import cs1 from '../asset/research/cs1.jpg'
import ml1 from '../asset/research/ml1.jfif'
import ml2 from '../asset/research/ml2.png'
import ml3 from '../asset/research/ml3.jfif'
import ds1 from '../asset/research/ds1.jpg'
import ds2 from '../asset/research/ds2.jpg'
import ds3 from '../asset/research/ds3.jpg'
import ds4 from '../asset/research/ds4.jpg'
import ds5 from '../asset/research/ds5.jpg'
import iot1 from '../asset/research/iot1.jfif'
import dl1 from '../asset/research/dl1.jpeg'
import ai1 from '../asset/research/ai1.jpg'
import ai2 from '../asset/research/ai2.jpg'
import quic_security_output from '../asset/quic_security_output.jfif'
import { AiFillSecurityScan, AiOutlineProject } from 'react-icons/ai';
import { GiArtificialIntelligence, GiBrain } from 'react-icons/gi';
import { MdDataExploration } from 'react-icons/md';
import { BiBrain, BiNetworkChart } from 'react-icons/bi';
import { FaGenderless } from 'react-icons/fa';


const Research = () => {
    useEffect(() => {
        Aos.init({ duration: 500 });
    }, [])
    return (
        <>
            <div data-aos="fade-down" data-aos-duration="1000" className="hero pt-20 h-48 border-b-8 border-orange-600" style={{ backgroundImage: `url(${banner})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content">
                    <div className="max-w-md">
                        <h1 data-aos="fade-left" className="text-3xl font-bold"><span className='text-orange-600'>Y A Joarder ||</span> Research </h1>
                    </div>
                </div>
            </div>
            <div className=' mb-10'>
                <div data-aos="fade-up" className="w-full container shadow-md mx-auto rounded-lg">
                    <div className="flex items-center justify-center p-4 md:p-8 ">
                        <div className="px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-10 dark:bg-gray-800 dark:text-gray-100">
                            <h2 className="mb-8 text-5xl font-bold leading-none text-center ">Research Interests</h2>
                            <ul className="grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                                <li className="flex items-center space-x-2">
                                    <FaGenderless ClassName="inline-block mr-1 "></FaGenderless>
                                    <span>Cyber Security</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <FaGenderless ClassName="inline-block mr-1 "></FaGenderless>
                                    <span>Network Security</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <FaGenderless ClassName="inline-block mr-1 "></FaGenderless>
                                    <span>Protocol Security</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <FaGenderless ClassName="inline-block mr-1 "></FaGenderless>
                                    <span>
                                        QUIC Protocol</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <FaGenderless ClassName="inline-block mr-1 "></FaGenderless>
                                    <span>Internet of Things (IoT)</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <FaGenderless ClassName="inline-block mr-1 "></FaGenderless>
                                    <span>
                                        Artificial Intelligence</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <FaGenderless ClassName="inline-block mr-1 "></FaGenderless>
                                    <span>
                                        Internet of Everything (IoE)</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <FaGenderless ClassName="inline-block mr-1 "></FaGenderless>
                                    <span>
                                        Deep Learning​</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <FaGenderless ClassName="inline-block mr-1 "></FaGenderless>
                                    <span>
                                        Machine Learning​</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <FaGenderless ClassName="inline-block mr-1 "></FaGenderless>
                                    <span>
                                        Data Science​</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <FaGenderless ClassName="inline-block mr-1 "></FaGenderless>
                                    <span>

                                        Social Networks</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <FaGenderless ClassName="inline-block mr-1 "></FaGenderless>
                                    <span>
                                        Deep RL</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <FaGenderless ClassName="inline-block mr-1 "></FaGenderless>
                                    <span>
                                        Cloud Computing</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <FaGenderless ClassName="inline-block mr-1 "></FaGenderless>
                                    <span>

                                        Industrial IoT (IIoT)</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <FaGenderless ClassName="inline-block mr-1 "></FaGenderless>
                                    <span>
                                        Internet of Vehicles (IoV)</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <FaGenderless ClassName="inline-block mr-1 "></FaGenderless>
                                    <span>
                                        Reinforcement Learning</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <FaGenderless ClassName="inline-block mr-1 "></FaGenderless>
                                    <span>
                                        Federated Learning</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <FaGenderless ClassName="inline-block mr-1 "></FaGenderless>
                                    <span>

                                        Active Learning</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <FaGenderless ClassName="inline-block mr-1 "></FaGenderless>
                                    <span>
                                        Computer Vision</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <FaGenderless ClassName="inline-block mr-1 "></FaGenderless>
                                    <span>
                                        Image Processing</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <FaGenderless ClassName="inline-block mr-1 "></FaGenderless>
                                    <span>

                                        Algorithm</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <FaGenderless ClassName="inline-block mr-1 "></FaGenderless>
                                    <span>

                                        Network Management</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <FaGenderless ClassName="inline-block mr-1 "></FaGenderless>
                                    <span>

                                        Network Softwarization</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <FaGenderless ClassName="inline-block mr-1 "></FaGenderless>
                                    <span>

                                        Networking</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <h1 className='text-center text-5xl font-bold  pt-10  text-[#0a192f] '>Research Publications</h1>
                <div className='flex shadow-md container rounded-xl mx-auto justify-center mt-10'>
                    <section className=' h-[300px] w-[500px]'>
                        <ReChart></ReChart>
                    </section>
                </div>
                <section className="dark:bg-gray-800 dark:text-gray-100">
                    <div className="container mx-auto flex flex-col p-6">

                        <div name="cs" className="divide-y divide-gray-700 shadow-md rounded-2xl">
                            <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
                                <div data-aos="fade-right" className="flex flex-col   overflow-hidden justify-center items-center lg:col-span-1 col-span-full">

                                    {/* <img className='h-48 w-72 shadow-2xl' src={cs} alt="" /> */}
                                    <AiFillSecurityScan className='w-72 sm:w-32 text-center  text-orange-600 h-72 sm:h-32'></AiFillSecurityScan>
                                    <span className="text-xl text-center font-bold my-3 md:text-3xl">Cyber Security  </span>

                                </div>
                                <div data-aos="fade-up" className="flex flex-col justify-start  max-w-3xl  col-span-full lg:col-span-3 text-left">

                                    <div className="divide-y divide-gray-700">
                                        <div className="grid justify-start grid-cols-4 pl-8 mx-auto space-y-8 lg:space-y-0">
                                            <div data-aos="fade-right" className="flex  justify-center lg:col-span-1 col-span-full">
                                                <img className='h-28 rounded-md w-44 shadow-2xl' src={cs1} alt="" />
                                            </div>
                                            <div data-aos="fade-up" className="flex flex-col justify-start  max-w-3xl  col-span-full lg:col-span-3 text-left">
                                                <div className='flex justify-between items-center'>
                                                    <div className='flex flex-col'>
                                                        <span className="text-xl font-semibold md:text-xl pl-5"> A Survey on the Security Issues of QUIC  </span>

                                                    </div>

                                                </div>
                                                <span className="mt-4 dark:text-gray-300 pl-5">
                                                    Y A Joarder and Carol J Fung
                                                </span>
                                                <div className='flex pl-5 mt-3'>
                                                    <button className='btn btn-outline text-cyan-800 btn-xs hover:bg-orange-600 hover:border-none mr-2 '><a href="https://github.com/yajoarder?fbclid=IwAR2lW1_-YYwG1hvJww1DVP0lnEjENEo7e1ojXXRijMWajN-avUHgMPFMZ8M">Code</a></button>
                                                    <button className='btn btn-outline text-cyan-800 btn-xs hover:bg-orange-600 hover:border-none mr-2'><a href="https://ieeexplore.ieee.org/document/9955622">Paper</a></button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                        <div name="ml" className="divide-y divide-gray-700 shadow-md rounded-2xl">
                            <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
                                <div data-aos="fade-right" className="flex flex-col   overflow-hidden justify-start items-center  lg:col-span-1 col-span-full">


                                    <GiBrain className='w-72 sm:w-32 text-center  text-orange-600  h-72 sm:h-32'></GiBrain>
                                    <span className="text-xl sm:text-center text-start pl-3 sm:pl-0 font-bold py-3 md:text-3xl"> Machine Learning  </span>

                                </div>
                                <div data-aos="fade-up" className="flex flex-col justify-center  max-w-3xl  col-span-full lg:col-span-3 text-left">

                                    <div className="divide-y divide-gray-700">
                                        <div className="grid justify-center grid-cols-4 pl-8 mx-auto space-y-8 lg:space-y-0">
                                            <div data-aos="fade-right" className="flex  justify-center lg:col-span-1 col-span-full">
                                                <img className='h-28 rounded-md w-44 shadow-2xl' src={ml1} alt="" />
                                            </div>
                                            <div data-aos="fade-up" className="flex flex-col justify-start  max-w-3xl  col-span-full lg:col-span-3 text-left">
                                                <div className='flex justify-between items-center'>
                                                    <div className='flex flex-col'>
                                                        <span className="text-xl font-semibold md:text-xl pl-5"> Enhancement of ANN-based Offline Hand Written Character Recognition Using Gradient and Geometric Feature Extraction Techniques </span>

                                                    </div>

                                                </div>
                                                <span className="mt-4 dark:text-gray-300 pl-5">
                                                    Y A Joarder, Paresh Chandra Barman, and Md Zahidul Islam
                                                </span>
                                                <div className='flex pl-5 mt-3'>
                                                    <button className='btn btn-outline text-cyan-800 btn-xs hover:bg-orange-600 hover:border-none mr-2 '><a href="https://github.com/yajoarder?fbclid=IwAR2lW1_-YYwG1hvJww1DVP0lnEjENEo7e1ojXXRijMWajN-avUHgMPFMZ8M">Code</a></button>
                                                    <button className='btn btn-outline text-cyan-800 btn-xs hover:bg-orange-600 hover:border-none mr-2'><a href="https://link.springer.com/chapter/10.1007/978-3-319-58750-9_20">Paper</a></button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="divide-y divide-gray-700 mt-5">
                                        <div className="grid justify-center grid-cols-4 pl-8 mx-auto space-y-8 lg:space-y-0">
                                            <div data-aos="fade-right" className="flex  justify-center lg:col-span-1 col-span-full">
                                                <img className='h-28 rounded-md w-44 shadow-2xl' src={ml2} alt="" />
                                            </div>
                                            <div data-aos="fade-up" className="flex flex-col justify-start  max-w-3xl  col-span-full lg:col-span-3 text-left">
                                                <div className='flex justify-between items-center'>
                                                    <div className='flex flex-col'>
                                                        <span className="text-xl font-semibold md:text-xl pl-5"> A Novel Hand Written Technique Using Touch-Less Finger Gesture Movement for Human Computer Interaction </span>

                                                    </div>

                                                </div>
                                                <span className="mt-4 dark:text-gray-300 pl-5">
                                                    Y A Joarder, Bipul Hossain, Md Jashim Uddin, and Md Zahidul Islam
                                                </span>
                                                <div className='flex pl-5 mt-3'>
                                                    <button className='btn btn-outline text-cyan-800 btn-xs hover:bg-orange-600 hover:border-none mr-2 '><a href="https://github.com/yajoarder?fbclid=IwAR2lW1_-YYwG1hvJww1DVP0lnEjENEo7e1ojXXRijMWajN-avUHgMPFMZ8M">Code</a></button>
                                                    <button className='btn btn-outline text-cyan-800 btn-xs hover:bg-orange-600 hover:border-none mr-2'><a href="https://link.springer.com/chapter/10.1007/978-3-319-91250-9_22">Paper</a></button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="divide-y divide-gray-700 mt-5">
                                        <div className="grid justify-center grid-cols-4 pl-8 mx-auto space-y-8 lg:space-y-0">
                                            <div data-aos="fade-right" className="flex  justify-center lg:col-span-1 col-span-full">
                                                <img className='h-28 rounded-md w-44 shadow-2xl' src={ml3} alt="" />
                                            </div>
                                            <div data-aos="fade-up" className="flex flex-col justify-start  max-w-3xl  col-span-full lg:col-span-3 text-left">
                                                <div className='flex justify-between items-center'>
                                                    <div className='flex flex-col'>
                                                        <span className="text-xl font-semibold md:text-xl pl-5"> Uplifted  Tissue Characterization  and  Classification of  Fatty  Liver  Disease  from  Ultrasound  Images </span>

                                                    </div>

                                                </div>
                                                <span className="mt-4 dark:text-gray-300 pl-5">
                                                    Y A Joarder, Kh.  Mustafizur  Rahman,  &  Fabiha Faiz  Mahi.
                                                </span>
                                                <div className='flex pl-5 mt-3'>
                                                    <button className='btn btn-outline text-cyan-800 btn-xs hover:bg-orange-600 hover:border-none mr-2 '><a href="https://github.com/yajoarder?fbclid=IwAR2lW1_-YYwG1hvJww1DVP0lnEjENEo7e1ojXXRijMWajN-avUHgMPFMZ8M">Code</a></button>
                                                    <button className='btn btn-outline text-cyan-800 btn-xs hover:bg-orange-600 hover:border-none mr-2'><a href="https://zenodo.org/record/4014957">Paper</a></button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                        <div name="ds" className="divide-y divide-gray-700 shadow-md rounded-2xl">
                            <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
                                <div data-aos="fade-right" className="flex flex-col justify-start items-center lg:col-span-1 rounded-xl col-span-full">
                                    <MdDataExploration className='w-72 sm:w-32 text-center  text-orange-600 h-72 sm:h-32'></MdDataExploration>
                                    <span className="text-xl text-center font-bold py-3 md:text-3xl"> Data Science  </span>
                                </div>
                                <div data-aos="fade-up" className="flex flex-col justify-center  max-w-3xl  col-span-full lg:col-span-3 text-left">

                                    <div className="divide-y divide-gray-700">
                                        <div className="grid justify-center grid-cols-4 pl-8 mx-auto space-y-8 lg:space-y-0">
                                            <div data-aos="fade-right" className="flex  justify-center lg:col-span-1 col-span-full">
                                                <img className='h-28 rounded-md w-44 shadow-2xl' src={ds1} alt="" />
                                            </div>
                                            <div data-aos="fade-up" className="flex flex-col justify-start  max-w-3xl  col-span-full lg:col-span-3 text-left">
                                                <div className='flex justify-between items-center'>
                                                    <div className='flex flex-col'>
                                                        <span className="text-xl font-semibold md:text-xl pl-5">A Hybrid  Partitioning  Algorithm  for  Robust  Big  Data  Clustering  and  Analysis” in  Journal of Network Security and Data Mining, 2(3), 1–16. </span>

                                                    </div>

                                                </div>
                                                <span className="mt-4 dark:text-gray-300 pl-5">
                                                    Y A Joarder, Kh.  Mustafizur Rahman, & Ahsan Ullah
                                                </span>
                                                <div className='flex pl-5 mt-3'>
                                                    <button className='btn btn-outline text-cyan-800 btn-xs hover:bg-orange-600 hover:border-none mr-2 '><a href="https://github.com/yajoarder?fbclid=IwAR2lW1_-YYwG1hvJww1DVP0lnEjENEo7e1ojXXRijMWajN-avUHgMPFMZ8M">Code</a></button>
                                                    <button className='btn btn-outline text-cyan-800 btn-xs hover:bg-orange-600 hover:border-none mr-2'><a href="http://doi.org/10.5281/zenodo.3465227">Paper</a></button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="divide-y divide-gray-700 mt-5">
                                        <div className="grid justify-center grid-cols-4 pl-8 mx-auto space-y-8 lg:space-y-0">
                                            <div data-aos="fade-right" className="flex  justify-center lg:col-span-1 col-span-full">
                                                <img className='h-28 rounded-md w-44 shadow-2xl' src={ds2} alt="" />
                                            </div>
                                            <div data-aos="fade-up" className="flex flex-col justify-start  max-w-3xl  col-span-full lg:col-span-3 text-left">
                                                <div className='flex justify-between items-center'>
                                                    <div className='flex flex-col'>
                                                        <span className="text-xl font-semibold md:text-xl pl-5">An Improved Hybrid Evolutionary Clustering Algorithm to Mitigate Empty Clustering Problem </span>

                                                    </div>

                                                </div>
                                                <span className="mt-4 dark:text-gray-300 pl-5">
                                                    Y A Joarder, Feroza Naznin, Md Abdul Awal and Md Zahidul Islam
                                                </span>
                                                <div className='flex pl-5 mt-3'>
                                                    <button className='btn btn-outline text-cyan-800 btn-xs hover:bg-orange-600 hover:border-none mr-2 '><a href="https://github.com/yajoarder?fbclid=IwAR2lW1_-YYwG1hvJww1DVP0lnEjENEo7e1ojXXRijMWajN-avUHgMPFMZ8M">Code</a></button>
                                                    <button className='btn btn-outline text-cyan-800 btn-xs hover:bg-orange-600 hover:border-none mr-2'><a href="http://www.ijceit.org/published/volume11/issue9/index.php">Paper</a></button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="divide-y divide-gray-700 mt-5">
                                        <div className="grid justify-center grid-cols-4 pl-8 mx-auto space-y-8 lg:space-y-0">
                                            <div data-aos="fade-right" className="flex  justify-center lg:col-span-1 col-span-full">
                                                <img className='h-28 rounded-md w-44 shadow-2xl' src={ds3} alt="" />
                                            </div>
                                            <div data-aos="fade-up" className="flex flex-col justify-start  max-w-3xl  col-span-full lg:col-span-3 text-left">
                                                <div className='flex justify-between items-center'>
                                                    <div className='flex flex-col'>
                                                        <span className="text-xl font-semibold md:text-xl pl-5">Clustering and Classification with Non-Existence Features: A Sentenced Dissimilarity Measure Based Technique </span>

                                                    </div>

                                                </div>
                                                <span className="mt-4 dark:text-gray-300 pl-5">
                                                    Y A Joarder, Emran Hossain, and Al Faisal Mahmud
                                                </span>
                                                <div className='flex pl-5 mt-3'>
                                                    <button className='btn btn-outline text-cyan-800 btn-xs hover:bg-orange-600 hover:border-none mr-2 '><a href="https://github.com/yajoarder?fbclid=IwAR2lW1_-YYwG1hvJww1DVP0lnEjENEo7e1ojXXRijMWajN-avUHgMPFMZ8M">Code</a></button>
                                                    <button className='btn btn-outline text-cyan-800 btn-xs hover:bg-orange-600 hover:border-none mr-2'><a href="https://arxiv.org/abs/2002.10411v1">Paper</a></button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="divide-y divide-gray-700 mt-5">
                                        <div className="grid justify-center grid-cols-4 pl-8 mx-auto space-y-8 lg:space-y-0">
                                            <div data-aos="fade-right" className="flex  justify-center lg:col-span-1 col-span-full">
                                                <img className='h-28 rounded-md w-44 shadow-2xl' src={ds4} alt="" />
                                            </div>
                                            <div data-aos="fade-up" className="flex flex-col justify-start  max-w-3xl  col-span-full lg:col-span-3 text-left">
                                                <div className='flex justify-between items-center'>
                                                    <div className='flex flex-col'>
                                                        <span className="text-xl font-semibold md:text-xl pl-5">A Hybrid Algorithm Based Robust Big Data Clustering for Solving Unhealthy Initialization, Dynamic Centroid Selection and Empty clustering Problems with Analysis </span>

                                                    </div>

                                                </div>
                                                <span className="mt-4 dark:text-gray-300 pl-5">
                                                    Y A Joarder, and Mosabbir Ahmed


                                                </span>
                                                <div className='flex pl-5 mt-3'>
                                                    <button className='btn btn-outline text-cyan-800 btn-xs hover:bg-orange-600 hover:border-none mr-2 '><a href="https://github.com/yajoarder?fbclid=IwAR2lW1_-YYwG1hvJww1DVP0lnEjENEo7e1ojXXRijMWajN-avUHgMPFMZ8M">Code</a></button>
                                                    <button className='btn btn-outline text-cyan-800 btn-xs hover:bg-orange-600 hover:border-none mr-2'><a href="https://arxiv.org/abs/2002.09380">Paper</a></button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="divide-y divide-gray-700 mt-5">
                                        <div className="grid justify-center grid-cols-4 pl-8 mx-auto space-y-8 lg:space-y-0">
                                            <div data-aos="fade-right" className="flex  justify-center lg:col-span-1 col-span-full">
                                                <img className='h-28 rounded-md w-44 shadow-2xl' src={ds5} alt="" />
                                            </div>
                                            <div data-aos="fade-up" className="flex flex-col justify-start  max-w-3xl  col-span-full lg:col-span-3 text-left">
                                                <div className='flex justify-between items-center'>
                                                    <div className='flex flex-col'>
                                                        <span className="text-xl font-semibold md:text-xl pl-5">A Novel Hybrid Model Algorithm for Robust Big Data Clustering and Analysis </span>

                                                    </div>

                                                </div>
                                                <span className="mt-4 dark:text-gray-300 pl-5">

                                                    ACADEMIC THESIS: (in M.Sc.)

                                                </span>
                                                <div className='flex pl-5 mt-3'>
                                                    <button className='btn btn-outline text-cyan-800 btn-xs hover:bg-orange-600 hover:border-none mr-2 '><a href="https://github.com/yajoarder?fbclid=IwAR2lW1_-YYwG1hvJww1DVP0lnEjENEo7e1ojXXRijMWajN-avUHgMPFMZ8M">Code</a></button>
                                                    <button className='btn btn-outline text-cyan-800 btn-xs hover:bg-orange-600 hover:border-none mr-2'><a href="/research">Paper</a></button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                        <div name="iot" className="divide-y divide-gray-700 shadow-md rounded-2xl">
                            <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
                                <div data-aos="fade-right" className="flex flex-col rounded-xl justify-start lg:col-span-1 items-center col-span-full">
                                    <BiNetworkChart className='w-72 sm:w-32 text-center  text-orange-600 h-72 sm:h-32'></BiNetworkChart>
                                    <span className="text-xl font-bold text-center py-3 md:text-3xl"> IoT  </span>
                                </div>
                                <div data-aos="fade-up" className="flex flex-col justify-start  max-w-3xl  col-span-full lg:col-span-3 text-left">

                                    <div className="divide-y divide-gray-700">
                                        <div className="grid justify-center grid-cols-4 pl-8 mx-auto space-y-8 lg:space-y-0">
                                            <div data-aos="fade-right" className="flex  justify-center lg:col-span-1 col-span-full">
                                                <img className='h-28 rounded-md w-44 shadow-2xl' src={iot1} alt="" />
                                            </div>
                                            <div data-aos="fade-up" className="flex flex-col justify-start  max-w-3xl  col-span-full lg:col-span-3 text-left">
                                                <div className='flex justify-between items-center'>
                                                    <div className='flex flex-col'>
                                                        <span className="text-xl font-semibold md:text-xl pl-5">Point Detection Based A Smart Pen Featured Listening and Writing Capable Robotic Arm  </span>

                                                    </div>

                                                </div>
                                                <span className="mt-4 dark:text-gray-300 pl-5">
                                                    Y A Joarder and Md. Safar Uddin Dipu
                                                </span>
                                                <div className='flex pl-5 mt-3'>
                                                    <button className='btn btn-outline text-cyan-800 btn-xs hover:bg-orange-600 hover:border-none mr-2 '><a href="https://github.com/yajoarder?fbclid=IwAR2lW1_-YYwG1hvJww1DVP0lnEjENEo7e1ojXXRijMWajN-avUHgMPFMZ8M">Code</a></button>
                                                    <button className='btn btn-outline text-cyan-800 btn-xs hover:bg-orange-600 hover:border-none mr-2'><a href="http://iwcvis.bracu.ac.bd/?fbclid=IwAR3668GDW0h1Nwl8ZRpBrfk7Uz2645O52XsPnI1vbzQHIykZKXvVwLOZfDM">Paper</a></button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                        <div name="dl" className="divide-y divide-gray-700 shadow-md rounded-2xl">
                            <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
                                <div data-aos="fade-right" className="flex flex-col  roundes-xl first-line:justify-start items-center lg:col-span-1 col-span-full">
                                    <BiBrain className='w-72 sm:w-32 text-center  text-orange-600 h-72 sm:h-32'>

                                    </BiBrain>
                                    <span className="text-xl font-bold text-center py-3 md:text-3xl"> Deep Learning  </span>
                                </div>
                                <div data-aos="fade-up" className="flex flex-col justify-start  max-w-3xl  col-span-full lg:col-span-3 text-left">

                                    <div className="divide-y divide-gray-700">
                                        <div className="grid justify-center grid-cols-4 pl-8 mx-auto space-y-8 lg:space-y-0">
                                            <div data-aos="fade-right" className="flex  justify-center lg:col-span-1 col-span-full">
                                                <img className='h-28 rounded-md w-44 shadow-2xl' src={dl1} alt="" />
                                            </div>
                                            <div data-aos="fade-up" className="flex flex-col justify-start  max-w-3xl  col-span-full lg:col-span-3 text-left">
                                                <div className='flex justify-between items-center'>
                                                    <div className='flex flex-col'>
                                                        <span className="text-xl font-semibold md:text-xl pl-5">Recognition and Solution for Handwritten Equation Using Convolutional Neural Network  </span>

                                                    </div>

                                                </div>
                                                <span className="mt-4 dark:text-gray-300 pl-5">
                                                    Bipul Hossain, Feroza Naznin , Y A Joarder,  and Md Zahidul Islam
                                                </span>
                                                <div className='flex pl-5 mt-3'>
                                                    <button className='btn btn-outline text-cyan-800 btn-xs hover:bg-orange-600 hover:border-none mr-2 '><a href="https://github.com/yajoarder?fbclid=IwAR2lW1_-YYwG1hvJww1DVP0lnEjENEo7e1ojXXRijMWajN-avUHgMPFMZ8M">Code</a></button>
                                                    <button className='btn btn-outline text-cyan-800 btn-xs hover:bg-orange-600 hover:border-none mr-2'><a href="https://ieeexplore.ieee.org/document/8640991">Paper</a></button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                        <div name="ai" className="divide-y divide-gray-700 shadow-md rounded-2xl">
                            <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
                                <div data-aos="fade-right" className="flex flex-col justify-center lg:col-span-1 items-center col-span-full">
                                    <GiArtificialIntelligence className='w-72 sm:w-32 text-center  text-orange-600 h-72 sm:h-32'>

                                    </GiArtificialIntelligence>
                                    <span className="text-xl font-bold py-3 text-center md:text-3xl">  Artificial Intelegence (AI) </span>
                                </div>
                                <div data-aos="fade-up" className="flex flex-col justify-start  max-w-3xl  col-span-full lg:col-span-3 text-left">

                                    <div className="divide-y divide-gray-700 ">
                                        <div className="grid justify-center grid-cols-4 pl-8 mx-auto space-y-8 lg:space-y-0">
                                            <div data-aos="fade-right" className="flex  justify-center lg:col-span-1 col-span-full">
                                                <img className='h-28 rounded-md w-44 shadow-2xl' src={ai1} alt="" />
                                            </div>
                                            <div data-aos="fade-up" className="flex flex-col justify-start  max-w-3xl  col-span-full lg:col-span-3 text-left">
                                                <div className='flex justify-between items-center'>
                                                    <div className='flex flex-col'>
                                                        <span className="text-xl font-semibold md:text-xl pl-5">Active Federated YOLOR Model for Enhancing Autonomous Vehicles Safety  </span>

                                                    </div>

                                                </div>
                                                <span className="mt-4 dark:text-gray-300 pl-5">
                                                    Gaith Rjoub, Jamal Bentahar and Y A Joarder
                                                </span>
                                                <div className='flex pl-5 mt-3'>
                                                    <button className='btn btn-outline text-cyan-800 btn-xs hover:bg-orange-600 hover:border-none mr-2 '><a href="https://github.com/yajoarder?fbclid=IwAR2lW1_-YYwG1hvJww1DVP0lnEjENEo7e1ojXXRijMWajN-avUHgMPFMZ8M">Code</a></button>
                                                    <button className='btn btn-outline text-cyan-800 btn-xs hover:bg-orange-600 hover:border-none mr-2'><a href="https://link.springer.com/chapter/10.1007/978-3-031-14391-5_4">Paper</a></button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="divide-y divide-gray-700 mt-5">
                                        <div className="grid justify-center grid-cols-4 pl-8 mx-auto space-y-8 lg:space-y-0">
                                            <div data-aos="fade-right" className="flex  justify-center lg:col-span-1 col-span-full">
                                                <img className='h-28 rounded-md w-44 shadow-2xl' src={ai2} alt="" />
                                            </div>
                                            <div data-aos="fade-up" className="flex flex-col justify-start  max-w-3xl  col-span-full lg:col-span-3 text-left">
                                                <div className='flex justify-between items-center'>
                                                    <div className='flex flex-col'>
                                                        <span className="text-xl font-semibold md:text-xl pl-5">Improvement of ANN-based Offline Handwritten Character Recognition Using Gradient and Geometric Feature Extraction Techniques  </span>

                                                    </div>

                                                </div>
                                                <span className="mt-4 dark:text-gray-300 pl-5">
                                                    Y A Joarder, Paresh Chandra Barman, and Md Zahidul Islam,
                                                </span>
                                                <div className='flex pl-5 mt-3'>
                                                    <button className='btn btn-outline text-cyan-800 btn-xs hover:bg-orange-600 hover:border-none mr-2 '><a href="https://github.com/yajoarder?fbclid=IwAR2lW1_-YYwG1hvJww1DVP0lnEjENEo7e1ojXXRijMWajN-avUHgMPFMZ8M">Code</a></button>
                                                    <button className='btn btn-outline text-cyan-800 btn-xs hover:bg-orange-600 hover:border-none mr-2'><a href="https://link.springer.com/chapter/10.1007/978-3-319-58750-9_20">Paper</a></button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>



                    </div>
                </section>

                <h1 className='text-center text-5xl font-bold  pt-20 mb-5 text-[#0a192f] '>Projects</h1>

                <section className='mb-10 '>
                    <section className="dark:bg-gray-800 dark:text-gray-100">
                        <div className="container shadow-md rounded-2xl max-w-5xl px-4 py-12 mx-auto">
                            <div className="grid gap-4 mx-4 sm:grid-cols-12">
                                <div className="col-span-12 sm:col-span-3">
                                    <div data-aos="fade-right" className="flex flex-col justify-center lg:col-span-1 col-span-full">
                                    <AiOutlineProject className='w-72 sm:w-32 text-center  text-orange-600 h-72 sm:h-32'></AiOutlineProject>
                                        <span className="text-xl font-bold py-3 pl-3 md:text-3xl">  Projects </span>
                                    </div>
                                </div>
                                <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                                    <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
                                        <div data-aos="fade-up" className="flex flex-col  p-3 text-justify shadow-sm sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                                            <h3 className="text-xl font-semibold tracking-wide">
                                                Concept Development of Autonomous Vehicles: Self-Driving Smart Car </h3>
                                            <time className="text-xs tracking-wide uppercase dark:text-gray-400">Sep 2021 - Dec 2021</time>

                                        </div>
                                        <div data-aos="fade-up" className="flex flex-col  p-3 text-justify shadow-sm sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                                            <h3 className="text-xl font-semibold tracking-wide">
                                                Model Inversion Attack in MLaaS System and Its Countermeasures</h3>
                                            <time className="text-xs tracking-wide uppercase dark:text-gray-400">Jul 2021 - Aug 2021</time>

                                        </div>
                                        <div data-aos="fade-up" className="flex flex-col  p-3 text-justify shadow-sm sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                                            <h3 className="text-xl font-semibold tracking-wide">
                                                Modeling and Verification of ANN-based Enhanced Offline Hand-Written Character Recognition System</h3>
                                            <time className="text-xs tracking-wide uppercase dark:text-gray-400">May 2021 - Jun 2021</time>

                                        </div>
                                        <div data-aos="fade-up" className="flex flex-col  p-3 text-justify shadow-sm sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                                            <h3 className="text-xl font-semibold tracking-wide">

                                                An Unique Research on the Application of OpenStack to Build up a FHRVC for Representing a Network Security Technology Platform</h3>
                                            <time className="text-xs tracking-wide uppercase dark:text-gray-400">Sep 2019 - Dec 2019</time>

                                        </div>
                                        <div data-aos="fade-up" className="flex flex-col  p-3 text-justify shadow-sm sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                                            <h3 className="text-xl font-semibold tracking-wide">

                                                A Machine Learning Based Real Time English Character Recognition for Human Computer Interaction Using Geometric Feature Extraction Technique</h3>
                                            <time className="text-xs tracking-wide uppercase dark:text-gray-400">May 2019 - Aug 2019</time>

                                        </div>
                                        <div data-aos="fade-up" className="flex flex-col  p-3 text-justify shadow-sm sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                                            <h3 className="text-xl font-semibold tracking-wide">
                                                An Improved Sentenced Dissimilarity Measurement Technique Using Clustering and Classification with Non-Existence Features</h3>
                                            <time className="text-xs tracking-wide uppercase dark:text-gray-400">Jan 2019 - Apr 2019</time>

                                        </div>
                                        <div data-aos="fade-up" className="flex flex-col  p-3 text-justify shadow-sm sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                                            <h3 className="text-xl font-semibold tracking-wide">
                                                Robust Big Data Clustering and Analysis for Solving Empty Clustering Problem Using A Hybrid Algorithm</h3>
                                            <time className="text-xs tracking-wide uppercase dark:text-gray-400">Jan 2019 - Apr 2019</time>

                                        </div>
                                        <div data-aos="fade-up" className="flex flex-col  p-3 text-justify shadow-sm sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                                            <h3 className="text-xl font-semibold tracking-wide">

                                                Continuous Integration for System Testing Using Jenkins</h3>
                                            <time className="text-xs tracking-wide uppercase dark:text-gray-400">Aug 2018 - Dec 2018</time>

                                        </div>


                                        <div data-aos="fade-up" className="flex flex-col  p-3 text-justify shadow-sm sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                                            <h3 className="text-xl font-semibold tracking-wide">


                                                Improvement of ANN-based Offline Handwritten Character Recognition Using Gradient and Geometric Feature Extraction Techniques</h3>
                                            <p className="text-xs tracking-wide uppercase dark:text-gray-400">JAN 2013 - JUL 2014 </p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>

            </div>
        </>
    );
};

export default Research;