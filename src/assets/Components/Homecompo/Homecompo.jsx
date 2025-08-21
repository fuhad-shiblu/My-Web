import { Link } from 'react-router-dom'
import './Homecompo.css'
import { LuDownload } from "react-icons/lu";
import profile from '../../../../public/img/profile.png'
import { FaChevronRight } from "react-icons/fa6";

const Homecompo = () => {
  return (
    <>
    <div className="flex md:flex-row flex-col justify-center gap-10 md:gap-0 md:justify-between items-center mt-[50px] bg-[#f0f0f0] p-5 rounded-xl">
        <div className="flex flex-col gap-5">
            <p className="text-black font-bold text-3xl capitalize w-[300px]">hi, i'm<span className="block mt-5 text-2xl text-black font-medium"> <span className="capitalize text-[#FB4141]">fuhad hasan shiblu</span><span className="mt-5 block text-lg font-bold text-[#303030]">front-end web developer</span><span className='mt-5 block text-sm'>A passionate React developer using HTML, CSS, Tailwind CSS, Bootstrap, JavaScript, ReactJS, Redux, Firebase etc.</span></span></p>
            <div className="flex items-center gap-5">
                <Link className='text-lg capitalize px-3 py-2 bg-[#FB4141] flex items-center gap-1 text-white rounded-xl border-2 border-solid border-[#FB4141] transition-all hover:bg-transparent hover:text-[#FB4141]' to={'/contact'}>hire me<FaChevronRight className='text-xl'/></Link>
                <Link className='text-lg capitalize px-3 py-2 bg-[#FB4141] text-white rounded-xl border-2 border-solid border-[#FB4141] transition-all hover:bg-transparent hover:text-[#FB4141] flex items-center gap-1' to={'#'}><LuDownload className='text-xl'/>download resume</Link>
            </div>
        </div>
        <div className="w-[300px] h-[300px] rounded-full border-[5px] hover:border-solid overflow-hidden hover:border-[#484848] border-[#FB4141] border-dashed transition-all hover:bg-[#b0b0b0]">
            <img className='w-full h-full hover:scale-[1.1] rounded-full transition-all' src={profile} alt="Profile" />
        </div>
        <div className="w-full md:w-[300px] p-5 text-center md:text-start bg-[#b3b3b3] gap-5 flex flex-col rounded-lg overflow-hidden">
            <div className="flex flex-col gap-1">
                <p className='text-3xl font-semibold text-[#FB4141]'>5+</p>
                <p className='text-lg font-medium text-[#313131] capitalize'>year(s) of experience</p>
            </div>
            <div className="w-full h-[1px] bg-black">
            </div>
            <div className="flex flex-col gap-1">
                <p className='text-3xl font-semibold text-[#FB4141]'>0+</p>
                <p className='text-lg font-medium text-[#313131] capitalize'>project(s) completed</p>
            </div>
            <div className="w-full h-[1px] bg-black">
            </div>
            <div className="flex flex-col gap-1">
                <p className='text-3xl font-semibold text-[#FB4141]'>0+</p>
                <p className='text-lg font-medium text-[#313131] capitalize'>happy client(s)</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Homecompo