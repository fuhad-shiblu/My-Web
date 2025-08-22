import { Link } from 'react-router-dom'
import './Homecompo.css'
import { LuDownload } from "react-icons/lu";
import profile from '../../../../public/img/profile.png'
import { FaChevronRight } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";

const Homecompo = () => {
  return (
    <>
    <div className="flex md:flex-row flex-col justify-center gap-10 md:gap-0 md:justify-between items-center mt-[50px]">
        <div className="flex flex-col gap-5">
            <p className="w-[350px] text-[#6b6b6b] font-semibold text-2xl capitalize">hi, i'm<span className="block mt-5 text-2xl text-black font-medium"> <span className="text-3xl capitalize text-[#b0f221]">fuhad hasan shiblu</span><span className="mt-5 block text-2xl font-bold text-white">front-end web developer</span><span className='mt-5 block text-sm text-[#b3b3b3]'>A passionate React developer using HTML, CSS, Tailwind CSS, Bootstrap, JavaScript, ReactJS, Redux, Firebase etc.</span></span></p>
            <div className="flex items-center gap-5">
                <Link className='text-sm capitalize px-2 py-1 bg-[#b0f221] flex items-center gap-1 text-[#424242] rounded-xl border-2 border-solid border-[#b0f221] transition-all hover:bg-transparent hover:text-[#b0f221]' to={'/projects'}><FaProjectDiagram className='text-sm'/>view portfolio</Link>
                <Link className='text-sm capitalize px-2 py-1 bg-[#b0f221] text-[#424242] rounded-xl border-2 border-solid border-[#b0f221] transition-all hover:bg-transparent hover:text-[#b0f221] flex items-center gap-1' to={'https://drive.usercontent.google.com/u/0/uc?id=1UB_A8933MRgMqQum4TS1IvHsCZ7zjZRa&export=download'}><LuDownload className='text-sm'/>download resume</Link>
            </div>
            <div className="flex items-center gap-5 md:mt-10">
                <p className='text-md font-bold text-white'>Follow on:</p>
                <div className="flex gap-3">
                    <Link className='w-[30px] h-[30px] flex justify-center items-center hover:bg-[#b0f221] hover:text-black transition-all text-[#b0f221] border-2 border-solid border-[#b0f221] rounded-full' to={'https://facebook.com/fuhad.shiblu'} target='_blank'><FaFacebookF/></Link>
                    <Link className='w-[30px] h-[30px] flex justify-center items-center hover:bg-[#b0f221] hover:text-black transition-all text-[#b0f221] border-2 border-solid border-[#b0f221] rounded-full' to={'https://instagram.com/fuhad.shiblu'} target='_blank'><FaInstagram className='text-xs'/></Link>
                    <Link className='w-[30px] h-[30px] flex justify-center items-center hover:bg-[#b0f221] hover:text-black transition-all text-[#b0f221] border-2 border-solid border-[#b0f221] rounded-full' to={'https://youtube.com/@fuhad.shiblu'} target='_blank'><FaYoutube className='text-xs'/></Link>
                    <Link className='w-[30px] h-[30px] flex justify-center items-center hover:bg-[#b0f221] hover:text-black transition-all text-[#b0f221] border-2 border-solid border-[#b0f221] rounded-full' to={'https://linkedin.com/in/fuhad-shiblu'} target='_blank'><FaLinkedinIn className='text-xs'/></Link>
                    <Link className='w-[30px] h-[30px] flex justify-center items-center hover:bg-[#b0f221] hover:text-black transition-all text-[#b0f221] border-2 border-solid border-[#b0f221] rounded-full' to={'https://github.com/fuhad-shiblu'} target='_blank'><FaGithub className='text-xs'/></Link>
                    <Link className='w-[30px] h-[30px] flex justify-center items-center hover:bg-[#b0f221] hover:text-black transition-all text-[#b0f221] border-2 border-solid border-[#b0f221] rounded-full' to={'https://pinterest.com/fuhadshiblu'} target='_blank'><FaPinterestP className='text-xs'/></Link>
                </div>
            </div>
        </div>
        <div className="w-[300px] h-[300px] rounded-full border-[5px] hover:border-solid overflow-hidden hover:border-[#b0f221] border-[#b0f221] border-dashed transition-all hover:bg-[#b0b0b0]">
            <img className='w-full h-full hover:scale-[1.1] rounded-full transition-all' src={profile} alt="Profile" />
        </div>
        <div className="w-full md:w-auto px-10 py-5 text-center md:text-start bg-black gap-5 flex flex-col rounded-lg overflow-hidden">
            <div className="flex flex-col gap-1">
                <p className='text-3xl font-semibold text-[#b0f221]'>3+</p>
                <p className='text-lg font-medium text-[#878787] capitalize'>year(s) of experience</p>
            </div>
            <div className="w-full h-[1px] bg-[#414141]">
            </div>
            <div className="flex flex-col gap-1">
                <p className='text-3xl font-semibold text-[#b0f221]'>0+</p>
                <p className='text-lg font-medium text-[#878787] capitalize'>project(s) completed</p>
            </div>
            <div className="w-full h-[1px] bg-[#414141]">
            </div>
            <div className="flex flex-col gap-1">
                <p className='text-3xl font-semibold text-[#b0f221]'>0+</p>
                <p className='text-lg font-medium text-[#878787] capitalize'>happy client(s)</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Homecompo