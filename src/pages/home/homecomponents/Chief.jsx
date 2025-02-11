import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { BiLogoFacebook } from "react-icons/bi";
import { FaYoutube } from "react-icons/fa";


export const Chief = () => {
    return (
        <>
            
                
                    {ChiefData.map((d) =>


                        <div key={d.id}>
                            <div className="overflow-hidden border-2">
                                <img className="hover:scale-110 duration-200 ease-in-out bg-gray-100 " src={d.img} alt="dish" />
                            </div>
                            <div className="text-center py-2">
                                <p className="text-sm font-sora font-bold">{d.chiefname}</p>
                                <p className="text-color-sub-heading">{d.position}</p>
                            </div>
                            <div className="flex justify-center items-center gap-2 py-2">
                                <FaTwitter />
                                <FaInstagram />
                                <BiLogoFacebook />
                                <FaYoutube />
                            </div>








                        </div>




                    )}
                
            
        </>
    );
}


const ChiefData = [
    {
        id: "1",
        img: "https://miller.bslthemes.com/starbelly-demo/img/team/4.png",
        chiefname: "Paul Trueman",
        position: "Chief",

    },

    {
        id: "2",
        img: "https://miller.bslthemes.com/starbelly-demo/img/team/2.png",
        chiefname: "Emma Newman",
        position: "Assistant chef",
    },


    {
        id: "3",
        img: "https://miller.bslthemes.com/starbelly-demo/img/team/3.png",
        chiefname: "Emma Newman",
        position: "Chief",
    },


    {
        id: "4",
        img: "https://miller.bslthemes.com/starbelly-demo/img/team/4.png",
        chiefname: "Ed Freeman",
        position: "Assistant chef",
    },



]