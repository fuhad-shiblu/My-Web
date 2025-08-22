import { Outlet } from "react-router-dom"
import Navbar from "../Components/Navbar/Navbar"
import Footer from "../Components/Footer/Footer"
import Resnavcompo from "../Components/Resnavcompo/Resnavcompo"

const PrimaryLayout = () => {
  return (
    <>
    <div className="container mx-auto">
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
    <Resnavcompo/>
    </>
  )
}

export default PrimaryLayout