import React from 'react';
import { FaBook, FaGenderless, FaMedal, FaUserCog } from 'react-icons/fa';
import { GiNewspaper, GiTeacher } from 'react-icons/gi';

const Achievements = () => {
    return (
        <div>
            <div>
                <h1 className='text-center text-3xl font-bold  pt-20  text-[#0a192f] underline'>Grants, Fellowships and Awards</h1>
                <section className="dark:bg-gray-800 dark:text-gray-100">
                    <div className="container mx-auto flex flex-col p-6">

                        <div className="divide-y divide-gray-700">
                            <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
                                <div className="flex items-center justify-center lg:col-span-1 col-span-full">
                                    <FaMedal className='w-16 h-16'></FaMedal>
                                </div>
                                <div className="flex flex-col justify-center  max-w-3xl  col-span-full lg:col-span-3 text-left">
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
                                <div className="flex items-center justify-center lg:col-span-1 col-span-full">
                                    <FaBook className='w-16 h-16'></FaBook>
                                </div>
                                <div className="flex flex-col justify-center  max-w-3xl  col-span-full lg:col-span-3 text-left">
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
                                <div className="flex items-center justify-center lg:col-span-1 col-span-full">
                                    <GiNewspaper className='w-16 h-16'></GiNewspaper>
                                </div>
                                <div className="flex flex-col justify-center  max-w-3xl  col-span-full lg:col-span-3 text-left">
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
                                <div className="flex items-center justify-center lg:col-span-1 col-span-full">
                                    <GiTeacher className='w-16 h-16'></GiTeacher>
                                </div>
                                <div className="flex flex-col justify-center  max-w-3xl  col-span-full lg:col-span-3 text-left">
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
                                <div className="flex items-center justify-center lg:col-span-1 col-span-full">
                                    <FaUserCog className='w-16 h-16'></FaUserCog>
                                </div>
                                <div className="flex flex-col justify-center  max-w-3xl  col-span-full lg:col-span-3 text-left">
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