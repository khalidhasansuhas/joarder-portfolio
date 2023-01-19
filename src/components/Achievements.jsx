import React, { useEffect } from 'react';
import { FaMedal } from 'react-icons/fa';
import { GiTeacher, GiTrophyCup } from 'react-icons/gi';
import { TbCertificate } from 'react-icons/tb';
import banner from '../asset/banner.png';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Achievements = () => {
    useEffect(() => {
        Aos.init({ duration: 500 });
    }, [])
    return (
        <div>
            <div data-aos="fade-down" data-aos-duration="1000" className="hero pt-20 h-48 border-b-8 border-orange-600" style={{ backgroundImage: `url(${banner})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content">
                    <div className="max-w-md">
                        <h1 data-aos="fade-left" className="text-3xl font-bold"><span className='text-orange-600'>Y A Joarder ||</span> Achievements</h1>
                    </div>
                </div>
            </div>
            <div>

                <section className="dark:bg-gray-800 dark:text-gray-100">
                    <div className="container mx-auto flex flex-col p-6">

                        <div className="divide-y divide-gray-700">
                            <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
                                <div data-aos="fade-right" className="flex  justify-center lg:col-span-1 col-span-full">
                                    <FaMedal className='w-24 text-orange-600 h-24'></FaMedal>
                                </div>
                                <div data-aos="fade-up" className="flex flex-col justify-center  max-w-3xl  col-span-full lg:col-span-3 text-left">
                                    <div className='flex justify-between items-center'>
                                        <div className='flex flex-col'>
                                            <span className="text-xl font-bold md:text-2xl"> Honors and Awards  </span>

                                        </div>

                                    </div>
                                    <span className="mt-4 dark:text-gray-300">
                                        1. Concordia International Tuition Award of Excellence, 2021. <br />
                                        2. Muhammad Qudrat-i- Khuda Science Speaker Award, 2017. <br />
                                        3. 1st Kushtia Science Fair (Math Competition), 2006. <br />
                                        4. Champion, District Primary School Debate Competition 2001 Kalkini Model Primary school, 2001. <br />


                                    </span>
                                </div>
                            </div>

                        </div>
                        <div className="divide-y divide-gray-700">
                            <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
                                <div data-aos="fade-right" className="flex  justify-center lg:col-span-1 col-span-full">
                                    <GiTrophyCup className='w-24 text-orange-600 h-24'></GiTrophyCup>
                                </div>
                                <div data-aos="fade-up" className="flex flex-col justify-center  max-w-3xl  col-span-full lg:col-span-3 text-left">
                                    <div className='flex justify-between items-center'>
                                        <div className='flex flex-col'>
                                            <span className="text-xl font-bold md:text-2xl"> Scholarship  </span>

                                        </div>

                                    </div>
                                    <span className="mt-4 dark:text-gray-300">
                                        1. FRS Scholarships from Concordia University



                                    </span>
                                </div>
                            </div>

                        </div>
                        <div className="divide-y divide-gray-700">
                            <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
                                <div data-aos="fade-right" className="flex  justify-center lg:col-span-1 col-span-full">
                                    <TbCertificate className='w-24 text-orange-600 h-24'></TbCertificate>
                                </div>
                                <div data-aos="fade-up" className="flex flex-col justify-center  max-w-3xl  col-span-full lg:col-span-3 text-left">
                                    <div className='flex justify-between items-center'>
                                        <div className='flex flex-col'>
                                            <span className="text-xl font-bold md:text-2xl"> Certifications  </span>

                                        </div>

                                    </div>
                                    <span className="mt-4 dark:text-gray-300">
                                        1. IELTS <br />
                                        2. Doulingo <br />
                                        3. BBC Janala <br />
                                    </span>
                                </div>
                            </div>

                        </div>
                        <div className="divide-y divide-gray-700">
                            <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
                                <div data-aos="fade-right" className="flex justify-center lg:col-span-1 col-span-full">
                                    <GiTeacher className='w-24 text-orange-600 h-24'></GiTeacher>
                                </div>
                                <div data-aos="fade-up" className="flex flex-col justify-center  max-w-3xl  col-span-full lg:col-span-3 text-left">
                                    <div className='flex justify-between items-center'>
                                        <div className='flex flex-col'>
                                            <span className="text-xl font-bold md:text-2xl"> Participations and Presentations  </span>

                                        </div>

                                    </div>
                                    <span className="mt-4 dark:text-gray-300">
                                        1. International Cybersecurity Forum 2022 FIC North America 2022, Montreal, Canada <br />
                                        2. Online Research Talk on "QUIC Protocol and Its Past, Current and Future" 2022 Department of Information and Communication Technology (DoICT) Research Lab, Dhaka, Bangladesh <br />
                                        3. International Workshop on Computer Vision and Intelligent Systems (IWCVIS) BRAC University (BRACU), 66 Mohakhali, Dhaka-1212, Bangladesh 2019 <br />
                                        4. International Workshop on Computer Vision and Application (IWCVA) 2019 Southeast University (SU), Tejgaon Campus,Dhaka, Bangladesh <br />
                                        
                                        5. International Conference on Networking, Systems and Security (NSysS) 2017 Bangladesh University of Engineering & Technology (BUET), Dhaka, Bangladesh <br />
                                        
                                        6. BRB Cables NDF BD 3rd National Debate Festival 07 2007 Organized by National Debate Federation Bangladesh (NDF BD). Kushtia Zilla School, Kushtia, Bangladesh <br />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Achievements;