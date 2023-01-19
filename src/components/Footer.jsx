import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
    useEffect(()=>{
        Aos.init({duration: 2000});
    },[])
    return (
        <div >
            <footer  className="dark:bg-gray-800 dark:text-gray-50 py-5 bg-[#0a192f]  text-gray-300">
            
                <div className="flex items-center justify-center px-6 pb-3 text-sm">
                    <span className="dark:text-gray-400">Copyright © 2023. Y A Joarder.</span>
                </div>
                <div className="flex items-center justify-center px-6 pb-5 text-sm">
                    <span className="dark:text-gray-400">This statements and opinions on this site are solely my own, and do not represent the positions or policies of any institutions</span>
                </div>
            </footer>
        </div>
    );
};

export default Footer;