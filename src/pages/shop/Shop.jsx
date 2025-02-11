
import { useNavigate } from "react-router-dom"
import { Staterdish } from "../menu/menucomponents/Staterdish"
import arrow from "./image/arrow.png"
import delivery from "./image/delivery.png"

import { MenuItemsType } from "./shopcomponents/MenuItemsType.jsx"

export const Shop = () => {

    const navigate = useNavigate();
    const handleClickMore = () => {
        navigate('/menu');
    }
    const handleClickViewAll = () => {
        navigate('/menu');
    }

    return (
        <>
            {/* Shop first Section Start */}
            <div className="w-full bg-gray-100 my-2">

                <div className="max-w-[1200px] mx-auto sm:px-4 xs:px-4 lg:px-8 ">

                    <div className="flex justify-center items-center lg:h-[600px] md:h-[500px] h-[450px]">
                        <div className=" text-center space-y-4  ">
                            <span className="py-2 px-2 bg-gray-200">Shop</span>
                            <h1 className="font-sora lg:text-6xl md:text-5xl text-3xl font-bold leading-tight">Taste the dishes of the restaurant without leaving home.</h1>
                            <p className="font-sora text-color-sub-heading ">Consectetur numquam poro nemo veniam
                                eligendi rem adipisci quo modi.</p>

                            <button onClick={handleClickMore} className="py-4 px-10  bg-color-secondary font-sora font-bold text-sm">See More</button>
                        </div>
                    </div>
                    
                </div>
            </div>
            {/* Shop first Section end */}


            {/* Shop second Section start */}
            <div className="max-w-[1200px] mx-auto sm:px-4 xs:px-4 lg:px-8 flex gap-5">
                <MenuItemsType></MenuItemsType>
            </div>
            {/* Shop second Section end */}


            <div className='max-w-[1200px] mx-auto  py-10'>
                <div className='grid lg:grid-cols-2 gap-10'>
                    <div className='flex md:py-10 py-4 px-4'>
                        <div className='space-y-2 '>
                            <h6 className='text-4xl font- font-bold'>Most popular dishes</h6>
                            <p className='w-4/6 font-sora pt-4 text-color-sub-heading'>Consectetur numquam poro nemo veniam
                                eligendi rem adipisci quo modi.</p>
                        </div>
                    </div>
                    <div className=' flex md:justify-end items-end md:py-20  px-4'>
                        <button onClick={handleClickViewAll} className='py-4 px-6 bg-color-secondary rounded flex items-center font-sora font-semibold text-sm'><img src={arrow} className='pr-3' >
                        </img>View All</button>
                    </div>
                </div>


            </div>


            <div className="max-w-[1200px] mx-auto grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10  py-8 px-4">
            <Staterdish/>
             </div>



             <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 sm:px-4 xs:px-4 lg:px-8 gap-10 my-8">
                             <div className="flex justify-center items-center">
                                 <div className="">
                                     <h1 className="text-7xl font-bold font-sora md:text-start text-center">Free delivery service.!</h1>
             
                                     <p className=" md:w-80 md:text-start text-center  font-sora text-color-sub-heading text-sm mt-5">*Consectetur numquam poro nemo veniam
                                         eligendi rem adipisci quo modi.</p>
             
             
                                 </div>
                             </div>
             
                             <div className="flex justify-center items-center">
                                 <div>
             
                                     <img src={delivery} alt="" />
             
                                 </div>
             
             
                             </div>
             
             
                         </div>
        </>
    )
}