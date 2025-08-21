import { Link } from "react-router-dom"

const Notfoundpage = () => {
  return (
    <>
    <div className="w-full h-screen flex flex-col items-center justify-center gap-5">
        <h1 className="text-5xl text-black font-black">Oops!</h1>
        <p className="w-[450px] md:w-full font-semibold text-[#464546] text-center">May be this page has been moved or deleted. Please check spelling and try again.</p>
        <p className="text-xl font-medium text-black">or</p>
        <Link className="px-3 py-2 bg-[#FF0066] text-white rounded-lg capitalize font-black text-xl" to={'/'}>go to homepage</Link>
    </div>
    </>
  )
}

export default Notfoundpage