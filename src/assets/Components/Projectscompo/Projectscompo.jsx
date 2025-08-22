import './Projectscompo.css'
import ra from '../../../../public/img/ra.png'
import cd from '../../../../public/img/cd.png'
import { Link } from 'react-router-dom'
import { FaExternalLinkAlt } from "react-icons/fa";

const Projectscompo = () => {
  return (
    <>
      <div className="mt-[50px] bg-[#f0f0f0] p-5 rounded-xl flex flex-col gap-5">
        <h1 className='text-sm font-medium capitalize text-[#4b4b4b]'>my works</h1>
        <p className='w-full md:w-[550px] text-2xl font-bold text-[#FB4141] uppercase'>explore my latest projects</p>
        <div className="flex gap-5 md:justify-between items-center flex-wrap justify-center md:flex-row-reverse flex-col-reverse">
            <div className="w-[500px] h-[300px] bg-white overflow-hidden rounded-xl relative hover:rotate-[-2deg] hover:scale-[1.1] transition-all projectsCard">
                <img className='w-full h-full absolute' src={ra} alt="Reload Animation" />
                <div className="w-full h-full rotate-[-45deg] absolute bg-[rgba(255,255,255,0.56)] top-0 left-0 p-5 proCardChild transition-all opacity-0 flex flex-col gap-5 justify-center">
                    <h2 className='text-xl capitalize text-black font-bold'>reload animation</h2>
                    <p className='w-full text-black font-light text-sm'>I just make simple animation using HTML and CSS. This is a simple pre-loader animation. When loading/reload the web page, then these pre-loader animation will be shown.</p>
                    <Link className='flex items-center gap-1 text-lg bg-[#FB4141] rounded-lg p-1 text-white justify-center items-center capitalize active:scale-[.9] transition-all' to={'https://reload-animation-by-fuhad-shiblu.vercel.app'} target='_blank'><FaExternalLinkAlt/>live preview</Link>
                </div>
            </div>
            <div className="w-[500px] h-[300px] bg-white overflow-hidden rounded-xl relative hover:rotate-[-2deg] hover:scale-[1.1] transition-all projectsCard">
                <img className='w-full h-full absolute' src={cd} alt="Countdown" />
                <div className="w-full h-full rotate-[-45deg] absolute bg-[rgba(255,255,255,0.56)] top-0 left-0 p-5 proCardChild transition-all opacity-0 flex flex-col gap-5 justify-center">
                    <h2 className='text-xl capitalize text-black font-bold'>countdown</h2>
                    <p className='w-full text-black font-light text-sm'>I just make simple animation using HTML and CSS. This is a countdown effect.</p>
                    <Link className='flex items-center gap-1 text-lg bg-[#FB4141] rounded-lg p-1 text-white justify-center items-center capitalize active:scale-[.9] transition-all' to={'https://reload-animation-by-fuhad-shiblu.vercel.app'} target='_blank'><FaExternalLinkAlt/>live preview</Link>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Projectscompo