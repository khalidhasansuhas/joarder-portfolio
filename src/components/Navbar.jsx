import React from 'react';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaFacebook, FaGithub, FaLinkedin, FaOrcid, FaResearchgate, FaTwitter, FaYoutube } from 'react-icons/fa';
import { SiDblp, SiGooglescholar } from 'react-icons/si';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const menuItems = <React.Fragment>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/experience'>Experience</Link></li>
        <li><Link to='/education'>Education</Link></li>
        <li><Link to='/research'>Research</Link></li>
        <li><Link to='/projects'>Projects</Link></li>
        <li><Link to='/achievements'>Achievements</Link></li>
        <li><Link to='/teaching'>Teaching</Link></li>
        <li><Link to='/contact'>Contact</Link></li>

    </React.Fragment>
    return (
        <div className=" bg-[#0a192f] fixed z-10 w-full  text-gray-300 flex justify-between px-6">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow  bg-[#0a192f]  text-gray-300 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">Y A Joarder</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className='hidden lg:flex fixed flex-col top-[18%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-800'>
                        <a
                            className='flex justify-between items-center font-semibold p-4 w-full text-gray-300'
                            href='https://www.linkedin.com/in/khalid-hasan-suhas/'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-lime-600'>
                        <a
                            className='flex justify-between items-center font-semibold p-4 w-full text-gray-300'
                            href='https://www.linkedin.com/in/khalid-hasan-suhas/'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            ORCiD <FaOrcid size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-emerald-500'>
                        <a
                            className='flex justify-between items-center font-semibold p-4 w-full text-gray-300'
                            href='https://www.linkedin.com/in/khalid-hasan-suhas/'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Research Gate <FaResearchgate size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a
                            className='flex justify-between items-center p-4 font-semibold w-full text-gray-300'
                            href='https://github.com/khalidhasansuhas'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-sky-700'>
                        <a
                            className='flex justify-between items-center p-4 font-semibold w-full text-gray-300'
                            href='https://www.facebook.com/suuhaas'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Google Scholar <SiGooglescholar size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-cyan-600'>
                        <a
                            className='flex justify-between items-center p-4 font-semibold w-full text-gray-300'
                            href='https://drive.google.com/file/d/1I8nz1AKATaacBX5D1EKeacBt8cInSapy/view?fbclid=IwAR1bbQN0B4pZkGI7diPRShT-_nGva3N0dxB8ndHvz2ZDral_89uxKcOGdWI'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Twitter <FaTwitter size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-700'>
                        <a
                            className='flex justify-between items-center p-4 font-semibold w-full text-gray-300'
                            href='https://drive.google.com/file/d/1I8nz1AKATaacBX5D1EKeacBt8cInSapy/view?fbclid=IwAR1bbQN0B4pZkGI7diPRShT-_nGva3N0dxB8ndHvz2ZDral_89uxKcOGdWI'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Youtube <FaYoutube size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-amber-500'>
                        <a
                            className='flex justify-between items-center p-4 font-semibold w-full text-gray-300'
                            href='https://drive.google.com/file/d/1I8nz1AKATaacBX5D1EKeacBt8cInSapy/view?fbclid=IwAR1bbQN0B4pZkGI7diPRShT-_nGva3N0dxB8ndHvz2ZDral_89uxKcOGdWI'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            DBLP <SiDblp size={30} />
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    );
};


export default Navbar;