import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../../../../public/img/profile.png';
import { RiMenu4Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5"; // Optional close icon
import navbarDb from '../../../../public/dpApi/NavApi';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [nav, setNav]               = (navbarDb)

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <>
      <nav className='flex justify-between items-center mt-5 relative'>
        {/* ===== Navbar Logo ===== */}
        <Link to={'/'}>
          <img className='w-[50px] h-[50px] rounded-full' src={logo} alt="Logo" />
        </Link>

        {/* ===== Desktop Menu ===== */}
        <ul className='md:flex gap-10 capitalize text-sm font-medium text-[#757575] hidden'>
          {['home', 'about', 'services', 'contact', 'projects'].map((page) => (
            <li key={page}>
              <NavLink
                to={`/${page === 'home' ? '' : page}`}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#b0f221] hover:text-[#b0f221] transition-all relative"
                    : "text-white hover:text-[#b0f221] transition-all relative"
                }
              >
                {page}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* ===== Buttons (Hire Me & Mobile Menu Toggle) ===== */}
        <div className="flex gap-5">
          <Link
            className='hidden md:block text-sm capitalize font-semibold px-2 py-1 text-[#b0f221] rounded-lg border-2 border-solid border-[#b0f221] hover:border-[#b0f221] hover:text-[#4b4b4b] hover:bg-[#b0f221] transition-all'
            to={'/contact'}
          >
            hire me
          </Link>
          <button
            onClick={toggleMenu}
            className='text-2xl text-white border border-white rounded-lg px-2 py-1 block md:hidden active:border-[#b0f221] transition-all active:text-[#b0f221]'
          >
            {isMenuOpen ? <IoClose /> : <RiMenu4Fill />}
          </button>
        </div>

        {/* ===== Mobile Menu ===== */}
        <div className={`absolute top-16 right-0 w-full bg-[#111] md:hidden transition-all duration-500 ease-in-out z-50 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'}`}>
          <ul className='flex flex-col items-center gap-5 py-6 capitalize text-sm font-medium text-white'>
            {['home', 'about', 'services', 'contact', 'projects'].map((page) => (
              <li key={page} onClick={() => setIsMenuOpen(false)}>
                <NavLink
                  to={`/${page === 'home' ? '' : page}`}
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#b0f221] transition-all"
                      : "hover:text-[#b0f221] transition-all"
                  }
                >
                  {page}
                </NavLink>
              </li>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm capitalize font-semibold px-4 py-2 text-[#b0f221] border border-[#b0f221] rounded-lg hover:text-[#4b4b4b] hover:bg-[#b0f221] transition-all"
            >
              hire me
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;