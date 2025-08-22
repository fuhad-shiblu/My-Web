import './Projectscompo.css'
import ra from '../../../../public/img/ra.png'
import cd from '../../../../public/img/cd.png'
import { Link } from 'react-router-dom'
import { FaExternalLinkAlt } from "react-icons/fa";

const Projectscompo = () => {
  return (
    <>
      <div className="mt-[50px] flex flex-col gap-5">
        <h1 className='text-sm font-medium capitalize text-[#cdcdcd]'>my works</h1>
        <p className='text-2xl font-bold text-[#b0f221] uppercase'>explore my latest projects</p>
        <div className="flex gap-5 justify-between items-center flex-wrap">
            <div className="w-full h-[250px] md:w-[500px] md:h-[300px] bg-white overflow-hidden rounded-xl relative hover:rotate-[-2deg] hover:scale-[1.1] transition-all projectsCard">
                <img className='w-full h-full absolute' src={ra} alt="Reload Animation" />
                <div className="w-full p-3 bg-[#b0f221] absolute bottom-0 left-0 transition-all projectsCrdTxt">
                  <p className='w-full text-center text-[#2a2a2a] capitalize text-sm font-semibold'>simple reload animation</p>
                </div>
                <div className="w-full h-full rotate-[-45deg] absolute bg-[rgba(255,255,255,0.56)] top-0 left-0 p-5 proCardChild transition-all opacity-0 flex flex-col gap-5 justify-center">
                    <h2 className='text-xl capitalize text-black font-bold'>simple reload animation</h2>
                    <p className='w-full text-black font-medium text-sm'>I just make simple animation using HTML and CSS. This is a simple pre-loader animation. When loading/reload the web page, then these pre-loader animation will be shown.</p>
                    <Link className='flex items-center gap-1 text-lg bg-[#b0f221] rounded-lg p-1 text-[#282828] justify-center font-bold items-center capitalize active:scale-[.9] transition-all' to={'https://reload-animation-by-fuhad-shiblu.vercel.app'} target='_blank'><FaExternalLinkAlt/>live preview</Link>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Projectscompo