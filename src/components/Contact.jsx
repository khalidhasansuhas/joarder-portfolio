import React, { useEffect } from 'react';
import { FaEnvelopeOpen, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import banner from '../asset/banner.png'
import Aos from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
    useEffect(()=>{
        Aos.init({duration: 2000});
    },[])
    return (
        <div className='sm:h-screen'>
            <div data-aos="fade-down" data-aos-duration="1000" className="hero pt-20 h-48 border-b-8 border-orange-600" style={{ backgroundImage: `url(${banner})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content">
                <div className="max-w-md">
                    <h1 data-aos="fade-left" className="text-3xl font-bold"><span className='text-orange-600'>Y A Joarder ||</span> Contact</h1>
                </div>
            </div>
        </div>
            
            <section className="py-6 dark:bg-gray-800 dark:text-gray-50 mt-8">
                <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
                    <div data-aos="fade-up" className="py-6 md:py-0 md:px-6">
                        <h1 className="text-4xl font-bold">Get in touch</h1>
                        <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
                        <div className="space-y-4">
                            <p className="flex items-center">
                                <FaMapMarkerAlt className='inline-block text-3xl mr-3'></FaMapMarkerAlt>
                                <span>1515 Ste-Catherine Street West, EV 003.222,<br /> Montreal, Quebec, Canada H3G 2W1</span>
                            </p>
                            <p className="flex items-center">
                                <FaPhone className='inline-block text-3xl mr-3'></FaPhone>
                                <span>(438) 368-9095</span>
                            </p>
                            <p className="flex items-center">
                                <FaEnvelopeOpen className='inline-block text-3xl mr-3'></FaEnvelopeOpen>
                                <span>yajoarder@gmail.com</span>
                            </p>
                        </div>
                    </div>
                    <form novalidate="" className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid">
                        <label className="block">
                            <span className="mb-1">Full name</span>
                            <input data-aos="fade-left" data-aos-duration="1000" name='name' type="text" placeholder="Your Name" className="block w-full p-2 rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-800" />
                        </label>
                        <label className="block">
                            <span className="mb-1">Email address</span>
                            <input data-aos="fade-left" data-aos-duration="2000" name='email' type="email" placeholder="Your Email" className="block w-full p-2 rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-800"data-temp-mail-org="0" />
                        </label>
                        <label className="block">
                            <span className="mb-1">Message</span>
                            <textarea data-aos="fade-left" data-aos-duration="3000" name='message' rows="3" placeholder='Type Your Messages' className="block w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-800"></textarea>
                        </label>
                        <div className='w-full flex justify-center'>
                        <button type="button" className="btn btn-primary w-1/2 ">Submit</button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Contact;