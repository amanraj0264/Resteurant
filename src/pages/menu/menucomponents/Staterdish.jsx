import { FaStar } from "react-icons/fa";
export const Staterdish = () => {

    return (
        <>
           
                {staterdishData.map((d) =>
                
                
                    <div key={d.id}>
                        <div className="overflow-hidden">
                        <img className="hover:scale-110 duration-200 ease-in-out" src={d.img} alt="dish" />
                        </div>

                        <div className="flex justify-between items-center bg-gray-200 ">
                            <p className="pl-2 font-sora text-sm font-bold">{d.dishname}</p>
                            <p className=" bg-color-secondary py-4 px-2 font-sora text-sm font-bold">{d.price}</p>
                        </div>

                        <div>
                        <p className=" py-2 text-color-sub-heading">{d.para}</p>

                        <div className="flex gap-2">
                            <FaStar className="text-color-secondary"></FaStar>
                            <FaStar className="text-color-secondary"></FaStar>
                            <FaStar className="text-color-secondary"></FaStar>
                            <FaStar className="text-color-secondary"></FaStar>
                            <FaStar className="text-color-secondary"></FaStar>

                        </div>
                        </div>


                    </div>
                    
              

                   
                )}
              
        </>
    )
}



const staterdishData = [
    {
        id: "1",
        img: "https://miller.bslthemes.com/starbelly-demo/img/menu/1.jpg",
        dishname: "Carpaccio de daurade",
        price: "200Rs",
        para: "tomatoes, nori, feta cheese, mushrooms, rice noodles, corn, shrimp."
    },

    {
        id: "2",
        img: "https://miller.bslthemes.com/starbelly-demo/img/menu/2.jpg",
        dishname: "Chevrefrit au miel",
        price: "400Rs",
        para: "tomatoes, nori, feta cheese, mushrooms, rice noodles, corn, shrimp."
    },


    {
        id: "3",
        img: "https://miller.bslthemes.com/starbelly-demo/img/menu/3.jpg",
        dishname: "Saumon Gravlax",
        price: "500Rs",
        para: "tomatoes, nori, feta cheese, mushrooms, rice noodles, corn, shrimp."
    },


    {
        id: "4",
        img: "https://miller.bslthemes.com/starbelly-demo/img/menu/4.jpg",
        dishname: "Croustillant de poisson",
        price: "600Rs",
        para: "tomatoes, nori, feta cheese, mushrooms, rice noodles, corn, shrimp."
    },

    {
        id: "5",
        img: "https://miller.bslthemes.com/starbelly-demo/img/menu/5.jpg",
        dishname: "Croustillant de poisson",
        price: "600Rs",
        para: "tomatoes, nori, feta cheese, mushrooms, rice noodles, corn, shrimp."
    },
    {
        id: "6",
        img: "https://miller.bslthemes.com/starbelly-demo/img/menu/6.jpg",
        dishname: "Croustillant de poisson",
        price: "600Rs",
        para: "tomatoes, nori, feta cheese, mushrooms, rice noodles, corn, shrimp."
    },
    {
        id: "7",
        img: "https://miller.bslthemes.com/starbelly-demo/img/menu/7.jpg",
        dishname: "Croustillant de poisson",
        price: "600Rs",
        para: "tomatoes, nori, feta cheese, mushrooms, rice noodles, corn, shrimp."
    },
    {
        id: "8",
        img: "https://miller.bslthemes.com/starbelly-demo/img/menu/8.jpg",
        dishname: "Croustillant de poisson",
        price: "600Rs",
        para: "tomatoes, nori, feta cheese, mushrooms, rice noodles, corn, shrimp."
    },
    {
        id: "9",
        img: "https://miller.bslthemes.com/starbelly-demo/img/menu/9.jpg",
        dishname: "Croustillant de poisson",
        price: "600Rs",
        para: "tomatoes, nori, feta cheese, mushrooms, rice noodles, corn, shrimp."
    },
    {
        id: "10",
        img: "https://miller.bslthemes.com/starbelly-demo/img/menu/10.jpg",
        dishname: "Croustillant de poisson",
        price: "600Rs",
        para: "tomatoes, nori, feta cheese, mushrooms, rice noodles, corn, shrimp."
    },
    {
        id: "11",
        img: "https://miller.bslthemes.com/starbelly-demo/img/menu/11.jpg",
        dishname: "Croustillant de poisson",
        price: "600Rs",
        para: "tomatoes, nori, feta cheese, mushrooms, rice noodles, corn, shrimp."
    },
    {
        id: "12",
        img: "https://miller.bslthemes.com/starbelly-demo/img/menu/12.jpg",
        dishname: "Croustillant de poisson",
        price: "600Rs",
        para: "tomatoes, nori, feta cheese, mushrooms, rice noodles, corn, shrimp."
    },
   

    

]

