import React, { useEffect } from 'react';
import { FaGenderless } from 'react-icons/fa';

import varsity from '../asset/varsity.jpeg'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import banner from '../asset/banner.png'
import labLogo from '../asset/labLogo.png'


const About = () => {
    useEffect(() => {
        Aos.init({ duration: 500 });
    }, [])
    return (
        <>
            <div className='w-full'>

                <div data-aos="fade-down" data-aos-duration="1000" className="hero pt-20 h-48 border-b-8 border-orange-600" style={{ backgroundImage: `url(${banner})` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-neutral-content">
                        <div className="max-w-md">
                            <h1 data-aos="fade-left" className="text-3xl font-bold"> <span data-aos="fade-right" className='text-orange-600'>Y A Joarder || </span> About</h1>
                        </div>
                    </div>
                </div>
                <div className='w-full '>
                    <div className=' flex flex-col mx-auto lg:flex-row'>
                        <div data-aos="fade-up" className='w-full container flex flex-col sm:w-3/4'>
                            <div className='w-full'>
                                <h1 className='text-center sm:text-start text-3xl font-bold sm:pl-80 pt-16 text-[#0a192f] '>Professional Summary</h1>
                                <div data-aos="fade-up">
                                    <p className="mt-6 mb-8 sm:pl-24  text-[#0a192f]  px-6 sm:mb-12">
                                        <FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless> PhD Candidate in Information and Systems Engineering at Concordia University, Montreal, Canada; <br />
                                        <FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless> Graduated with M.Sc. and B.Sc. in Information and Communication Engineering; <br />
                                        <FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless> 4.5 years of experience as Graduate Research Assistant in Bangladesh and Canada; <br />
                                        <FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless> 3 years of teaching experience as a Lecturer of CSE in Bangladesh and Teaching Assistant (TA) in Canada; <br />
                                        <FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless> Researcher in Cyber Security, Network Security, IoT, IIoT, IoV, IoE, AI and Data Science; <br />
                                        <FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless> Professional research competence in QUIC, Machine Learning, Deep Learning and Cloud Computing; <br />
                                        <FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless> 1.4 years of experience as Software Testing Engineer in Bangladesh; <br />
                                        <FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless> 5 months of experience as IT Analyst in Canada; <br />
                                        <FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless> Excellent analytical capacity, methodical approach, determination with can-do mindset; <br />
                                        <FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless> Proven leadership quality, organizing efficiency, autonomy with perfection even under pressure. <br />

                                    </p>
                                </div>
                            </div>
                            <div className='w-full'>
                                <h1 className='text-center sm:text-center text-3xl font-bold  text-[#0a192f] '>Skills of Software, System & Hardware</h1>
                                <div data-aos="fade-up">
                                    <p className="mt-6 mb-8 sm:pl-24  text-[#0a192f]  px-6 sm:mb-12">

                                        <FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless> <span className='font-semibold'> Languages: </span>  C, C++, Python, Java, JavaScript, VBScript, PHP, HTML5, CSS3, Prolog, Bash <br />
                                        <FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless> <span className='font-semibold'> Parallel Computing: </span>  MPI, CUDA, EC2, Elastic MapReduce, Hadoop, Spark <br />
                                        <FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless> <span className='font-semibold'> Tools: </span>  OpenCV, WEKA, OpenStack, Cisco Packet Tracer, Cloud Foundry, Kubernetes, Docker, AWS, GCP, Azure, Keras, TensorFlow, Jira, Arduino, Raspberry Pi <br />
                                        <FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless> <span className='font-semibold'> Scientific Computing: </span> MATLAB, Mathematica, NumPy, SciPy, Pandas, Scikit, PyTorch, Matplotlib <br />
                                        <FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless> <span className='font-semibold'> Applications: </span> LATEX, Adobe Photoshop, MS Office, Model Checkers: UPPAAL, SMV, NuSMV, MS Power BI, MS SharePoint, MS Teams <br />
                                        <FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless> <span className='font-semibold'> Cyber-Security Related Tools: </span> Acunetix, Wireshark, Zed Attack Proxy (ZAP) , Burp Suite, Invicti, Intruder, Metasploit, Aircrack-Ng, OpenVAS, SQLMap, NetStumbler, Ettercap, Maltego, Nikto, John The Ripper, Angry IP Scanner, WPScan, Hydra, SET, BeEF, Fern and Autopsy <br />
                                        <FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless> <span className='font-semibold'> Operating Systems: </span>  Linux, macOS, Microsoft Windows <br />
                                        <FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless> <span className='font-semibold'> DBMS:</span> NoSQL: MongoDB, SQL: MySQL, Oracle <br />
                                        <FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless> <span className='font-semibold'> SCM Tools:</span>  Git, Gitlab, GitHub <br />


                                    </p>
                                </div>
                            </div>
                            <div className=''>
                                <h1 className='text-center sm:text-center text-3xl font-bold  text-[#0a192f] '>Reviewer</h1>
                                <div data-aos="fade-up">
                                    <p className="mt-6 mb-8 sm:pl-24  text-[#0a192f]  px-6 sm:mb-12">


                                        <FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless> IEEE Transactions on Knowledge and Data Engineering (TKDE) <br />
                                        <FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless> Informatics in Medicine Unlocked (Elsevier) <br />
                                        <FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless> Computer Networks (Elsevier) <br />
                                        <FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless> CNSM 2022 (International Conference) <br />

                                    </p>
                                </div>
                            </div>
                            <div className=' '>
                                <h1 className='text-center sm:text-center text-3xl font-bold  text-[#0a192f] '>Leadership Experience</h1>
                                <div data-aos="fade-up">
                                    <p className="mt-6 mb-8 sm:pl-24  text-[#0a192f]  px-6 sm:mb-12">


                                        <FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless> Proctor, Collegiate Penetration Testing Competition (CPTC)
                                        <br /> Concordia University,
                                        Montreal, Quebec, Canada <br />
                                        <FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless> General Secretary, Student Association of ICE (SAICE),
                                        <br /> Department of Information and Communication Engineering (ICE),
                                        <br /> Islamic University, Bangladesh  <br />


                                    </p>
                                </div>
                            </div>
                            <div className=' '>
                                <h1 className='text-center sm:text-center text-3xl font-bold  text-[#0a192f] '>Activities</h1>
                                <div data-aos="fade-up">
                                    <p className="mt-6 mb-8 sm:pl-24  text-[#0a192f]  px-6 sm:mb-12">


                                        <FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless> GSA Concordia, Member (Jan. 2021 - Present)
                                        <br />
                                       <FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless> Golden Key International Honour Society, Member (Aug. 2022 - Present) <br />
                                       <FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless> Golden Key International Honour Society, Member (Aug. 2022 - Present) <br />
                                       <FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless> BSA Concordia, Member (Jan. 2021 - Present) <br />
                                       <FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless> Concordia Athletics Club, Paid Volunteer (Sept. 2021 - Present) <br />
                                       <FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless> IEEE Transactions on Knowledge & Data Eng., Reviewer (Oct. 2020 - Present) <br />
                                       <FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless> Bangladesh Computer Society (BCS), Member (Sept. 2019 - Present) <br />
                                       <FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless> International Association of Engineers, Member (Sept. 2016 - Present) <br />
                                       <FaGenderless className='inline-block mr-1 mb-1 sm:mb-0 text-xl'></FaGenderless> Student Association of ICE, IU, General Secretary (Sept. 2015 - Sept. 2016) <br />



                                    </p>
                                </div>
                            </div>
                            <div className='w-full'>
                                <h1 className='text-center sm:text-center text-3xl font-bold  text-[#0a192f] '>Academic Training</h1>
                                <div data-aos="fade-up">
                                    <p className="mt-6 mb-8 sm:pl-24  text-[#0a192f]  px-6 sm:mb-12">

                                        Academic Research and Paper Writing from Scratch, Networking Training, Linux (Ubuntu, Kali), PLC training, Microcontroller training, IoT (Internet of Things), Teaching Learning Assessment and Research Methodology training by IQAC-WUB

                                    </p>
                                </div>
                            </div>
                            <div className='w-full'>
                                <h1 className='text-center sm:text-center text-3xl font-bold  text-[#0a192f] '>In Real Life</h1>
                                <div data-aos="fade-up">
                                    <p className="mt-6 mb-8 sm:pl-24  text-[#0a192f]  px-6 sm:mb-12">

                                        My interests are Traveling, hiking, mad science, photography, watching live sports, TV shows, and movies are some of my hobbies. I used to spend a lot of time reading books and playing sports like football, cricket, chess and so on....

                                    </p>
                                </div>
                            </div>

                        </div>
                        <div className=' w-full container sm:w-1/4 pt-10 px-10 sm:pl-0 pb-10'>
                            <div data-aos="fade-left" className='flex flex-col'>

                                <div className='bg-green-200 rounded-lg my-5 shadow-md '>
                                    <div data-aos="fade-left">
                                        <div >
                                            <h1 className='text-center text-2xl font-bold  pt-5 text-[#0a192f] '>Current Research Lab</h1>
                                        </div>
                                        <div className='flex mx-auto'>
                                            <img className='w-48 h-16 mt-2 mx-auto' src={labLogo} alt="" />
                                        </div>
                                        <div>
                                            <a className=' text-cyan-600 hover:text-amber-500' href="https://ngnsec-lab.web.app/"><p className="text-lg text-center sm:pl-0 font-medium ">Next Generation Network  <br /> Security (NGNSec) Lab</p></a>
                                        </div>
                                    </div>

                                    <div className='flex mx-auto'>
                                        <img className='w-48 py-5 mx-auto' src={varsity} alt="" />
                                    </div>
                                </div>
                                <div data-aos="fade-left" className="flex flex-col  space-y-3 rounded-lg mb-5 shadow-md bg-green-200 dark:text-gray-900">
                                    <div>
                                        <h1 className='text-center text-2xl font-bold py-5 text-[#0a192f] '>Current Engagements</h1>
                                    </div>
                                    <div className="flex space-x-2 px-2 sm:space-x-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                        </svg>
                                        <div className="space-y-2">
                                            <p className="text-lg font-medium ">Ongoing Research Topic</p>
                                            <p className="leading-snug">Artificial Intelligence Enabled Cyber Security (QUIC Protocol)</p>
                                        </div>
                                    </div>
                                    <div className="flex space-x-2 px-2  sm:space-x-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                        </svg>
                                        <div className="space-y-2 mb-5">
                                            <p className="text-lg font-medium leading-snug">Professional Responsibilities</p>
                                            <p className="leading-snug">Teaching Assistant, Concordia University
                                            </p>
                                        </div>
                                    </div>


                                </div>



                                <div data-aos="fade-left" className='' >
                                    <div>
                                        <TwitterTimelineEmbed
                                            sourceType="profile"
                                            screenName="yajoarder"
                                            options={{ height: 400 }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default About;