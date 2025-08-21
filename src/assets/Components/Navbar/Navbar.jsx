import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'
import logo from '../../../../public/img/profile.png'
import { GoHome } from "react-icons/go";
import { FaRegUser } from "react-icons/fa";
import { GoGear } from "react-icons/go";
import { GrProjects } from "react-icons/gr";
import { SiMaildotru } from "react-icons/si";
import { MdOutlineReviews } from "react-icons/md";
import { FaDiagramProject } from "react-icons/fa6";
import { RiMenu4Fill } from "react-icons/ri";

const Navbar = () => {
  return (
    <>
    <nav className='flex justify-between items-center mt-5 bg-[#f0f0f0] px-2 py-3 rounded-lg'>
        {/* ===== Navbar Main Logo Part ===== */}
        <Link to={'/'}><img className='w-[50px] h-[50px] rounded-full' src={logo} alt="" /></Link>

        {/* ===== Navbar Main Menu Part Start ===== */}
        <ul className='md:flex gap-5 capitalize text-sm font-medium text-[#757575] hidden'>
            <li><NavLink to="/" className={({ isActive }) => isActive ? "hover:text-white text-white rounded-xl transition-all flex flex-col items-center gap-1 bg-[#FB4141] px-5 py-2" : "hover:text-white rounded-xl transition-all flex flex-col items-center gap-1 hover:bg-[#FB4141] px-5 py-2"}><GoHome className='text-xl'/>home</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => isActive ? "hover:text-white text-white rounded-xl transition-all flex flex-col items-center gap-1 bg-[#FB4141] px-5 py-2" : "hover:text-white rounded-xl transition-all flex flex-col items-center gap-1 hover:bg-[#FB4141] px-5 py-2"}><FaRegUser className='text-xl'/>about</NavLink></li>
            <li><NavLink to="/services" className={({ isActive }) => isActive ? "hover:text-white text-white rounded-xl transition-all flex flex-col items-center gap-1 bg-[#FB4141] px-5 py-2" : "hover:text-white rounded-xl transition-all flex flex-col items-center gap-1 hover:bg-[#FB4141] px-5 py-2"}><GoGear className='text-xl'/>services</NavLink></li>
            <li><NavLink to="/projects" className={({ isActive }) => isActive ? "hover:text-white text-white rounded-xl transition-all flex flex-col items-center gap-1 bg-[#FB4141] px-5 py-2" : "hover:text-white rounded-xl transition-all flex flex-col items-center gap-1 hover:bg-[#FB4141] px-5 py-2"}><GrProjects className='text-xl'/>projects</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) => isActive ? "hover:text-white text-white rounded-xl transition-all flex flex-col items-center gap-1 bg-[#FB4141] px-5 py-2" : "hover:text-white rounded-xl transition-all flex flex-col items-center gap-1 hover:bg-[#FB4141] px-5 py-2"}><SiMaildotru className='text-xl'/>contact</NavLink></li>
            <li><NavLink to="/testimonial" className={({ isActive }) => isActive ? "hover:text-white text-white rounded-xl transition-all flex flex-col items-center gap-1 bg-[#FB4141] px-5 py-2" : "hover:text-white rounded-xl transition-all flex flex-col items-center gap-1 hover:bg-[#FB4141] px-5 py-2"}><MdOutlineReviews className='text-xl'/>testimonial</NavLink></li>
        </ul>
        <Link className='text-lg capitalize font-semibold px-3 py-2 bg-[#FB4141] text-white rounded-lg border-2 border-solid border-[#FB4141] hover:text-[#FB4141] hover:bg-transparent transition-all md:flex items-center gap-1 hidden' to={'/projects'}><FaDiagramProject className='text-xl'/>my portfolio</Link>

        {/* ===== Responsive Mobile Menu Part ===== */}
        <RiMenu4Fill className='text-3xl hover:text-[#FF0066] transition-all block md:hidden'/>
    </nav>
    </>
  )
}

export default Navbar