import React from 'react';
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
        <div className=" bg-[#0a192f] fixed w-full  text-gray-300 flex justify-between px-6">
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
           
        </div>
    );
};


export default Navbar;