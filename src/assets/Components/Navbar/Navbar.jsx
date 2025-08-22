import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'
import logo from '../../../../public/img/profile.png'
import { RiMenu4Fill } from "react-icons/ri";

const Navbar = () => {
  return (
    <>
    <nav className='flex justify-between items-center mt-5'>
        {/* ===== Navbar Main Logo Part ===== */}
        <Link to={'/'}><img className='w-[50px] h-[50px] rounded-full' src={logo} alt="" /></Link>

        {/* ===== Navbar Main Menu Part Start ===== */}
        <ul className='md:flex gap-10 capitalize text-sm font-medium text-[#757575] hidden'>
            <li><NavLink to="/" className={({ isActive }) => isActive ? "text-[#b0f221] hover:text-[#b0f221] transition-all relative" : "text-white hover:text-[#b0f221] transition-all relative"}>home</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => isActive ? "text-[#b0f221] hover:text-[#b0f221] transition-all relative" : "text-white hover:text-[#b0f221] transition-all relative"}>about</NavLink></li>
            <li><NavLink to="/services" className={({ isActive }) => isActive ? "text-[#b0f221] hover:text-[#b0f221] transition-all relative" : "text-white hover:text-[#b0f221] transition-all relative"}>services</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) => isActive ? "text-[#b0f221] hover:text-[#b0f221] transition-all relative" : "text-white hover:text-[#b0f221] transition-all relative"}>contact</NavLink></li>
            <li><NavLink to="/projects" className={({ isActive }) => isActive ? "text-[#b0f221] hover:text-[#b0f221] transition-all relative" : "text-white hover:text-[#b0f221] transition-all relative"}>projects</NavLink></li>
        </ul>
        <div className="flex gap-5">
          <Link className='hidden md:block text-sm capitalize font-semibold px-2 py-1 text-[#b0f221] rounded-lg border-2 border-solid border-[#b0f221] hover:border-[#b0f221] hover:text-[#4b4b4b] hover:bg-[#b0f221] transition-all' to={'/projects'}>hire me</Link>
          <button className='text-2xl text-white border-[1px] border-solid border-white rounded-lg px-2 py-1 block md:hidden active:border-[#b0f221] transition-all active:text-[#b0f221]'><RiMenu4Fill/></button>
        </div>
    </nav>
    </>
  )
}

export default Navbar