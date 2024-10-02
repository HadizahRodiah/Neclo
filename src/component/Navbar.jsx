import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to control mobile menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu open/close state
  };

  return (
    <nav className='bg-slate-500 text-white px-8 w-full md:px-18 lg:fixed'>
      <div className='container py-2 flex justify-between items-center'>
        <h1 className='text-white text-4xl mt-2 font-bold'>NECLO</h1>

        <div className='md:hidden'>
          <button onClick={toggleMenu} className='focus:outline-none'>
            {isOpen ? (
              <span className='text-white text-2xl'>&times;</span> // Close icon
            ) : (
              <span className='text-white text-2xl'>&#9776;</span> // Hamburger icon
            )}
          </button>
        </div>

        <ul className={`flex flex-col md:flex-row md:space-x-6 ${isOpen ? 'block' : 'hidden'} md:block`}>
          <li>
            <Link to="/">
              <span className='font-bold mx-3 bg-gradient-to-r from-stone-500 to-slate-50 text-black transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
                Health
              </span>
            </Link>
          </li>
          <li className='relative group'>
            <span className='font-bold mx-3 bg-gradient-to-r from-stone-500 to-slate-50 text-black hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
              Continent
            </span>
            <ul className="absolute left-0 hidden group-hover:flex flex-col space-y-2 bg-white text-black p-4 rounded-lg shadow-lg">
              <li>
                <Link to="/Africa">
                  <span className='font-bold bg-slate-200 text-black transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-lg'>
                    Africa
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/Europe">
                  <span className='font-bold bg-white text-black transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-lg'>
                    Europe
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/Asia">
                  <span className='font-bold bg-slate-200 text-black transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-lg'>
                    Asia
                  </span>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/Sport">
              <span className='font-bold mx-3 bg-gradient-to-r from-stone-500 to-slate-50 text-black transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
                Sport
              </span>
            </Link>
          </li>
          <li>
            <Link to="/Fashion">
              <span className='font-bold mx-3 bg-gradient-to-r from-stone-500 to-slate-50 text-black transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
                Fashion
              </span>
            </Link>
          </li>
          <li>
            <Link to="/Religion">
              <span className='font-bold mx-3 bg-gradient-to-r from-stone-500 to-slate-50 text-black transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
                Religion
              </span>
            </Link>
          </li>
          <li>
            <Link to="/Developer">
              <span className='font-bold mx-3 bg-gradient-to-r from-stone-500 to-slate-50 text-black transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
                Contact
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
