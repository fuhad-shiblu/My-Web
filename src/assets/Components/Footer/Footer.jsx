import { FaHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
    const creditsyear = new Date().getFullYear()
  return (
    <>
    <footer className="mt-[50px] bg-[#f0f0f0] px-2 py-3 rounded-lg flex items-center gap-1 justify-center mb-5">
        <p className="text-sm font-medium text-[#363636] capitalize">&#169;{creditsyear},</p>
        <Link className="text-sm font-bold text-[#363636] capitalize hover:underline" to={'https://github.com/fuhad-shiblu'} target="_blank">fuhad hasan shiblu</Link>
        <p className="text-sm font-medium text-[#363636] capitalize">| all rights reserved</p>
    </footer>
    </>
  )
}

export default Footer