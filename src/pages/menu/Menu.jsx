import { Drink } from "./menucomponents/Drink"
import { Maindish } from "./menucomponents/Maindish"
import { Staterdish } from "./menucomponents/Staterdish"

import burger from "./image/burger-2.png"
import { useNavigate } from "react-router-dom"



export const Menu = () => {

    const navigate = useNavigate();
    const handleClickMenu = () => {
        navigate('/shop');
    }
    return (
        <>

            {/* first section menu start */}

            <div className="w-full bg-gray-100 my-2">

                <div className="max-w-[1200px] mx-auto sm:px-4 xs:px-4 lg:px-8 ">

                    <div className="flex justify-center items-center lg:h-[600px] md:h-[500px] h-[450px]">
                        <div className=" text-center space-y-4 w-5/6 ">
                            <span className="py-2 px-2 bg-gray-200">Menu</span>
                            <h1 className="font-sora lg:text-6xl md:text-5xl text-3xl font-bold leading-relaxed">Only appetite
                                Can be lacking in cooking</h1>
                            <p className="font-sora text-color-sub-heading ">Consectetur numquam poro nemo veniam
                                eligendi rem adipisci quo modi.</p>

                            <button onClick={handleClickMenu} className="py-4 px-10  bg-color-secondary font-sora font-bold text-sm">See More</button>
                        </div>
                    </div>

                </div>
            </div>

            {/* first section menu end */}


            {/* second section menu start */}

            <div className="max-w-[1200px] mx-auto sm:px-4 xs:px-4 lg:px-8">
                <div className="flex justify-center">
                    <div className="text-center my-20 w-2/6">
                        <h5 className="font-sora font-bold text-4xl">Starters</h5>
                        <p className="font-sora  text-color-sub-heading mt-6 text-sm">Consectetur numquam poro nemo veniam
                            eligendi rem adipisci quo modi.</p>
                    </div>
                </div>


                <div className="max-w-[1200px] mx-auto grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10  py-8 px-4">
                    <Staterdish />
                </div>

            </div>

            {/* second section menu start */}



            {/* third section menu start */}

            <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 sm:px-4 xs:px-4 lg:px-8 gap-10 my-8">
                <div className="flex justify-center items-center">
                    <div className="">
                        <h1 className="text-7xl font-bold font-sora md:text-start text-center">-50% Discount
                            for all* burgers!</h1>

                        <p className=" md:w-80 md:text-start text-center  font-sora text-color-sub-heading text-sm mt-5">*Consectetur numquam poro nemo veniam
                            eligendi rem adipisci quo modi.</p>


                    </div>
                </div>

                <div className="flex justify-center items-center">
                    <div>

                        <img src={burger} alt="" />

                    </div>


                </div>


            </div>

            {/* third section menu start */}



            {/* fourth section menu start */}

            <div className="max-w-[1200px] mx-auto sm:px-4 xs:px-4 lg:px-8">
                <div className="flex justify-center">
                    <div className="text-center my-20 w-2/6">
                        <h5 className="font-sora font-bold text-4xl">Main Dishes</h5>
                        <p className="font-sora  text-color-sub-heading mt-6 text-sm">Consectetur numquam poro nemo veniam
                            eligendi rem adipisci quo modi.</p>
                    </div>
                </div>


                <div className="max-w-[1200px] mx-auto grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10  py-8 px-4">
                    <Maindish />
                </div>

            </div>

            {/* fourth section menu start */}



            {/* fifth section menu start */}

            <div className="max-w-[1200px] mx-auto sm:px-4 xs:px-4 lg:px-8">
                <div className="flex justify-center">
                    <div className="text-center my-20 w-2/6">
                        <h5 className="font-sora font-bold text-4xl">Drink</h5>
                        <p className="font-sora  text-color-sub-heading mt-6 text-sm">Consectetur numquam poro nemo veniam
                            eligendi rem adipisci quo modi.</p>
                    </div>
                </div>


                <div className="max-w-[1200px] mx-auto grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10  py-8 px-4">
                    <Drink />
                </div>

            </div>

            {/* fifth section menu start */}
        </>
    )
}