import { NavLink } from 'react-router-dom'
import './Resnavcompo.css'
import { GoGear, GoHome } from 'react-icons/go'
import { FaRegUser } from 'react-icons/fa'
import { GrProjects } from 'react-icons/gr'
import { SiMaildotru } from 'react-icons/si'
import { MdOutlineReviews } from 'react-icons/md'

const Resnavcompo = () => {
  return (
    <>
    <div className="w-full fixed bg-white p-1 bottom-0 block md:hidden">
      <ul className='flex justify-between capitalize text-xs font-medium text-[#757575]'>
            <li><NavLink to="/about" className={({ isActive }) => isActive ? "hover:text-white text-white rounded-xl transition-all flex flex-col items-center gap-1 bg-[#FB4141] px-3 py-2" : "hover:text-white rounded-xl transition-all flex flex-col items-center gap-1 hover:bg-[#FB4141] px-3 py-2"}><FaRegUser className='text-xl'/>about</NavLink></li>
            <li><NavLink to="/services" className={({ isActive }) => isActive ? "hover:text-white text-white rounded-xl transition-all flex flex-col items-center gap-1 bg-[#FB4141] px-3 py-2" : "hover:text-white rounded-xl transition-all flex flex-col items-center gap-1 hover:bg-[#FB4141] px-3 py-2"}><GoGear className='text-xl'/>services</NavLink></li>
            <li><NavLink to="/" className={({ isActive }) => isActive ? "hover:text-white text-white rounded-full transition-all flex flex-col items-center gap-1 bg-[#FB4141] px-3 py-2" : "hover:text-white rounded-full transition-all flex flex-col items-center gap-1 hover:bg-[#FB4141] px-3 py-2"}><GoHome className='text-xl'/>home</NavLink></li>
            <li><NavLink to="/projects" className={({ isActive }) => isActive ? "hover:text-white text-white rounded-xl transition-all flex flex-col items-center gap-1 bg-[#FB4141] px-3 py-2" : "hover:text-white rounded-xl transition-all flex flex-col items-center gap-1 hover:bg-[#FB4141] px-3 py-2"}><GrProjects className='text-xl'/>projects</NavLink></li>
            <li><NavLink to="/testimonial" className={({ isActive }) => isActive ? "hover:text-white text-white rounded-xl transition-all flex flex-col items-center gap-1 bg-[#FB4141] px-3 py-2" : "hover:text-white rounded-xl transition-all flex flex-col items-center gap-1 hover:bg-[#FB4141] px-3 py-2"}><MdOutlineReviews className='text-xl'/>testimonial</NavLink></li>
        </ul>
    </div>
    </>
  )
}

export default Resnavcompo