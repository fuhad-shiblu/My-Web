import './Contactcompo.css'
import { MdOutlineDone } from "react-icons/md";

const Contactcompo = () => {
  return (
    <>
    <div className="mt-[50px] flex flex-col gap-10 md:flex-row justify-between">
      <div className="flex flex-col gap-10">
        <h1 className='text-sm font-medium capitalize text-[#cdcdcd]'>get in touch</h1>
        <p className='w-full md:w-[350px] text-2xl font-bold text-[#b0f221] uppercase'>let's talk for your next projects</p>
        <div className="flex flex-col gap-5">
        <div className="flex items-center gap-5">
          <MdOutlineDone className='w-[30px] h-[30px] bg-[#b0f221] text-[#262626] rounded-full p-1'/>
          <p className='text-sm text-[#c8c8c8] font-semibold capitalize'>3+ years of experience</p>
        </div>
        <div className="flex items-center gap-5">
          <MdOutlineDone className='w-[30px] h-[30px] bg-[#b0f221] text-[#262626] rounded-full p-1'/>
          <p className='text-sm text-[#c8c8c8] font-semibold capitalize'>professional front-end web developer</p>
        </div>
        <div className="flex items-center gap-5">
          <MdOutlineDone className='w-[30px] h-[30px] bg-[#b0f221] text-[#262626] rounded-full p-1'/>
          <p className='text-sm text-[#c8c8c8] font-semibold capitalize'>convert figma design to code</p>
        </div>
      </div>
      </div>
      <form className='w-full md:w-[650px] p-5 bg-[#0c0c0c] rounded-xl'>
        <label className='text-xl font-semibold text-white capitalize'>full name</label>
        <br />
        <input className='w-full mt-5 mb-5 bg-[#181818] px-3 text-white placeholder:text-[#868686] placeholder:font-medium font-light py-2 rounded-lg border-2 border-solid border-[#707070] outline-none focus:border-[#b0f221] transition-all' type="text" placeholder='John Doe'/>
        <label className='text-xl font-semibold text-white capitalize'>E-Mail Address</label>
        <br />
        <input className='w-full mt-5 mb-5 bg-[#181818] px-3 text-white placeholder:text-[#868686] placeholder:font-medium font-light py-2 rounded-lg border-2 border-solid border-[#707070] outline-none focus:border-[#b0f221] transition-all' type="email" placeholder='username@example.com'/>
        <label className='text-xl font-semibold text-white capitalize'>subject</label>
        <br />
        <input className='w-full mt-5 mb-5 bg-[#181818] px-3 text-white placeholder:text-[#868686] placeholder:font-medium font-light py-2 rounded-lg border-2 border-solid border-[#707070] outline-none focus:border-[#b0f221] transition-all' type="text" placeholder='I would like to discussed'/>
        <label className='text-xl font-semibold text-white capitalize'>message</label>
        <br />
        <textarea className='w-full h-[150px] mt-5 bg-[#181818] px-3 text-white placeholder:text-[#868686] placeholder:font-medium font-light py-2 rounded-lg border-2 border-solid border-[#707070] outline-none focus:border-[#b0f221] transition-all' type="text" placeholder='Write your messages'/>
        <button className='w-full p-3 bg-[#b0f221] mt-5 rounded-lg text-[#171717] font-bold uppercase text-xl hover:bg-[#8cca08] transition-all active:scale-[.9]'>send</button>
      </form>
    </div>
    </>
  )
}

export default Contactcompo