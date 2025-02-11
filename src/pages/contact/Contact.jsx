import { IoLocationSharp } from "react-icons/io5";
import { MdLocalPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { useState } from "react";
export const Contact = () => {


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleFormSubmit = (event) => {
        event.preventDefault();

        const userdata = {
            name,
            email,
            message,
        }
        alert("Message Send Successfully")
        console.log(userdata);
    };

    return (
        <>


            <div className="w-full bg-gray-100 py-20">


                <div className="max-w-[1200px] mx-auto sm:px-4 xs:px-4 lg:px-8 grid md:grid-cols-2 gap-10 w-full md:h-[600px] h-[920px]">


                    <div className="flex md:justify-start items-center justify-center">
                        <div className=" md:text-start text-center space-y-10 ">
                            <span className="bg-gray-200 text-sm py-2 px-2">Contact</span>

                            <h1 className="font-sora text-6xl font-bold ">Get in Touch with Starbelly</h1>
                            <div className="flex md:justify-start justify-center">
                            <p className="font-sora  text-color-sub-heading text-sm w-3/5">Consectetur numquam poro nemo veniam
                            eligendi rem adipisci quo modi.</p>
                            </div>

                            <div className="space-y-2">
                            <div className="flex justify-center md:justify-start items-center gap-4">
                                <IoLocationSharp className="text-color-secondary text-2xl"></IoLocationSharp>
                                <p>Montréal, 1510 Rue Sauvé</p>
                            </div>

                            <div className="flex items-center md:justify-start justify-center gap-4">
                                <MdLocalPhone className="text-color-secondary text-2xl"></MdLocalPhone>
                                <p>+02 (044) 756-X6-52</p>
                            </div>

                            <div className="flex md:justify-start justify-center items-center gap-4">
                                <MdEmail className="text-color-secondary text-2xl"></MdEmail>
                                <p>starbelly@mail.com</p>
                            </div>

                            
                            </div>
                        </div>


                    </div>



                    <div className="flex justify-center items-center ">
                        <div className="bg-white   md:h-[450px] lg:h-[540px] md:w-[400px] lg:w-[460px]  drop-shadow-md flex justify-center items-center">


                            <div className=" lg:border-2 lg:border-dotted px-4 ">
                                <div className="flex justify-center py-10">
                                    <span className="text-center font-sora text-xl font-semibold">Send Message</span>
                                </div>
                                <form className="" onSubmit={handleFormSubmit}>

                                    <div className=" space-y-5">

                                        <div className="">
                                            <input className=" border-gray-300 rounded md:w-[340px] w-[290px] h-12 bg-gray-100 text-color-sub-heading pl-4 focus:outline-none focus:border-b-4 focus:border-color-secondary" text="text" name="name" placeholder="Name" required value={name}
                                                onChange={(e) => setName(e.target.value)}
                                            ></input>
                                        </div>


                                        <div>
                                            <input className=" border-gray-300 rounded md:w-[340px] w-[290px] h-12 bg-gray-100 text-color-sub-heading pl-4 focus:outline-none focus:border-b-4 focus:border-color-secondary" text="email" name="email" placeholder="Email" required value={email}
                                                onChange={(e) => setEmail(e.target.value)}></input>
                                        </div>

                                        <div>
                                            <textarea className=" border-gray-300 rounded  md:w-[340px] w-[290px]  h-20 bg-gray-100 text-color-sub-heading pl-4 pt-6 focus:outline-none focus:border-b-4 focus:border-color-secondary" name="message" placeholder="Message" required value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                                        </div>

                                        <p className="text-center">We promise not to disclose your
                                            personal <br /> information to third parties.</p>



                                        <div className="flex justify-center ">
                                            <button className="py-2 px-8 rounded lg:mb-4 md:mb-8 mb-10 bg-color-secondary " type="submit">Send</button>
                                        </div>
                                    </div>
                                </form>

                            </div>




                        </div>
                    </div>














                </div>

                <div>

                </div>
            </div>

        </>
    )
}