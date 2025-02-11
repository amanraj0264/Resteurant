
import { useNavigate } from "react-router-dom"

import about_img from "./image/about.jpg"

import sign from "./image/signature.png"
import arrow from "../home/image/arrow.png"
import { Orderprocess } from './aboutcomponent/orderprocess'
import { Chief } from '../home/homecomponents/Chief'
import { MobileApp } from '../home/homecomponents/MobileApp'

import { IoPlayOutline } from "react-icons/io5";



export const About = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/shop');


    }

    


     
    
    return (
        <>

            {/* About first Section Start */}
            <div className="w-full bg-gray-100 my-2">

                <div className="max-w-[1200px] mx-auto sm:px-4 xs:px-4 lg:px-8 ">

                    <div className="flex justify-center items-center lg:h-[600px] md:h-[500px] h-[450px]">
                        <div className=" text-center space-y-4 w-5/6 ">
                            <span className="py-2 px-2 bg-gray-200">About</span>
                            <h1 className="font-sora lg:text-6xl md:text-5xl text-3xl font-bold leading-tight">There is no love more sincere
                                than the love of food.</h1>
                            <p className="font-sora text-color-sub-heading ">Consectetur numquam poro nemo veniam
                                eligendi rem adipisci quo modi.</p>

                            <button onClick={handleClick} className="py-4 px-10  bg-color-secondary font-sora font-bold text-sm">See More</button>
                        </div>
                    </div>
                    <div className="">

                    </div>
                </div>
            </div>
            {/* About first Section end */}



            {/* About second Section Start */}
            <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 sm:px-4 xs:px-4 lg:px-8 gap-10">
                <div className="flex justify-center items-center">
                    <div className="">
                        <div className="relative my-20">

                            <div className=' md:block  hidden absolute h-[600px] w-[350px] drop-shadow-md -right-1 -bottom-10 bg-gray-100 -z-20'>

                            </div>
                            <img className='lg:w-5/6 -z-30' src={about_img} alt="" />



                            <div className='absolute size-44   right-10 -bottom-10 bg-white z-20 flex justify-between items-center'>

                                <span className='border-2 border-dotted m-4 py-2'>
                                    <p className='font-num font-normal text-center text-6xl text-color-secondary'>17</p>
                                    <p className='text-xl font-sora font-bold text-center'> Years Experiense</p>
                                </span>



                            </div>


                        </div>



                    </div>
                </div>

                <div className="flex justify-center items-center">
                    <div>
                        <h1 className='text-4xl font-sora font-bold lg:w-3/4'>We are doing more than
                            you expect</h1>

                        <p className='pt-10 text-color-sub-heading font-sora'>
                            Faudantium magnam error temporibus ipsam aliquid neque quibusdam dolorum, quia ea numquam assumenda mollitia dolorem impedit. Voluptate at quis exercitationem officia temporibus adipisci quae totam enim dolorum, assumenda. Sapiente soluta nostrum reprehenderit a velit obcaecati facilis vitae magnam tenetur neque vel itaque inventore eaque explicabo commodi maxime! Aliquam quasi, voluptates odio.
                        </p>

                        <p className='pt-4 text-color-sub-heading font-sora'>Consectetur adipisicing elit. Cupiditate nesciunt amet facilis numquam, nam adipisci qui voluptate voluptas enim obcaecati veritatis animi nulla, mollitia commodi quaerat ex, autem ea laborum.
                        </p>

                        <img className='pt-5 mb-8 w-48' src={sign} alt="sign" />
                    </div>


                </div>


            </div>

            {/* About second Section end */}




            {/* About third Section start */}


            <div className='max-w-[1200px] mx-auto sm:px-4 xs:px-4 lg:px-8 grid lg:grid-cols-3 md:grid-cols-2 gap-10 my-14'>
                <Orderprocess num="01" step="We are located in the city center" />
                <Orderprocess num="02" step="Fresh ingredients from organic farms" />
                <Orderprocess num="03" step="Own fast delivery. 30 min Maximum" />
                <Orderprocess num="04" step="Professional, experienced chefs" />
                <Orderprocess num="05" step="The highest standards of service" />

            </div>

            {/* About third Section end */}



            {/* About fourth Section start */}
            <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 sm:px-4 xs:px-4  gap-10">
                <div className="flex justify-center items-center">
                    <div>
                        <span className='py-1 px-2 bg-gray-100 text-sm '>Promo video</span>

                        <h3 className='font-soro text-4xl font-bold mt-5'>
                            Restaurant is like a theater.
                            Our task is to amaze you!
                        </h3>

                        <p className='text-sm font-sora my-5'>
                            Repellat, dolorem a. Qui ipsam quos, obcaecati mollitia consectetur ad vero minus neque sit architecto totam distineserunt pariatur adipisci rem aspernatur illum ex!
                        </p>

                        <span>
                            <button  className='py-2 px-4 flex items-center gap-3 bg-color-secondary'><IoPlayOutline/> Promo video</button>
                        </span>

                    </div>
                </div>

                <div className='flex md:justify-start justify-center items-center'>


                    

                    <iframe className="w-full h-[300px]"  src="https://www.youtube.com/embed/F3zw1Gvn4Mk?si=l7bou0fZC2eLVlgY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>

            </div>



            {/* About fourth Section end */}





            {/* About fifth Section start */}

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

            {/* About fifth Section end */}






            <MobileApp />



        </>
    )
}