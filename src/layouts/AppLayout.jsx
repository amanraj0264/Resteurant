import { Outlet } from "react-router-dom";
import { Footer } from "./Footer.jsx"
import { Navbar } from "./Navbar.jsx"

const AppLayout =()=>{
    return(
        <>
        <Navbar/>
        <Outlet/>
        <Footer/>
        </>
    )
}

export default AppLayout; 