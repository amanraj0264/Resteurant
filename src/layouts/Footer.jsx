import footlogo from "./image/logo.png"
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { BiLogoFacebook } from "react-icons/bi";
import { FaYoutube } from "react-icons/fa";

export const Footer = () => {
    return (
        <>
            <div className="w-full bg-gray-100  py-6 px-4">
                <div className="max-w-[1200px] mx-auto flex lg:flex-row flex-col justify-between items-center lg:space-y-0 space-y-3">
                <div>
                <img src={footlogo} alt="" />
                </div>
                <div className="flex justify-center items-center gap-2 py-2">
                    <FaTwitter />
                    <FaInstagram />
                    <BiLogoFacebook />
                    <FaYoutube />
                </div>
                <div>
                    <p>© late 2021 Starbelly. All Rights Reserved.</p>
                </div>
                </div>

            </div>
        </>
    )
}