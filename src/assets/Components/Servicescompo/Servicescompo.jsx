import './Servicescompo.css'
import { FaArrowRight } from "react-icons/fa6";

const Servicescompo = () => {
  return (
    <>
    <div className="mt-[50px] flex flex-col gap-5">
            <h1 className='text-sm font-medium capitalize text-[#cdcdcd]'>what i do</h1>
            <p className='w-full md:w-[500px] text-2xl font-bold text-[#b0f221] uppercase'>my special service for your business development</p>
            <div className="flex justify-between gap-5 flex-wrap">
                <div className="w-[500px] rounded-xl border-2 border-solid flex justify-between p-5 border-[#121212] items-center transition-all hover:border-[#b0f221] bg-[#313131]">
                    <div className="flex flex-col gap-3">
                        <p className='text-xl font-bold capitalize text-[#d1d1d1]'>web design</p>
                        <p className='w-[350px] text-sm font-bold capitalize text-[#9f9f9f]'>if you have any type of design that you want to convert to code, let's contact me.</p>
                    </div>
                    <FaArrowRight className='bg-[#b0f221] p-1 text-black rounded-full text-xl transition-all rotate-[-45deg]'/>
                </div>
                <div className="w-[500px] rounded-xl border-[1px] border-solid flex justify-between p-5 border-[#121212] items-center transition-all hover:border-[#b0f221] bg-[#313131]">
                    <div className="flex flex-col gap-3">
                        <p className='text-xl font-bold capitalize text-[#d1d1d1]'>web development</p>
                        <p className='w-[350px] text-sm font-bold capitalize text-[#9f9f9f]'>I make static website to dynamic website with logic.</p>
                    </div>
                    <FaArrowRight className='bg-[#b0f221] p-1 text-black rounded-full text-xl transition-all rotate-[-45deg]'/>
                </div>
                <div className="w-[500px] rounded-xl border-[1px] border-solid flex justify-between p-5 border-[#121212] items-center transition-all hover:border-[#b0f221] bg-[#313131]">
                    <div className="flex flex-col gap-3">
                        <p className='text-xl font-bold capitalize text-[#d1d1d1]'>figma to code</p>
                        <p className='w-[350px] text-sm font-bold capitalize text-[#9f9f9f]'>I convert figma design into code using HTML, CSS, ReactJS, Bootstrap, Tailwind CSS.</p>
                    </div>
                    <FaArrowRight className='bg-[#b0f221] p-1 text-black rounded-full text-xl transition-all rotate-[-45deg]'/>
                </div>
            </div>
    </div>
    </>
  )
}

export default Servicescompo