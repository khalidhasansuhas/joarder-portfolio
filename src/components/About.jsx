import React, { useEffect } from 'react';
import { FaGenderless, FaRegEnvelopeOpen } from 'react-icons/fa';
import Banner from './Banner';
import varsity from '../asset/varsity.jpeg'
import { TiSocialLinkedinCircular, TiSocialTwitterCircular } from 'react-icons/ti'
import { SiGooglescholar } from 'react-icons/si';
import { DiGithub } from 'react-icons/di';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';


const About = () => {
    useEffect(() => {
        Aos.init({ duration: 500 });
    }, [])
    return (
        <>
            <Banner></Banner>
            <div className=' '>
                <div className='container flex flex-col mx-auto lg:flex-row'>
                    <div data-aos="fade-up" className='w-full lg:w-3/4'>
                        <h1 className='text-center sm:text-start text-3xl font-bold sm:pl-80 pt-16 text-[#0a192f] '>Summary</h1>
                        <div>
                            <p className="mt-6 mb-8 pl-24  text-[#0a192f]  px-6 sm:mb-12">
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
                        <div className='flex w-full sm:flex-row flex-col'>
                            <div className='md:w-3/4'>
                                <div data-aos="fade-right" className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 dark:bg-violet-400 dark:text-gray-900">
                                    <div>
                                        <h1 className='text-center text-2xl font-bold py-10 text-[#0a192f] '>Current Engagements</h1>
                                    </div>
                                    <div className="flex space-x-2 sm:pl-10 sm:space-x-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                        </svg>
                                        <div className="space-y-2">
                                            <p className="text-lg font-medium leading-snug">Ongoing Research Topic</p>
                                            <p className="leading-snug">Artificial Intelligence Enabled Cyber Security (QUIC Protocol)</p>
                                        </div>
                                    </div>
                                    <div className="flex space-x-2 sm:pl-10 sm:space-x-4">
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
                            </div>
                            <div data-aos="fade-left">
                                <div >
                                    <h1 className='text-center text-2xl font-bold pt-16  text-[#0a192f] '>Current Research Lab</h1>
                                </div>
                                <a className='px-10 text-cyan-600 hover:text-amber-500' href="/"><p className="text-lg text-center sm:pl-0 font-medium leading-snug">Next Generation Network Security <br />(NGNSec) Lab</p></a>
                            </div>

                        </div>
                    </div>
                    <div className='w-full lg:w-1/4 pt-10 pl-10 sm:pl-0'>
                        <div data-aos="fade-left" className='flex flex-col'>
                            <p><span className='font-semibold text-xl text-center'>Skills</span> <br />
                                PhD Candidate in <br />
                                Information and Systems Engineering <br />
                                at Concordia University, Montreal, Canada;

                            </p>
                            <div>
                                <img className='w-48 mt-5' src={varsity} alt="" />
                            </div>
                            <div className='mt-5'>
                                <div className='flex'>
                                    <FaRegEnvelopeOpen className='text-2xl text-blue-700'></FaRegEnvelopeOpen>
                                    <h2 className='text-lg font-semibold px-2'>Emails </h2>
                                </div>
                                <div>
                                    <h3 className='text-sm '><span className='font-semibold'>Official:</span> ya DOT joarder AT concordia DOT ca<br />
                                        <span className='font-semibold'>Personal:</span> yajoarder AT gmail DOT com</h3>
                                </div>
                            </div>
                            <div className='flex mt-5 space-x-4 justify-center items-center'>
                                <a href="/">
                                    <TiSocialTwitterCircular className='text-3xl text-sky-600'></TiSocialTwitterCircular>
                                </a>
                                <a href="/">
                                    <SiGooglescholar className='text-3xl text-pink-800'></SiGooglescholar>
                                </a>
                                <a href="/">
                                    <DiGithub className='text-3xl'></DiGithub>
                                </a>
                                <a href="/">
                                    <TiSocialLinkedinCircular className='text-3xl text-blue-900 '></TiSocialLinkedinCircular>
                                </a>

                            </div>
                           
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
        </>
    );
};

export default About;