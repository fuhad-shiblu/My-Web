import { Link } from 'react-router-dom';
import './Aboutcompo.css'
import { MdOutlineMailOutline } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import profile from '../../../../public/img/profile.png'
import html from '../../../../public/img/html.png'
import css from '../../../../public/img/css.png'
import js from '../../../../public/img/js.png'
import react from '../../../../public/img/react.png'
import bootstrap from '../../../../public/img/bootstrap.png'
import tailwind from '../../../../public/img/tailwind.png'
import redux from '../../../../public/img/redux.png'
import firebase from '../../../../public/img/firebase.png'
import mist from '../../../../public/img/mist.png'
import bss from '../../../../public/img/bss.png'
import cit from '../../../../public/img/cit.png'
import bitac from '../../../../public/img/bitac.png'
import shwapno from '../../../../public/img/shwapno.png'

const Aboutcompo = () => {
  return (
    <>
    <div className="mt-[50px] flex items-center justify-between">
            {/* ===== About Me Part ===== */}
            <div className="flex flex-col gap-5">
                <h1 className='text-sm font-medium capitalize text-[#cdcdcd]'>about me</h1>
                <p className='text-2xl font-bold text-[#b0f221] uppercase'>who am i</p>
                <p className='text-sm w-full md:w-[550px] text-[#cecece] font-light'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe impedit atque, laborum sequi, ad error cumque officiis iste neque voluptatem fugit harum! Culpa eaque eveniet optio ipsam maiores exercitationem quia.</p>
                <div className="w-full p-5 bg-[#3c3c3c] rounded-xl flex flex-col md:flex-row md:items-center gap-5 md:gap-0 justify-between">
                    <div className="flex gap-3 items-center">
                        <div className="w-[50px] h-[50px] flex justify-center items-center bg-[#b0f221] rounded-full">
                            <MdOutlineMailOutline className='text-[#2e2e2e] text-xl'/>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className='text-sm capitalize text-[#b7b7b7] font-medium'>e-mail</p>
                            <Link className='text-md hover:underline text-white' to={'mailto:fuhadshiblu@outlook.com'}>fuhadshiblu@outlook.com</Link>
                        </div>
                    </div>
                    <div className="w-full h-[1px] md:rotate-[90deg] bg-[#858585]"></div>
                    <div className="flex gap-3 items-center">
                        <div className="w-[50px] h-[50px] flex justify-center items-center bg-[#b0f221] rounded-full">
                            <FaWhatsapp className='text-[#3d3d3d] text-xl'/>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className='text-sm capitalize text-[#b7b7b7] font-medium'>WhatsApp</p>
                            <p className='text-md text-white'>+8801839055083</p>
                        </div>
                    </div>
                </div>
            </div>
            <img className='w-[300px] h-[350px] rounded-xl hover:rotate-[5deg] border-2 border-solid hover:border-[#b0f221] transition-all hidden md:block' src={profile} alt="Profile" />
        </div>

            {/* ===== My Skills Part ===== */}
            <div className="flex gap-5 flex-col">
        <h2 className='mt-[100px] text-sm font-medium capitalize text-[#cdcdcd]'>my skills</h2>
        <p className='w-full md:w-[550px] text-2xl font-bold text-[#b0f221] uppercase'>let's know my popular skills and experience</p>
        <div className="flex items-center flex-wrap gap-5 justify-center">
            <div className="w-[150px] h-[200px] rounded-xl border-[1px] border-solid border-[#929292] bg-[#505050] transition-all hover:border-[#b0f221] p-5 flex gap-3 flex-col justify-center items-center overflow-hidden">
                <img src={html} alt="HTML" />
                <h3 className='text-xs font-semibold text-white'>HTML</h3>
            </div>
        </div>
      </div>

      {/* ===== My Resume Part ===== */}
      <div className="flex flex-col gap-5">
        <h3 className='mt-[100px] text-sm font-medium capitalize text-[#cdcdcd]'>my resume</h3>
        <p className='w-full md:w-[550px] text-2xl font-bold text-[#b0f221] uppercase'>explore my education and real experience</p>
        <div className="flex flex-col md:flex-row justify-between gap-10">
            <div className="flex flex-col gap-10 bg-black p-3 rounded-lg">
                <h4 className='text-2xl font-bold text-white uppercase'>education</h4>
                <div className="w-full md:w-[500px] flex items-center gap-5 overflow-hidden bg-[#afafaf] p-1 rounded-lg">
                    <img className='w-[50px]' src={mist} alt="MIST" />
                    <div className="flex flex-col gap-2">
                        <p className='text-sm capitalize font-medium text-[#212121]'>July 2017 - March 2022</p>
                        <p className='text-md font-semibold text-black capitalize'>diploma in mechanical technology</p>
                        <p className='text-sm capitalize font-medium text-[#212121]'>mangrove institute of science and technology</p>
                    </div>
                </div>
                <div className="w-full md:w-[500px] flex items-center gap-5 overflow-hidden bg-[#afafaf] p-1 rounded-lg">
                    <img className='w-[50px]' src={bss} alt="BSS" />
                    <div className="flex flex-col gap-2">
                        <p className='text-sm capitalize font-medium text-[#212121]'>January 2012 - March 2017</p>
                        <p className='text-md font-semibold text-black capitalize'>science in secondary school certificate (S.S.C)</p>
                        <p className='text-sm capitalize font-medium text-[#212121]'>bangobashi secondary school</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-10 bg-black p-3 rounded-lg">
                <h4 className='text-2xl font-bold text-white uppercase'>experience</h4>
                <div className="w-full md:w-[500px] flex items-center gap-5 overflow-hidden bg-[#afafaf] p-1 rounded-lg">
                    <img className='w-[50px]' src={cit} alt="CIT" />
                    <div className="flex flex-col gap-2">
                        <p className='text-sm capitalize font-medium text-[#212121]'>January 2024 - October 2024</p>
                        <p className='text-md font-semibold text-black capitalize'>front-end web development</p>
                        <p className='text-sm capitalize font-medium text-[#212121]'>creative it institute</p>
                    </div>
                </div>
                <div className="w-full md:w-[500px] flex items-center gap-5 overflow-hidden bg-[#afafaf] p-1 rounded-lg">
                    <img className='w-[50px]' src={shwapno} alt="Shwapno" />
                    <div className="flex flex-col gap-2">
                        <p className='text-sm capitalize font-medium text-[#212121]'>September 2022 - july 2025</p>
                        <p className='text-md font-semibold text-black capitalize'>checkout assistant</p>
                        <p className='text-sm capitalize font-medium text-[#212121]'>ACI logistics ltd. (shwapno)</p>
                    </div>
                </div>
                <div className="w-full md:w-[500px] flex items-center gap-5 overflow-hidden bg-[#afafaf] p-1 rounded-lg">
                    <img className='w-[50px]' src={bitac} alt="BITAC" />
                    <div className="flex flex-col gap-2">
                        <p className='text-sm capitalize font-medium text-[#212121]'>december 2021 - March 2022</p>
                        <p className='text-md font-semibold text-black capitalize'>industrial training</p>
                        <p className='text-sm capitalize font-medium text-[#212121]'>Bangladesh Industrial Technical Assistance Centre</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Aboutcompo