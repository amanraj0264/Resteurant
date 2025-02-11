
export const Menuitems = () => {

    return (

        <>
            <div className='max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-10  py-8 px-4'>


                {menuData.map((d) =>
                    <div key={d.id}>
                        <div className='flex justify-center items-center gap-10 py-6 bg-gray-50 hover:shadow hover:shadow-gray-400 duration-200 ease-in-out '>

                            <div className="">

                                <img className="w-14 h-14 text-color-secondary" src={d.img} alt="menu-img" />

                            </div>
                            <div>
                                <h6 className="text-xl font-sora font-bold ">{d.menu}</h6>
                                <p className="text-color-sub-heading py-1">{d.para}
                                </p>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </>



    )
}


const menuData = [
    {
        id: "1",
        img: "https://miller.bslthemes.com/starbelly-demo/img/categories/1.png",
        menu: "Starters",
        para: "Lorem ipsum dolor sit amet, consectetur adipisicing."
    },

    {
        id: "2",
        img: "https://miller.bslthemes.com/starbelly-demo/img/categories/2.png",
        menu: "Main dishes",
        para: "Lorem ipsum dolor sit amet, consectetur adipisicing."
    },


    {
        id: "3",
        img: "https://miller.bslthemes.com/starbelly-demo/img/categories/2.png",
        menu: "Drink",
        para: "Lorem ipsum dolor sit amet, consectetur adipisicing."
    },


    {
        id: "4",
        img: "https://miller.bslthemes.com/starbelly-demo/img/categories/4.png",
        menu: "Desserts",
        para: "Lorem ipsum dolor sit amet, consectetur adipisicing."
    },

]






