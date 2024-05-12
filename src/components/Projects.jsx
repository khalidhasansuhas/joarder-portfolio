import React, { useEffect } from 'react';
import banner from '../asset/banner.png'
import Aos from 'aos';
import 'aos/dist/aos.css';
import quicPRO from '../asset/quicPRO.jpeg'
import quicWAND from '../asset/quicWAND.jpeg'
import quicSHEILD from '../asset/quicSHEILD.jpeg'
import update1 from '../asset/update1.jpg'
import update2 from '../asset/update2.jpeg'
import update3 from '../asset/update3.JPG'
import update4 from '../asset/update4.jpg'
import update5 from '../asset/update5.jpg'
import update6 from '../asset/update6.jfif'


const Projects = () => {
    useEffect(() => {
        Aos.init({ duration: 500 });
    }, [])
    return (
        <div className='h-full'>
            <div data-aos="fade-down" data-aos-duration="1000" className="hero pt-20 h-48 border-b-8 border-orange-600" style={{ backgroundImage: `url(${banner})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content">
                    <div className="max-w-md">
                        <h1 data-aos="fade-left" className="text-3xl font-bold"><span className='text-orange-600'>Y A Joarder ||</span> Updates</h1>
                    </div>
                </div>
            </div>
            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container mx-auto flex flex-col p-6">

                    <div className="divide-y divide-gray-700">
                        <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
                            <div data-aos="fade-right" className="flex  justify-center lg:col-span-1 col-span-full">
                                <img className='h-40 w-64 shadow-2xl' src={quicPRO} alt="" />
                            </div>
                            <div data-aos="fade-up" className="flex flex-col justify-start  max-w-3xl  col-span-full lg:col-span-3 text-left">
                                <span className="mt-4 dark:text-gray-300">
                                    Our latest publication on "<span className='font-bold'>QUICPro</span>: Integrating Deep Reinforcement Learning to Defend against QUIC Handshake Flooding Attacks" <br />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="divide-y divide-gray-700">
                        <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
                            <div data-aos="fade-right" className="flex  justify-center lg:col-span-1 col-span-full">
                                <img className='h-40 w-64 shadow-2xl' src={quicWAND} alt="" />
                            </div>
                            <div data-aos="fade-up" className="flex flex-col justify-start  max-w-3xl  col-span-full lg:col-span-3 text-left">
                                <span className="mt-4 dark:text-gray-300">
                                    Our recent publication on "<span className='font-bold'>QUICwand</span>: A Machine Learning Optimization-based Hybrid Defense Approach Against QUIC Flooding Attacks" <br />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="divide-y divide-gray-700">
                        <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
                            <div data-aos="fade-right" className="flex  justify-center lg:col-span-1 col-span-full">
                                <img className='h-40 w-64 shadow-2xl' src={quicSHEILD} alt="" />
                            </div>
                            <div data-aos="fade-up" className="flex flex-col justify-start  max-w-3xl  col-span-full lg:col-span-3 text-left">
                                <span className="mt-4 dark:text-gray-300">
                                    Our recent publication on "<span className='font-bold'>QUICShield</span>: A Rapid Detection Mechanism Against QUIC-Flooding Attacks" <br />( <a className='text-blue-600' href="https://ieeexplore.ieee.org/abstract/document/10474735">Publication Link</a> )
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="divide-y divide-gray-700">
                        <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
                            <div data-aos="fade-right" className="flex  justify-center lg:col-span-1 col-span-full">
                                <img className='h-40 w-64 shadow-2xl' src={update3} alt="" />
                            </div>
                            <div data-aos="fade-up" className="flex flex-col justify-start  max-w-3xl  col-span-full lg:col-span-3 text-left">
                                <span className="mt-4 dark:text-gray-300">
                                    Our recent publication on “An Empirical Approach to Evaluate the Resilience of
                                    QUIC Protocol against Handshake Flood Attacks" <br /> <a className='text-blue-600' href="https://ieeexplore.ieee.org/abstract/document/10327907">(Publication Link)</a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="divide-y divide-gray-700">
                        <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
                            <div data-aos="fade-right" className="flex  justify-center lg:col-span-1 col-span-full">
                                <img className='h-40 w-64 shadow-2xl' src={update1} alt="" />
                            </div>
                            <div data-aos="fade-up" className="flex flex-col justify-start  max-w-3xl  col-span-full lg:col-span-3 text-left">
                                <span className="mt-4 dark:text-gray-300">
                                    Our recent publication on “<span className='font-bold'>QUIC Security</span> ” is in IEEE Xplore. Important to mention: it is one of the first surveys that focuses on the security of the QUIC protocol. <br /> <a className='text-blue-600' href="https://ieeexplore.ieee.org/document/9955622">(Publication Link)</a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="divide-y divide-gray-700">
                        <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
                            <div data-aos="fade-right" className="flex  justify-center lg:col-span-1 col-span-full">
                                <img className='h-40 w-64 shadow-2xl' src={update2} alt="" />
                            </div>
                            <div data-aos="fade-up" className="flex flex-col justify-start  max-w-3xl  col-span-full lg:col-span-3 text-left">

                                <span className="mt-4 dark:text-gray-300">
                                    We are featured in Concordia 3 min <br /> ( <a className='text-blue-600' href="https://www.concordia.ca/cunews/main/stories/2022/12/12/concordia-hosts-a-hands-on-cybersecurity-contest-for-students.html">Read More</a> )

                                </span>
                            </div>
                        </div>

                    </div>
                    <div className="divide-y divide-gray-700">
                        <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
                            <div data-aos="fade-right" className="flex  justify-center lg:col-span-1 col-span-full">
                                <img className='h-40 w-64 shadow-2xl' src={update3} alt="" />
                            </div>
                            <div data-aos="fade-up" className="flex flex-col justify-start  max-w-3xl  col-span-full lg:col-span-3 text-left">

                                <span className="mt-4 dark:text-gray-300">
                                    Our recent research work which is based on QUIC Protocol Security titled “<span className='font-semibold'>A Survey on the Security Issues of QUIC</span>” has been accepted to be presented in 6th edition of CSNet Conference, 2022 (CSNet’22) in Rio de Janeiro, Brazil! <br /> <a className='text-blue-600' href="https://ieeexplore.ieee.org/document/9955622">(Publication link)</a>
                                </span>
                            </div>
                        </div>

                    </div>
                    <div className="divide-y divide-gray-700">
                        <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
                            <div data-aos="fade-right" className="flex justify-center lg:col-span-1 col-span-full">
                                <img className='h-40 w-64 shadow-2xl' src={update4} alt="" />
                            </div>
                            <div data-aos="fade-up" className="flex flex-col justify-start max-w-3xl  col-span-full lg:col-span-3 text-left">

                                <span className="mt-4 dark:text-gray-300">
                                    My research talk on <span className='font-semibold'>QUIC Protocol and Its Past, Current and Future</span> <br /> ( <a className='text-blue-600' href="https://www.concordia.ca/cunews/main/stories/2022/12/12/concordia-hosts-a-hands-on-cybersecurity-contest-for-students.html">Link</a> )
                                </span>
                            </div>
                        </div>

                    </div>
                    <div className="divide-y divide-gray-700">
                        <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
                            <div data-aos="fade-right" className="flex  justify-center lg:col-span-1 col-span-full">
                                <img className='h-40 w-64 shadow-2xl' src={update5} alt="" />
                            </div>
                            <div data-aos="fade-up" className="flex flex-col justify-start  max-w-3xl  col-span-full lg:col-span-3 text-left">

                                <span className="mt-4 dark:text-gray-300">
                                    I am going to give a virtual (Zoom Cloud Meeting Platform) research talk on <span className='font-semibold'> “QUIC Protocol and Its Past, Current and Future” </span>The event is organized by ICT Research Lab, Bangladesh. Only limited participants will chance to join the virtual research talk. Selected participants will get a confirmation email with zoom ID and Passcode.
                                </span>
                            </div>
                        </div>

                    </div>
                    <div className="divide-y divide-gray-700">
                        <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
                            <div data-aos="fade-right" className="flex  justify-center lg:col-span-1 col-span-full">
                                <img className='h-40 w-64 shadow-2xl' src={update6} alt="" />
                            </div>
                            <div data-aos="fade-up" className="flex flex-col justify-start  max-w-3xl  col-span-full lg:col-span-3 text-left">

                                <span className="mt-4 dark:text-gray-300">
                                    Our latest publication titled: <span className='font-semibold'>“Active Federated YOLOR Model for Enhancing  Autonomous Vehicles Safety”</span> is in Springer. It is published in Mobile Web and Intelligent Information Systems. MobiWIS 2022. ( <a className='text-blue-600' href="https://link.springer.com/chapter/10.1007/978-3-031-14391-5_4">Publication Link</a> )
                                </span>
                            </div>
                        </div>

                    </div>


                </div>
            </section>

        </div>
    );
};

export default Projects;