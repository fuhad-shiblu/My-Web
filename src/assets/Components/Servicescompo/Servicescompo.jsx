import './Servicescompo.css'
import { FaArrowRight } from "react-icons/fa6";

const Servicescompo = () => {
  return (
    <>
      <div className="mt-[50px] bg-[#f0f0f0] p-5 rounded-lg">
        <div className="flex flex-col gap-5">
            <h1 className='text-sm font-medium capitalize text-[#4b4b4b]'>what i do</h1>
            <p className='w-full md:w-[550px] text-2xl font-bold text-[#FB4141] uppercase'>my special service for your business development</p>
            <div className="flex justify-between gap-5 flex-wrap">
                <div className="w-[500px] rounded-xl border-2 border-solid flex justify-between p-5 items-center transition-all hover:scale-[1.1] hover:border-[#FB4141] bg-[#a0a0a0]">
                    <div className="flex flex-col gap-3">
                        <p className='text-xl font-bold capitalize text-[#0e0e0e]'>web design</p>
                        <p className='w-[350px] text-sm font-bold capitalize text-[#242424]'>if you have any type of design that you want to convert to code, let's contact me</p>
                    </div>
                    <FaArrowRight className='bg-[#FB4141] p-1 text-white rounded-full text-xl transition-all rotate-[-45deg]'/>
                </div>
                <div className="w-[500px] rounded-xl border-2 border-solid flex justify-between p-5 items-center transition-all hover:scale-[1.1] hover:border-[#FB4141] bg-[#a0a0a0]">
                    <div className="flex flex-col gap-3">
                        <p className='text-xl font-bold capitalize text-[#0e0e0e]'>web development</p>
                        <p className='w-[350px] text-sm font-bold capitalize text-[#242424]'>I make static website to dynamic website with logic.</p>
                    </div>
                    <FaArrowRight className='bg-[#FB4141] p-1 text-white rounded-full text-xl transition-all rotate-[-45deg]'/>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Servicescompo