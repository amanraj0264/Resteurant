export const MobileApp=()=>{
    return(
        <>
         {/* Home sixth section start */}

         <div className='w-full mx-auto bg-gray-50'>
                <div className=' max-w-[1200px] mx-auto py-10 grid lg:grid-cols-2 lg:h-[600px]  h-[900px]'>

                    <div className='flex lg:justify-start justify-center items-center px-4 '>
                        <div className='lg:w-3/4 w-4/4'>
                            <h4 className='lg:text-5xl text-3xl font-bold font-sora   text-center lg:text-start'>
                                Download our mobile app.</h4>

                            <p className='text-color-sub-heading py-6 text-center lg:text-start '>Consectetur numquam poro nemo veniam
                                eligendi rem adipisci quo modi.</p>
                            <div className='flex  md:flex-row flex-col justify-center items-center gap-10'>
                                <img className='md:w-60 w-36' src="https://miller.bslthemes.com/starbelly-demo/img/buttons/1.svg" alt="palystore" />
                                <img className='md:w-60 w-36' src="https://miller.bslthemes.com/starbelly-demo/img/buttons/2.svg" alt="app store" />
                            </div>

                        </div>

                    </div>

                    <div className='flex justify-start items-center py-20'>
                        <div className=''>
                            <img src="https://miller.bslthemes.com/starbelly-demo/img/illustrations/phones.png" alt="" />
                        </div>
                    </div>



                </div>
            </div>


            {/* Home sixth section end */}
        </>
    );
}