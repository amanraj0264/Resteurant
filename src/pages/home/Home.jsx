import './Home.css'
import menu from "./image/menu.png"
import arrow from "./image/arrow.png"
import img from "./image/interior.jpg"




import { Process } from './homecomponents/Process'
import { Populardishes } from './homecomponents/Populardishes'
import { Chief } from './homecomponents/Chief'

import { NavLink, useNavigate } from 'react-router-dom'
import { MobileApp } from './homecomponents/MobileApp'
import { Menuitems } from './homecomponents/Menuitems'




export const Home = () => {

    const navigate = useNavigate();
    const handleClickAbout = () => {
        navigate('/about');
    }

    
    const handleClickMenu = () => {
        navigate('/menu');


    }

    const handleClickShop = () => {
        navigate('/shop');


    }



    
    return (
        <>
            {/* Home first section start */}
            <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 sm:px-4 xs:px-4 lg:px-8">

                <div className="flex justify-center text-center lg:text-start h-[420px] lg:h-[700px] ">

                    <div className="flex justify-center items-center ">
                        <div className="">
                            <span className="bg-color-territory py-2 opacity-2 text-xs px-2">Hi, new friend!</span>
                            <h1 className=" lg:text-7xl md:text-5xl sm:text-4xl  xs:text-3xl font-bold py-8">
                                We do not cook,
                                we create your
                                emotions!
                            </h1>
                            <p className="text-base mb-4"> We do not cook,
                                we create your
                                emotions!</p>




                            <div className='flex justify-center lg:justify-start items-center' >
                                <div className='flex items-center gap-8'>
                                    <NavLink to="/menu" className='py-3 px-4 bg-color-secondary rounded flex'><img className='pr-3' src={menu}>
                                    </img>Menu</NavLink>

                                    <div className=' py-3 px-3 rounded-full bg-gray-200 '>
                                        <img src={arrow}></img>


                                    </div>
                                    <button onClick={handleClickAbout}>About us</button>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>


                {/* About girl image */}
                <div className="flex justify-center items-center">
                    <div className="outer rounded-b-full">

                    </div>
                </div>

            </div>
            {/* Home first section start */}


            {/* Home second section start */}

            <div className='max-w-[1200px] mx-auto flex lg:flex-row flex-col-reverse  gap-20  py-10'>



                <div className="relative">
                    <div className=' lg:block hidden py-24 bg-[#f9fafc] absolute  h-[340px] w-[300px] -z-10 -right-12 top-32 '>

                    </div>
                    <div className='sm:px-4 xs:px-4 lg:px-8 '>
                        <img src={img} className='w-6/6 h-[420px]'></img>
                    </div>

                    <div className=" absolute right-0 top-72 bg-white text-black shadow-xl py-10 px-10  ">


                        <p className="font-bold text-center text-xl"> <p className='font-num text-color-secondary text-5xl font-normal '>12</p> Years <br></br> Experiense</p>
                    </div>

                </div>

                <div>
                    <h4 className='text-4xl font-bold xs:px-4 sm:px-4 md:px-8'>We are doing more than
                        you expects</h4>
                    <div className='flex justify-center items-center'>

                        <div className='py-6'>

                            <Process num="01" subheading="We are located in the city center" para="Porro nemo veniam necessitatibus praesentium eligendi rem temporibus adipisci quo modi numquam."></Process>


                            <Process num="02" subheading="Fresh, organic ingredients" para="Consectetur numquam porro nemo veniam necessitatibus praesentium eligendi rem temporibus adipisci quo modi."></Process>


                            <Process num="03" subheading="Own fast delivery" para="Necessitatibus praesentium eligendi rem temporibus adipisci quo modi. Lorem ipsum dolor sit."></Process>
                        </div>


                    </div>
                </div>


            </div>

            {/* Home second section end */}



            {/* Home third section start */}


            <div className='max-w-[1200px] mx-auto  py-10'>
                <div className='grid lg:grid-cols-2 gap-10'>
                    <div className='flex md:py-10 py-4 px-4'>
                        <div className='space-y-2 '>
                            <h6 className='text-4xl font- font-bold'>What do you like today?</h6>
                            <p className='w-4/6 font-sora pt-4'>Consectetur numquam poro nemo veniam
                                eligendi rem adipisci quo modi.</p>
                        </div>
                    </div>
                    <div className=' flex md:justify-end items-end md:py-20  px-4'>
                        <button onClick={handleClickShop} className='py-4 px-6 bg-color-secondary rounded flex items-center font-sora font-semibold text-sm'><img className='pr-3' src={arrow}>
                        </img>Go Shopping now</button>
                    </div>
                </div>

                <Menuitems />
            </div>

            {/* Home third section end */}


            {/* Home fourth section start */}
            <div className='max-w-[1200px] mx-auto '>
                <div className='grid lg:grid-cols-2 gap-10'>
                    <div className='flex py-4 px-4'>
                        <div className='space-y-2 '>
                            <h6 className='text-4xl font- font-bold'>Most popular dishes</h6>
                            <p className='w-4/6 font-sora pt-4 text-color-sub-heading'>Consectetur numquam poro nemo veniam
                                eligendi rem adipisci quo modi.</p>
                        </div>
                    </div>

                    <div className=' flex md:justify-end items-end md:py-10  px-4'>
                        <button onClick={handleClickMenu} className='py-4 px-6 bg-color-secondary rounded flex items-center font-sora font-semibold text-sm'><img className='pr-3' src={menu}>
                        </img>Full menu</button>
                    </div>
                </div>


            </div>

            <div className='max-w-[1200px] mx-auto grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10  py-8 px-4'>
                <Populardishes />
            </div>

            {/* Home fourth section end */}



            {/* Home fifth section start */}
            <div className='max-w-[1200px] mx-auto py-10'>
                <div className='grid lg:grid-cols-2 gap-10'>
                    <div className='flex py-4 px-4'>
                        <div className='space-y-2 '>
                            <h6 className='text-4xl font- font-bold'>They will cook for you</h6>
                            <p className='w-4/6 font-sora pt-4 text-color-sub-heading'>Consectetur numquam poro nemo veniam
                                eligendi rem adipisci quo modi.</p>
                        </div>
                    </div>

                    <div className=' flex md:justify-end items-end md:py-10  px-4'>
                        <button className='py-4 px-6 bg-color-secondary rounded flex items-center font-sora font-semibold text-sm'><img className='pr-3' src={arrow}>
                        </img>More about us</button>
                    </div>
                </div>


            </div>
            <div className='max-w-[1200px] mx-auto grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10  py-8 px-4'>
                <Chief />
            </div>


            {/* Home fifth section end */}


            <MobileApp />









        </>
    );
}