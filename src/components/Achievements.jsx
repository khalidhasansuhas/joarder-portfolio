import React, { useEffect } from 'react';
import { FaBook, FaMedal, FaUserCog } from 'react-icons/fa';
import { GiNewspaper, GiTeacher } from 'react-icons/gi';
import banner from '../asset/banner.png'
import Aos from 'aos';
import 'aos/dist/aos.css';

const Achievements = () => {
    useEffect(()=>{
        Aos.init({duration: 2000});
    },[])
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
                {/* <h1 className='text-center text-5xl font-bold  pt-20  text-[#0a192f] '>Grants, Fellowships and Awards</h1> */}
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
                                    <FaBook className='w-24 text-orange-600 h-24'></FaBook>
                                </div>
                                <div data-aos="fade-up" className="flex flex-col justify-center  max-w-3xl  col-span-full lg:col-span-3 text-left">
                                    <div className='flex justify-between items-center'>
                                        <div className='flex flex-col'>
                                            <span className="text-xl font-bold md:text-2xl"> Book Chapters  </span>

                                        </div>

                                    </div>
                                    <span className="mt-4 dark:text-gray-300">
                                        1. Part of the Communications in Computer and Information Science book series (CCIS, volume 713) <br />
                                        2. Part of the Lecture Notes in Computer Science book series (LNCS, volume 10903) <br />


                                    </span>
                                </div>
                            </div>

                        </div>
                        <div className="divide-y divide-gray-700">
                            <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
                                <div data-aos="fade-right" className="flex  justify-center lg:col-span-1 col-span-full">
                                    <GiNewspaper className='w-24 text-orange-600 h-24'></GiNewspaper>
                                </div>
                                <div data-aos="fade-up" className="flex flex-col justify-center  max-w-3xl  col-span-full lg:col-span-3 text-left">
                                    <div className='flex justify-between items-center'>
                                        <div className='flex flex-col'>
                                            <span className="text-xl font-bold md:text-2xl"> Poster Paper  </span>

                                        </div>

                                    </div>
                                    <span className="mt-4 dark:text-gray-300">
                                        1. <span className='font-semibold'>Y. A. Joarder </span>and Md. Safar Uddin Dipu – “Point Detection Based A Smart Pen Featured Listening and
                                        Writing Capable Robotic Arm” In the proceedings of International Workshop on Computer Vision and
                                        Intelligent Systems (IWCVIS 2019), 26 December 2019; BRAC University, 66 Mohakhali, Dhaka-1212,
                                        Bangladesh.
                                        <a className='text-cyan-700 underline pl-2' href="http://iwcvis.bracu.ac.bd/?fbclid=IwAR3668GDW0h1Nwl8ZRpBrfk7Uz2645O52XsPnI1vbzQHIykZKXvVwLOZfDM">(Read More)</a>


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
                                            <span className="text-xl font-bold md:text-2xl"> Participations and Presentation  </span>

                                        </div>

                                    </div>
                                    <span className="mt-4 dark:text-gray-300">
                                        1. International Workshop on Computer Vision and Intelligent Systems (IWCVIS) BRAC University (BRACU), 66 Mohakhali, Dhaka-1212, Bangladesh 2019 <br />
                                        2. International Workshop on Computer Vision and Application (IWCVA) 2019 Southeast University (SU), Tejgaon Campus,Dhaka, Bangladesh <br />
                                        3. National Collegiate Programming Contest: 2018 IUBAT NCPC 2018 <br />
                                        4. International Conference on Networking, Systems and Security (NSysS) 2017 Bangladesh University of Engineering & Technology (BUET), Dhaka, Bangladesh <br />
                                        5. International Collegiate Programming Contest 2017 ACM ICPC 2017 Dhaka Regional <br />
                                        6. BRB Cables NDF BD 3rd National Debate Festival 07 2007 Organized by National Debate Federation Bangladesh (NDF BD). Kushtia Zilla School, Kushtia, Bangladesh <br />
                                    </span>
                                </div>
                            </div>

                        </div>
                        <div className="divide-y divide-gray-700">
                            <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
                                <div data-aos="fade-right" className="flex  justify-center lg:col-span-1 col-span-full">
                                    <FaUserCog className='w-24 text-orange-600 h-24'></FaUserCog>
                                </div>
                                <div data-aos="fade-up" className="flex flex-col justify-center  max-w-3xl  col-span-full lg:col-span-3 text-left">
                                    <div className='flex justify-between items-center'>
                                        <div className='flex flex-col'>
                                            <span className="text-xl font-bold md:text-2xl"> Reviewers  </span>

                                        </div>

                                    </div>
                                    <span className="mt-4 dark:text-gray-300">
                                        1. IEEE Transactions on Knowledge and Data Engineering (TKDE) <br />
                                        2. Informatics in Medicine Unlocked (Elsevier) <br />
                                        3. Computer Networks (Elsevier) <br />
                                        4. CNSM 2022 (International Conference) <br />
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