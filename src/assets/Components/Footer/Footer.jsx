import { FaHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
    const creditsyear = new Date().getFullYear()
  return (
    <>
    <footer className="mt-[100px] p-5 flex items-center gap-1 justify-center">
        <p className="text-sm font-medium text-white capitalize">&#169;{creditsyear},</p>
        <Link className="text-sm font-bold text-white capitalize hover:underline" to={'https://github.com/fuhad-shiblu'} target="_blank">fuhad hasan shiblu</Link>
        <p className="text-sm font-medium text-white capitalize">| all rights reserved</p>
    </footer>
    </>
  )
}

export default Footer