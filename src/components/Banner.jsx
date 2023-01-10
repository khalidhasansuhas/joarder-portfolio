import React, { useEffect } from 'react';
import banner from '../asset/banner.png'
import Aos from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {
    useEffect(()=>{
        Aos.init({duration: 2000});
    },[])
    return (

        <div data-aos="fade-down" data-aos-duration="1000" className="hero pt-20 h-48 border-b-8 border-orange-600" style={{ backgroundImage: `url(${banner})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content">
                <div className="max-w-md">
                    <h1 data-aos="fade-left" className="text-3xl font-bold"> <span data-aos="fade-right" className='text-orange-600'>Y A Joarder || </span> About</h1>
                </div>
            </div>
        </div>
    );
};

export default Banner;